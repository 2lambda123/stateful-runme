/* eslint-disable */
// @generated by protobuf-ts 2.9.1 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/parser/v1/parser.proto" (package "runme.parser.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { MessageType } from "@protobuf-ts/runtime";
import { BoolValue } from "../../../google/protobuf/wrappers_pb";
import { UInt32Value } from "../../../google/protobuf/wrappers_pb";
import { Int64Value } from "../../../google/protobuf/wrappers_pb";
/**
 * @generated from protobuf message runme.parser.v1.Notebook
 */
export interface Notebook {
    /**
     * @generated from protobuf field: repeated runme.parser.v1.Cell cells = 1;
     */
    cells: Cell[];
    /**
     * @generated from protobuf field: map<string, string> metadata = 2;
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: runme.parser.v1.Frontmatter frontmatter = 3;
     */
    frontmatter?: Frontmatter;
}
/**
 * @generated from protobuf message runme.parser.v1.ExecutionSummaryTiming
 */
export interface ExecutionSummaryTiming {
    /**
     * @generated from protobuf field: google.protobuf.Int64Value start_time = 1;
     */
    startTime?: Int64Value;
    /**
     * @generated from protobuf field: google.protobuf.Int64Value end_time = 2;
     */
    endTime?: Int64Value;
}
/**
 * @generated from protobuf message runme.parser.v1.CellOutputItem
 */
export interface CellOutputItem {
    /**
     * @generated from protobuf field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from protobuf field: string type = 2;
     */
    type: string;
    /**
     * @generated from protobuf field: string mime = 3;
     */
    mime: string;
}
/**
 * @generated from protobuf message runme.parser.v1.ProcessInfoExitReason
 */
export interface ProcessInfoExitReason {
    /**
     * @generated from protobuf field: string type = 1;
     */
    type: string;
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value code = 2;
     */
    code?: UInt32Value;
}
/**
 * @generated from protobuf message runme.parser.v1.CellOutputProcessInfo
 */
export interface CellOutputProcessInfo {
    /**
     * @generated from protobuf field: runme.parser.v1.ProcessInfoExitReason exit_reason = 1;
     */
    exitReason?: ProcessInfoExitReason;
    /**
     * @generated from protobuf field: google.protobuf.Int64Value pid = 2;
     */
    pid?: Int64Value;
}
/**
 * @generated from protobuf message runme.parser.v1.CellOutput
 */
export interface CellOutput {
    /**
     * @generated from protobuf field: repeated runme.parser.v1.CellOutputItem items = 1;
     */
    items: CellOutputItem[];
    /**
     * @generated from protobuf field: map<string, string> metadata = 2;
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: runme.parser.v1.CellOutputProcessInfo process_info = 3;
     */
    processInfo?: CellOutputProcessInfo;
}
/**
 * @generated from protobuf message runme.parser.v1.CellExecutionSummary
 */
export interface CellExecutionSummary {
    /**
     * @generated from protobuf field: google.protobuf.UInt32Value execution_order = 1;
     */
    executionOrder?: UInt32Value;
    /**
     * @generated from protobuf field: google.protobuf.BoolValue success = 2;
     */
    success?: BoolValue;
    /**
     * @generated from protobuf field: runme.parser.v1.ExecutionSummaryTiming timing = 3;
     */
    timing?: ExecutionSummaryTiming;
}
/**
 * @generated from protobuf message runme.parser.v1.TextRange
 */
export interface TextRange {
    /**
     * @generated from protobuf field: uint32 start = 1;
     */
    start: number;
    /**
     * @generated from protobuf field: uint32 end = 2;
     */
    end: number;
}
/**
 * @generated from protobuf message runme.parser.v1.Cell
 */
