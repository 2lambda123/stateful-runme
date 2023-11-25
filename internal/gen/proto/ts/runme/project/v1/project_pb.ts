// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file runme/project/v1/project.proto (package runme.project.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { RunmeIdentity } from "../../parser/v1/parser_pb.js";

/**
 * @generated from enum runme.project.v1.LoadEventType
 */
export enum LoadEventType {
  /**
   * @generated from enum value: LOAD_EVENT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: LOAD_EVENT_TYPE_STARTED_WALK = 1;
   */
  STARTED_WALK = 1,

  /**
   * @generated from enum value: LOAD_EVENT_TYPE_FOUND_DIR = 2;
   */
  FOUND_DIR = 2,

  /**
   * @generated from enum value: LOAD_EVENT_TYPE_FOUND_FILE = 3;
   */
  FOUND_FILE = 3,

  /**
   * @generated from enum value: LOAD_EVENT_TYPE_FINISHED_WALK = 4;
   */
  FINISHED_WALK = 4,

  /**
   * @generated from enum value: LOAD_EVENT_TYPE_STARTED_PARSING_DOC = 5;
   */
  STARTED_PARSING_DOC = 5,

  /**
   * @generated from enum value: LOAD_EVENT_TYPE_FINISHED_PARSING_DOC = 6;
   */
  FINISHED_PARSING_DOC = 6,

  /**
   * @generated from enum value: LOAD_EVENT_TYPE_FOUND_TASK = 7;
   */
  FOUND_TASK = 7,

  /**
   * @generated from enum value: LOAD_EVENT_TYPE_ERROR = 8;
   */
  ERROR = 8,
}
// Retrieve enum metadata with: proto3.getEnumType(LoadEventType)
proto3.util.setEnumType(LoadEventType, "runme.project.v1.LoadEventType", [
  { no: 0, name: "LOAD_EVENT_TYPE_UNSPECIFIED" },
  { no: 1, name: "LOAD_EVENT_TYPE_STARTED_WALK" },
  { no: 2, name: "LOAD_EVENT_TYPE_FOUND_DIR" },
  { no: 3, name: "LOAD_EVENT_TYPE_FOUND_FILE" },
  { no: 4, name: "LOAD_EVENT_TYPE_FINISHED_WALK" },
  { no: 5, name: "LOAD_EVENT_TYPE_STARTED_PARSING_DOC" },
  { no: 6, name: "LOAD_EVENT_TYPE_FINISHED_PARSING_DOC" },
  { no: 7, name: "LOAD_EVENT_TYPE_FOUND_TASK" },
  { no: 8, name: "LOAD_EVENT_TYPE_ERROR" },
]);

/**
 * @generated from message runme.project.v1.DirectoryProjectOptions
 */
