package edit

import (
	"bufio"
	"bytes"
	"strconv"
	"strings"

	"github.com/rs/xid"
	"github.com/stateful/runme/internal/document"
	"github.com/yuin/goldmark/ast"
)

type CellKind int

const (
	MarkupKind CellKind = iota + 1
	CodeKind
)

// Cell resembles NotebookCellData from VS Code.
// https://github.com/microsoft/vscode/blob/085c409898bbc89c83409f6a394e73130b932add/src/vscode-dts/vscode.d.ts#L13715
type Cell struct {
	Kind     CellKind       `json:"kind"`
	Value    string         `json:"value"`
	LangID   string         `json:"languageId"`
	Metadata map[string]any `json:"metadata,omitempty"`
}

// Notebook resembles NotebookData form VS Code.
// https://github.com/microsoft/vscode/blob/085c409898bbc89c83409f6a394e73130b932add/src/vscode-dts/vscode.d.ts#L13767
type Notebook struct {
	Cells    []*Cell        `json:"cells"`
	Metadata map[string]any `json:"metadata,omitempty"`
}

func toCells(node *document.Node, source []byte) (result []*Cell) {
	toCellsRec(node, &result, source)
	return
}

func toCellsRec(
	node *document.Node,
	cells *[]*Cell,
	source []byte,
) {
	if node == nil {
		return
	}

	for childIdx, child := range node.Children() {
		switch block := child.Item().(type) {
		case *document.InnerBlock:
			switch block.Unwrap().Kind() {
			case ast.KindList:
				nodeWithCode := document.FindNode(child, func(n *document.Node) bool {
					return n.Item().Kind() == document.CodeBlockKind
				})
				if nodeWithCode == nil {
					*cells = append(*cells, &Cell{
						Kind:  MarkupKind,
						Value: string(block.Value()),
						Metadata: map[string]any{
							"_id":   genUUID(),
							"_kind": "list",
							"_type": "compound",
						},
					})
				} else {
					for _, listItemNode := range child.Children() {
						nodeWithCode := document.FindNode(listItemNode, func(n *document.Node) bool {
							return n.Item().Kind() == document.CodeBlockKind
						})
						if nodeWithCode != nil {
							toCellsRec(listItemNode, cells, source)
						} else {
							metadata := map[string]any{
								"_id":   genUUID(),
								"_kind": "listItem",
								"_type": "compound",
							}

							inTightListItem := listItemNode.Item().Unwrap().ChildCount() == 1
							if inTightListItem {
								metadata["_tight"] = true
							}

							*cells = append(*cells, &Cell{
								Kind:     MarkupKind,
								Value:    string(listItemNode.Item().Value()),
								Metadata: metadata,
							})
						}
					}
				}

			case ast.KindBlockquote:
				nodeWithCode := document.FindNode(child, func(n *document.Node) bool {
					return n.Item().Kind() == document.CodeBlockKind
				})
				if nodeWithCode != nil {
					toCellsRec(child, cells, source)
				} else {
					*cells = append(*cells, &Cell{
						Kind:  MarkupKind,
						Value: string(block.Value()),
						Metadata: map[string]any{
							"_id":   genUUID(),
							"_kind": "blockquote",
							"_type": "compound",
						},
					})
				}
			}

		case *document.CodeBlock:
			metadata := map[string]any{
				"_id":   genUUID(),
				"_kind": "code",
				"_type": "simple",
			}

			value := block.Value()

			isListItem := node.Item() != nil && node.Item().Unwrap().Kind() == ast.KindListItem

			if childIdx == 0 && isListItem {
				listItem := node.Item().Unwrap().(*ast.ListItem)
				list := listItem.Parent().(*ast.List)
				isBulletList := list.Start == 0

				var prefix []byte

				if isBulletList {
					prefix = append(prefix, []byte{list.Marker, ' '}...)
				} else {
					itemNumber := list.Start
					tmp := child.Item().Unwrap()
					for tmp.PreviousSibling() != nil {
						tmp = tmp.PreviousSibling()
						itemNumber++
					}
					prefix = append([]byte(strconv.Itoa(itemNumber)), '.', ' ')
				}

				value = append(prefix, value...)
			} else if isListItem {
				metadata["_prefix"] = "   "
			}

			*cells = append(*cells, &Cell{
				Kind:     CodeKind,
				Value:    string(value),
				LangID:   block.Language(),
				Metadata: metadata,
			})

		case *document.MarkdownBlock:
			metadata := map[string]any{
				"_id":   genUUID(),
				"_kind": "markdown",
				"_type": "simple",
			}

			value := block.Value()

			isListItem := node.Item() != nil && node.Item().Unwrap().Kind() == ast.KindListItem

			if childIdx == 0 && isListItem {
				listItem := node.Item().Unwrap().(*ast.ListItem)
				list := listItem.Parent().(*ast.List)
				isBulletList := list.Start == 0

				var prefix []byte

				if isBulletList {
					prefix = append(prefix, []byte{list.Marker, ' '}...)
				} else {
					itemNumber := list.Start
					tmp := child.Item().Unwrap()
					for tmp.PreviousSibling() != nil {
						tmp = tmp.PreviousSibling()
						itemNumber++
					}
					prefix = append([]byte(strconv.Itoa(itemNumber)), '.', ' ')
				}

				value = append(prefix, value...)
			} else if isListItem {
				metadata["_prefix"] = "   "
			}

			*cells = append(*cells, &Cell{
				Kind:     MarkupKind,
				Value:    string(value),
				Metadata: metadata,
			})
		}
	}
}

func genUUID() string {
	return xid.New().String()
}

func countTrailingNewLines(b []byte) int {
	count := 0
	for i := len(b) - 1; i >= 0; i-- {
		if b[i] == '\n' {
			count++
		} else {
			break
		}
	}
	return count
}

func serializeCells(cells []*Cell) []byte {
	var buf bytes.Buffer

	for idx, cell := range cells {
		prefix := ""
		if p, ok := cell.Metadata["_prefix"].(string); ok && p != "" {
			prefix = p
		}

		s := bufio.NewScanner(strings.NewReader(cell.Value))
		for s.Scan() {
			_, _ = buf.WriteString(prefix)
			_, _ = buf.Write(s.Bytes())
			_ = buf.WriteByte('\n')
		}

		if idx != len(cells)-1 {
			nlCount := countTrailingNewLines(buf.Bytes())
			nlRequired := 2
			if val, ok := cell.Metadata["_tight"].(bool); ok && val {
				nlRequired = 1
			}
			for i := nlCount; i < nlRequired; i++ {
				_ = buf.WriteByte('\n')
			}
		}
	}

	return buf.Bytes()
}