export interface Cell {
    /**
     * @generated from protobuf field: runme.parser.v1.CellKind kind = 1;
     */
    kind: CellKind;
    /**
     * @generated from protobuf field: string value = 2;
     */
    value: string;
    /**
     * @generated from protobuf field: string language_id = 3;
     */
    languageId: string;
    /**
     * @generated from protobuf field: map<string, string> metadata = 4;
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: runme.parser.v1.TextRange text_range = 5;
     */
    textRange?: TextRange;
    /**
     * @generated from protobuf field: repeated runme.parser.v1.CellOutput outputs = 6;
     */
    outputs: CellOutput[];
    /**
     * @generated from protobuf field: runme.parser.v1.CellExecutionSummary execution_summary = 7;
     */
    executionSummary?: CellExecutionSummary;
}
/**
 * @generated from protobuf message runme.parser.v1.FrontmatterRunme
 */
export interface FrontmatterRunme {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string version = 2;
     */
    version: string;
}
/**
 * @generated from protobuf message runme.parser.v1.Frontmatter
 */
export interface Frontmatter {
    /**
     * @generated from protobuf field: string shell = 1;
     */
    shell: string;
    /**
     * @generated from protobuf field: string cwd = 2;
     */
    cwd: string;
    /**
     * @generated from protobuf field: bool skip_prompts = 3;
     */
    skipPrompts: boolean;
    /**
     * @generated from protobuf field: runme.parser.v1.FrontmatterRunme runme = 4;
     */
    runme?: FrontmatterRunme;
}
/**
 * @generated from protobuf message runme.parser.v1.DeserializeRequestOptions
 */
export interface DeserializeRequestOptions {
    /**
     * @generated from protobuf field: runme.parser.v1.RunmeIdentity identity = 1;
     */
    identity: RunmeIdentity;
}
/**
 * @generated from protobuf message runme.parser.v1.DeserializeRequest
 */
export interface DeserializeRequest {
    /**
     * @generated from protobuf field: bytes source = 1;
     */
    source: Uint8Array;
    /**
     * @generated from protobuf field: runme.parser.v1.DeserializeRequestOptions options = 2;
     */
    options?: DeserializeRequestOptions;
}
/**
 * @generated from protobuf message runme.parser.v1.DeserializeResponse
 */
export interface DeserializeResponse {
    /**
     * @generated from protobuf field: runme.parser.v1.Notebook notebook = 1;
     */
    notebook?: Notebook;
}
/**
 * @generated from protobuf message runme.parser.v1.SerializeRequestOutputOptions
 */
export interface SerializeRequestOutputOptions {
    /**
     * @generated from protobuf field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * @generated from protobuf field: bool summary = 2;
     */
    summary: boolean;
}
/**
 * @generated from protobuf message runme.parser.v1.SerializeRequestOptions
 */
export interface SerializeRequestOptions {
    /**
     * @generated from protobuf field: runme.parser.v1.SerializeRequestOutputOptions outputs = 1;
     */
    outputs?: SerializeRequestOutputOptions;
}
/**
 * @generated from protobuf message runme.parser.v1.SerializeRequest
 */
export interface SerializeRequest {
    /**
     * @generated from protobuf field: runme.parser.v1.Notebook notebook = 1;
     */
    notebook?: Notebook;
    /**
     * @generated from protobuf field: runme.parser.v1.SerializeRequestOptions options = 2;
     */
    options?: SerializeRequestOptions;
}
/**
 * @generated from protobuf message runme.parser.v1.SerializeResponse
 */
export interface SerializeResponse {
    /**
     * @generated from protobuf field: bytes result = 1;
     */
    result: Uint8Array;
}
/**
 * @generated from protobuf enum runme.parser.v1.CellKind
 */
export declare enum CellKind {
    /**
     * @generated from protobuf enum value: CELL_KIND_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: CELL_KIND_MARKUP = 1;
     */
    MARKUP = 1,
    /**
     * @generated from protobuf enum value: CELL_KIND_CODE = 2;
     */
    CODE = 2
}
/**
 * @generated from protobuf enum runme.parser.v1.RunmeIdentity
 */