export class DirectoryProjectOptions extends Message<DirectoryProjectOptions> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * @generated from field: bool respect_gitignore = 2;
   */
  respectGitignore = false;

  /**
   * @generated from field: repeated string ignore_file_patterns = 3;
   */
  ignoreFilePatterns: string[] = [];

  /**
   * @generated from field: bool find_repo_upward = 4;
   */
  findRepoUpward = false;

  constructor(data?: PartialMessage<DirectoryProjectOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.DirectoryProjectOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "respect_gitignore", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "ignore_file_patterns", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "find_repo_upward", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DirectoryProjectOptions {
    return new DirectoryProjectOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DirectoryProjectOptions {
    return new DirectoryProjectOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DirectoryProjectOptions {
    return new DirectoryProjectOptions().fromJsonString(jsonString, options);
  }

  static equals(a: DirectoryProjectOptions | PlainMessage<DirectoryProjectOptions> | undefined, b: DirectoryProjectOptions | PlainMessage<DirectoryProjectOptions> | undefined): boolean {
    return proto3.util.equals(DirectoryProjectOptions, a, b);
  }
}

/**
 * @generated from message runme.project.v1.FileProjectOptions
 */
export class FileProjectOptions extends Message<FileProjectOptions> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  constructor(data?: PartialMessage<FileProjectOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.FileProjectOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileProjectOptions {
    return new FileProjectOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileProjectOptions {
    return new FileProjectOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileProjectOptions {
    return new FileProjectOptions().fromJsonString(jsonString, options);
  }

  static equals(a: FileProjectOptions | PlainMessage<FileProjectOptions> | undefined, b: FileProjectOptions | PlainMessage<FileProjectOptions> | undefined): boolean {
    return proto3.util.equals(FileProjectOptions, a, b);
  }
}

/**
 * @generated from message runme.project.v1.LoadRequest
 */
export class LoadRequest extends Message<LoadRequest> {
  /**
   * @generated from oneof runme.project.v1.LoadRequest.kind
   */
  kind: {
    /**
     * @generated from field: runme.project.v1.DirectoryProjectOptions directory = 1;
     */
    value: DirectoryProjectOptions;
    case: "directory";
  } | {
    /**
     * @generated from field: runme.project.v1.FileProjectOptions file = 2;
     */
    value: FileProjectOptions;
    case: "file";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from field: runme.parser.v1.RunmeIdentity identity = 3;
   */
  identity = RunmeIdentity.UNSPECIFIED;

  constructor(data?: PartialMessage<LoadRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.LoadRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "directory", kind: "message", T: DirectoryProjectOptions, oneof: "kind" },
    { no: 2, name: "file", kind: "message", T: FileProjectOptions, oneof: "kind" },
    { no: 3, name: "identity", kind: "enum", T: proto3.getEnumType(RunmeIdentity) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadRequest {
    return new LoadRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadRequest {
    return new LoadRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadRequest {
    return new LoadRequest().fromJsonString(jsonString, options);
  }

  static equals(a: LoadRequest | PlainMessage<LoadRequest> | undefined, b: LoadRequest | PlainMessage<LoadRequest> | undefined): boolean {
    return proto3.util.equals(LoadRequest, a, b);
  }
}

/**
 * @generated from message runme.project.v1.LoadEventStartedWalk
 */
export class LoadEventStartedWalk extends Message<LoadEventStartedWalk> {
  constructor(data?: PartialMessage<LoadEventStartedWalk>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.LoadEventStartedWalk";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadEventStartedWalk {
    return new LoadEventStartedWalk().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadEventStartedWalk {
    return new LoadEventStartedWalk().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadEventStartedWalk {
    return new LoadEventStartedWalk().fromJsonString(jsonString, options);
  }

  static equals(a: LoadEventStartedWalk | PlainMessage<LoadEventStartedWalk> | undefined, b: LoadEventStartedWalk | PlainMessage<LoadEventStartedWalk> | undefined): boolean {
    return proto3.util.equals(LoadEventStartedWalk, a, b);
  }
}

/**
 * @generated from message runme.project.v1.LoadEventFoundDir
 */
export class LoadEventFoundDir extends Message<LoadEventFoundDir> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  constructor(data?: PartialMessage<LoadEventFoundDir>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.LoadEventFoundDir";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadEventFoundDir {
    return new LoadEventFoundDir().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadEventFoundDir {
    return new LoadEventFoundDir().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadEventFoundDir {
    return new LoadEventFoundDir().fromJsonString(jsonString, options);
  }

  static equals(a: LoadEventFoundDir | PlainMessage<LoadEventFoundDir> | undefined, b: LoadEventFoundDir | PlainMessage<LoadEventFoundDir> | undefined): boolean {
    return proto3.util.equals(LoadEventFoundDir, a, b);
  }
}

/**
 * @generated from message runme.project.v1.LoadEventFoundFile
 */
export class LoadEventFoundFile extends Message<LoadEventFoundFile> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  constructor(data?: PartialMessage<LoadEventFoundFile>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.LoadEventFoundFile";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadEventFoundFile {
    return new LoadEventFoundFile().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadEventFoundFile {
    return new LoadEventFoundFile().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadEventFoundFile {
    return new LoadEventFoundFile().fromJsonString(jsonString, options);
  }

  static equals(a: LoadEventFoundFile | PlainMessage<LoadEventFoundFile> | undefined, b: LoadEventFoundFile | PlainMessage<LoadEventFoundFile> | undefined): boolean {
    return proto3.util.equals(LoadEventFoundFile, a, b);
  }
}

/**
 * @generated from message runme.project.v1.LoadEventFinishedWalk
 */
export class LoadEventFinishedWalk extends Message<LoadEventFinishedWalk> {
  constructor(data?: PartialMessage<LoadEventFinishedWalk>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.LoadEventFinishedWalk";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadEventFinishedWalk {
    return new LoadEventFinishedWalk().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadEventFinishedWalk {
    return new LoadEventFinishedWalk().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadEventFinishedWalk {
    return new LoadEventFinishedWalk().fromJsonString(jsonString, options);
  }

  static equals(a: LoadEventFinishedWalk | PlainMessage<LoadEventFinishedWalk> | undefined, b: LoadEventFinishedWalk | PlainMessage<LoadEventFinishedWalk> | undefined): boolean {
    return proto3.util.equals(LoadEventFinishedWalk, a, b);
  }
}

/**
 * @generated from message runme.project.v1.LoadEventStartedParsingDoc
 */
export class LoadEventStartedParsingDoc extends Message<LoadEventStartedParsingDoc> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  constructor(data?: PartialMessage<LoadEventStartedParsingDoc>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.LoadEventStartedParsingDoc";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadEventStartedParsingDoc {
    return new LoadEventStartedParsingDoc().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadEventStartedParsingDoc {
    return new LoadEventStartedParsingDoc().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadEventStartedParsingDoc {
    return new LoadEventStartedParsingDoc().fromJsonString(jsonString, options);
  }

  static equals(a: LoadEventStartedParsingDoc | PlainMessage<LoadEventStartedParsingDoc> | undefined, b: LoadEventStartedParsingDoc | PlainMessage<LoadEventStartedParsingDoc> | undefined): boolean {
    return proto3.util.equals(LoadEventStartedParsingDoc, a, b);
  }
}

/**
 * @generated from message runme.project.v1.LoadEventFinishedParsingDoc
 */
export class LoadEventFinishedParsingDoc extends Message<LoadEventFinishedParsingDoc> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  constructor(data?: PartialMessage<LoadEventFinishedParsingDoc>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.LoadEventFinishedParsingDoc";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadEventFinishedParsingDoc {
    return new LoadEventFinishedParsingDoc().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadEventFinishedParsingDoc {
    return new LoadEventFinishedParsingDoc().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadEventFinishedParsingDoc {
    return new LoadEventFinishedParsingDoc().fromJsonString(jsonString, options);
  }

  static equals(a: LoadEventFinishedParsingDoc | PlainMessage<LoadEventFinishedParsingDoc> | undefined, b: LoadEventFinishedParsingDoc | PlainMessage<LoadEventFinishedParsingDoc> | undefined): boolean {
    return proto3.util.equals(LoadEventFinishedParsingDoc, a, b);
  }
}

/**
 * @generated from message runme.project.v1.LoadEventFoundTask
 */
export class LoadEventFoundTask extends Message<LoadEventFoundTask> {
  /**
   * @generated from field: string document_path = 1;
   */
  documentPath = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  constructor(data?: PartialMessage<LoadEventFoundTask>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.LoadEventFoundTask";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "document_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadEventFoundTask {
    return new LoadEventFoundTask().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadEventFoundTask {
    return new LoadEventFoundTask().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadEventFoundTask {
    return new LoadEventFoundTask().fromJsonString(jsonString, options);
  }

  static equals(a: LoadEventFoundTask | PlainMessage<LoadEventFoundTask> | undefined, b: LoadEventFoundTask | PlainMessage<LoadEventFoundTask> | undefined): boolean {
    return proto3.util.equals(LoadEventFoundTask, a, b);
  }
}

/**
 * @generated from message runme.project.v1.LoadEventError
 */
export class LoadEventError extends Message<LoadEventError> {
  /**
   * @generated from field: string error_message = 1;
   */
  errorMessage = "";

  constructor(data?: PartialMessage<LoadEventError>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.LoadEventError";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "error_message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadEventError {
    return new LoadEventError().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadEventError {
    return new LoadEventError().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadEventError {
    return new LoadEventError().fromJsonString(jsonString, options);
  }

  static equals(a: LoadEventError | PlainMessage<LoadEventError> | undefined, b: LoadEventError | PlainMessage<LoadEventError> | undefined): boolean {
    return proto3.util.equals(LoadEventError, a, b);
  }
}

/**
 * @generated from message runme.project.v1.LoadResponse
 */
export class LoadResponse extends Message<LoadResponse> {
  /**
   * @generated from field: runme.project.v1.LoadEventType type = 1;
   */
  type = LoadEventType.UNSPECIFIED;

  /**
   * @generated from oneof runme.project.v1.LoadResponse.data
   */
  data: {
    /**
     * @generated from field: runme.project.v1.LoadEventStartedWalk started_walk = 2;
     */
    value: LoadEventStartedWalk;
    case: "startedWalk";
  } | {
    /**
     * @generated from field: runme.project.v1.LoadEventFoundDir found_dir = 3;
     */
    value: LoadEventFoundDir;
    case: "foundDir";
  } | {
    /**
     * @generated from field: runme.project.v1.LoadEventFoundFile found_file = 4;
     */
    value: LoadEventFoundFile;
    case: "foundFile";
  } | {
    /**
     * @generated from field: runme.project.v1.LoadEventFinishedWalk finished_walk = 5;
     */
    value: LoadEventFinishedWalk;
    case: "finishedWalk";
  } | {
    /**
     * @generated from field: runme.project.v1.LoadEventStartedParsingDoc started_parsing_doc = 6;
     */
    value: LoadEventStartedParsingDoc;
    case: "startedParsingDoc";
  } | {
    /**
     * @generated from field: runme.project.v1.LoadEventFinishedParsingDoc finished_parsing_doc = 7;
     */
    value: LoadEventFinishedParsingDoc;
    case: "finishedParsingDoc";
  } | {
    /**
     * @generated from field: runme.project.v1.LoadEventFoundTask found_task = 8;
     */
    value: LoadEventFoundTask;
    case: "foundTask";
  } | {
    /**
     * @generated from field: runme.project.v1.LoadEventError error = 9;
     */
    value: LoadEventError;
    case: "error";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<LoadResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.project.v1.LoadResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(LoadEventType) },
    { no: 2, name: "started_walk", kind: "message", T: LoadEventStartedWalk, oneof: "data" },
    { no: 3, name: "found_dir", kind: "message", T: LoadEventFoundDir, oneof: "data" },
    { no: 4, name: "found_file", kind: "message", T: LoadEventFoundFile, oneof: "data" },
    { no: 5, name: "finished_walk", kind: "message", T: LoadEventFinishedWalk, oneof: "data" },
    { no: 6, name: "started_parsing_doc", kind: "message", T: LoadEventStartedParsingDoc, oneof: "data" },
    { no: 7, name: "finished_parsing_doc", kind: "message", T: LoadEventFinishedParsingDoc, oneof: "data" },
    { no: 8, name: "found_task", kind: "message", T: LoadEventFoundTask, oneof: "data" },
    { no: 9, name: "error", kind: "message", T: LoadEventError, oneof: "data" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoadResponse {
    return new LoadResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoadResponse {
    return new LoadResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoadResponse {
    return new LoadResponse().fromJsonString(jsonString, options);
  }

  static equals(a: LoadResponse | PlainMessage<LoadResponse> | undefined, b: LoadResponse | PlainMessage<LoadResponse> | undefined): boolean {
    return proto3.util.equals(LoadResponse, a, b);
  }
}
