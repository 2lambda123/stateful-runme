package model

import (
	"fmt"
	"io"
	"strings"
	"time"
)

type DateTime time.Time

const dateTimeScalarFormat = time.RFC3339

func (d *DateTime) unmarshal(v interface{}) (err error) {
	var t time.Time

	switch v := v.(type) {
	case []byte:
		t, err = time.Parse(dateTimeScalarFormat, strings.Trim(string(v), `"`))
	case string:
		t, err = time.Parse(dateTimeScalarFormat, strings.Trim(v, `"`))
	case *string:
		if v == nil {
			return nil
		}
		t, err = time.Parse(dateTimeScalarFormat, strings.Trim(*v, `"`))
	default:
		return fmt.Errorf("%T is not a string", v)
	}
	if err != nil {
		return fmt.Errorf("failed to parse DateTime: %w", err)
	}

	*d = DateTime(t)

	return
}

func (d DateTime) IsZero() bool {
	return time.Time(d).IsZero()
}

func (d *DateTime) UnmarshalJSON(v []byte) error {
	return d.unmarshal(v)
}

func (d *DateTime) UnmarshalGQL(v interface{}) error {
	return d.unmarshal(v)
}

func (d DateTime) marshal() ([]byte, error) {
	return []byte(`"` + time.Time(d).Format(dateTimeScalarFormat) + `"`), nil
}

func (d DateTime) MarshalJSON() ([]byte, error) {
	return d.marshal()
}

func (d DateTime) MarshalGQL(w io.Writer) {
	b, _ := d.marshal()
	w.Write(b)
}

func (d DateTime) String() string {
	return time.Time(d).Format(dateTimeScalarFormat)
}