export declare enum RunmeIdentity {
    /**
     * aka NONE
     *
     * @generated from protobuf enum value: RUNME_IDENTITY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: RUNME_IDENTITY_ALL = 1;
     */
    ALL = 1,
    /**
     * @generated from protobuf enum value: RUNME_IDENTITY_DOCUMENT = 2;
     */
    DOCUMENT = 2,
    /**
     * @generated from protobuf enum value: RUNME_IDENTITY_CELL = 3;
     */
    CELL = 3
}
declare class Notebook$Type extends MessageType<Notebook> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.Notebook
 */
export declare const Notebook: Notebook$Type;
declare class ExecutionSummaryTiming$Type extends MessageType<ExecutionSummaryTiming> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.ExecutionSummaryTiming
 */
export declare const ExecutionSummaryTiming: ExecutionSummaryTiming$Type;
declare class CellOutputItem$Type extends MessageType<CellOutputItem> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.CellOutputItem
 */
export declare const CellOutputItem: CellOutputItem$Type;
declare class ProcessInfoExitReason$Type extends MessageType<ProcessInfoExitReason> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.ProcessInfoExitReason
 */
export declare const ProcessInfoExitReason: ProcessInfoExitReason$Type;
declare class CellOutputProcessInfo$Type extends MessageType<CellOutputProcessInfo> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.CellOutputProcessInfo
 */
export declare const CellOutputProcessInfo: CellOutputProcessInfo$Type;
declare class CellOutput$Type extends MessageType<CellOutput> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.CellOutput
 */
export declare const CellOutput: CellOutput$Type;
declare class CellExecutionSummary$Type extends MessageType<CellExecutionSummary> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.CellExecutionSummary
 */
export declare const CellExecutionSummary: CellExecutionSummary$Type;
declare class TextRange$Type extends MessageType<TextRange> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.TextRange
 */
export declare const TextRange: TextRange$Type;
declare class Cell$Type extends MessageType<Cell> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.Cell
 */
export declare const Cell: Cell$Type;
declare class FrontmatterRunme$Type extends MessageType<FrontmatterRunme> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.FrontmatterRunme
 */
export declare const FrontmatterRunme: FrontmatterRunme$Type;
declare class Frontmatter$Type extends MessageType<Frontmatter> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.Frontmatter
 */
export declare const Frontmatter: Frontmatter$Type;
declare class DeserializeRequestOptions$Type extends MessageType<DeserializeRequestOptions> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.DeserializeRequestOptions
 */
export declare const DeserializeRequestOptions: DeserializeRequestOptions$Type;
declare class DeserializeRequest$Type extends MessageType<DeserializeRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.DeserializeRequest
 */
export declare const DeserializeRequest: DeserializeRequest$Type;
declare class DeserializeResponse$Type extends MessageType<DeserializeResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.DeserializeResponse
 */
export declare const DeserializeResponse: DeserializeResponse$Type;
declare class SerializeRequestOutputOptions$Type extends MessageType<SerializeRequestOutputOptions> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.SerializeRequestOutputOptions
 */
export declare const SerializeRequestOutputOptions: SerializeRequestOutputOptions$Type;
declare class SerializeRequestOptions$Type extends MessageType<SerializeRequestOptions> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.SerializeRequestOptions
 */
export declare const SerializeRequestOptions: SerializeRequestOptions$Type;
declare class SerializeRequest$Type extends MessageType<SerializeRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.SerializeRequest
 */
export declare const SerializeRequest: SerializeRequest$Type;
declare class SerializeResponse$Type extends MessageType<SerializeResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.parser.v1.SerializeResponse
 */
export declare const SerializeResponse: SerializeResponse$Type;
/**
 * @generated ServiceType for protobuf service runme.parser.v1.ParserService
 */
export declare const ParserService: any;
export {};
