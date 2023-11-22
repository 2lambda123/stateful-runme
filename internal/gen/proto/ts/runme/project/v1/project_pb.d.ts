/* eslint-disable */
// @generated by protobuf-ts 2.9.1 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/project/v1/project.proto" (package "runme.project.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { MessageType } from "@protobuf-ts/runtime";
import { RunmeIdentity } from "../../parser/v1/parser_pb";
/**
 * @generated from protobuf message runme.project.v1.DirectoryProjectOptions
 */
export interface DirectoryProjectOptions {
    /**
     * @generated from protobuf field: string path = 1;
     */
    path: string;
    /**
     * @generated from protobuf field: bool respect_gitignore = 2;
     */
    respectGitignore: boolean;
    /**
     * @generated from protobuf field: repeated string ignore_file_patterns = 3;
     */
    ignoreFilePatterns: string[];
    /**
     * @generated from protobuf field: bool find_repo_upward = 4;
     */
    findRepoUpward: boolean;
}
/**
 * @generated from protobuf message runme.project.v1.FileProjectOptions
 */
export interface FileProjectOptions {
    /**
     * @generated from protobuf field: string path = 1;
     */
    path: string;
}
/**
 * @generated from protobuf message runme.project.v1.LoadRequest
 */
export interface LoadRequest {
    /**
     * @generated from protobuf oneof: kind
     */
    kind: {
        oneofKind: "directory";
        /**
         * @generated from protobuf field: runme.project.v1.DirectoryProjectOptions directory = 1;
         */
        directory: DirectoryProjectOptions;
    } | {
        oneofKind: "file";
        /**
         * @generated from protobuf field: runme.project.v1.FileProjectOptions file = 2;
         */
        file: FileProjectOptions;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf field: runme.parser.v1.RunmeIdentity identity = 3;
     */
    identity: RunmeIdentity;
    /**
     * @generated from protobuf field: repeated string env_relative_filenames = 4;
     */
    envRelativeFilenames: string[];
}
/**
 * @generated from protobuf message runme.project.v1.LoadEventStartedWalk
 */
export interface LoadEventStartedWalk {
}
/**
 * @generated from protobuf message runme.project.v1.LoadEventFoundDir
 */
export interface LoadEventFoundDir {
    /**
     * @generated from protobuf field: string dir = 1;
     */
    dir: string;
}
/**
 * @generated from protobuf message runme.project.v1.LoadEventFoundFile
 */
export interface LoadEventFoundFile {
    /**
     * @generated from protobuf field: string filepath_abs = 1;
     */
    filepathAbs: string;
}
/**
 * @generated from protobuf message runme.project.v1.LoadEventFinishedWalk
 */
export interface LoadEventFinishedWalk {
}
/**
 * @generated from protobuf message runme.project.v1.LoadEventStartedParsingDoc
 */
export interface LoadEventStartedParsingDoc {
    /**
     * @generated from protobuf field: string filepath_abs = 1;
     */
    filepathAbs: string;
}
/**
 * @generated from protobuf message runme.project.v1.LoadEventFinishedParsingDoc
 */
export interface LoadEventFinishedParsingDoc {
    /**
     * @generated from protobuf field: string filepath_abs = 1;
     */
    filepathAbs: string;
}
/**
 * @generated from protobuf message runme.project.v1.LoadEventFoundTask
 */
export interface LoadEventFoundTask {
    /**
     * @generated from protobuf field: string filename = 1;
     */
    filename: string;
    /**
     * @generated from protobuf field: string id = 2;
     */
    id: string;
    /**
     * @generated from protobuf field: string name = 3;
     */
    name: string;
}
/**
 * @generated from protobuf message runme.project.v1.LoadEventError
 */
export interface LoadEventError {
    /**
     * @generated from protobuf field: string error_message = 1;
     */
    errorMessage: string;
}
/**
 * @generated from protobuf message runme.project.v1.LoadResponse
 */
export interface LoadResponse {
    /**
     * @generated from protobuf field: runme.project.v1.LoadEventType type = 1;
     */
    type: LoadEventType;
    /**
     * @generated from protobuf oneof: data
     */
    data: {
        oneofKind: "startedWalk";
        /**
         * @generated from protobuf field: runme.project.v1.LoadEventStartedWalk started_walk = 2;
         */
        startedWalk: LoadEventStartedWalk;
    } | {
        oneofKind: "foundDir";
        /**
         * @generated from protobuf field: runme.project.v1.LoadEventFoundDir found_dir = 3;
         */
        foundDir: LoadEventFoundDir;
    } | {
        oneofKind: "foundFile";
        /**
         * @generated from protobuf field: runme.project.v1.LoadEventFoundFile found_file = 4;
         */
        foundFile: LoadEventFoundFile;
    } | {
        oneofKind: "finishedWalk";
        /**
         * @generated from protobuf field: runme.project.v1.LoadEventFinishedWalk finished_walk = 5;
         */
        finishedWalk: LoadEventFinishedWalk;
    } | {
        oneofKind: "startedParsingDoc";
        /**
         * @generated from protobuf field: runme.project.v1.LoadEventStartedParsingDoc started_parsing_doc = 6;
         */
        startedParsingDoc: LoadEventStartedParsingDoc;
    } | {
        oneofKind: "finishedParsingDoc";
        /**
         * @generated from protobuf field: runme.project.v1.LoadEventFinishedParsingDoc finished_parsing_doc = 7;
         */
        finishedParsingDoc: LoadEventFinishedParsingDoc;
    } | {
        oneofKind: "foundTask";
        /**
         * @generated from protobuf field: runme.project.v1.LoadEventFoundTask found_task = 8;
         */
        foundTask: LoadEventFoundTask;
    } | {
        oneofKind: "error";
        /**
         * @generated from protobuf field: runme.project.v1.LoadEventError error = 9;
         */
        error: LoadEventError;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf enum runme.project.v1.LoadEventType
 */
export declare enum LoadEventType {
    /**
     * @generated from protobuf enum value: LOAD_EVENT_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: LOAD_EVENT_TYPE_STARTED_WALK = 1;
     */
    STARTED_WALK = 1,
    /**
     * @generated from protobuf enum value: LOAD_EVENT_TYPE_FOUND_DIR = 2;
     */
    FOUND_DIR = 2,
    /**
     * @generated from protobuf enum value: LOAD_EVENT_TYPE_FOUND_FILE = 3;
     */
    FOUND_FILE = 3,
    /**
     * @generated from protobuf enum value: LOAD_EVENT_TYPE_FINISHED_WALK = 4;
     */
    FINISHED_WALK = 4,
    /**
     * @generated from protobuf enum value: LOAD_EVENT_TYPE_STARTED_PARSING_DOC = 5;
     */
    STARTED_PARSING_DOC = 5,
    /**
     * @generated from protobuf enum value: LOAD_EVENT_TYPE_FINISHED_PARSING_DOC = 6;
     */
    FINISHED_PARSING_DOC = 6,
    /**
     * @generated from protobuf enum value: LOAD_EVENT_TYPE_FOUND_TASK = 7;
     */
    FOUND_TASK = 7,
    /**
     * @generated from protobuf enum value: LOAD_EVENT_TYPE_ERROR = 8;
     */
    ERROR = 8
}
declare class DirectoryProjectOptions$Type extends MessageType<DirectoryProjectOptions> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.DirectoryProjectOptions
 */
export declare const DirectoryProjectOptions: DirectoryProjectOptions$Type;
declare class FileProjectOptions$Type extends MessageType<FileProjectOptions> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.FileProjectOptions
 */
export declare const FileProjectOptions: FileProjectOptions$Type;
declare class LoadRequest$Type extends MessageType<LoadRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.LoadRequest
 */
export declare const LoadRequest: LoadRequest$Type;
declare class LoadEventStartedWalk$Type extends MessageType<LoadEventStartedWalk> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.LoadEventStartedWalk
 */
export declare const LoadEventStartedWalk: LoadEventStartedWalk$Type;
declare class LoadEventFoundDir$Type extends MessageType<LoadEventFoundDir> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.LoadEventFoundDir
 */
export declare const LoadEventFoundDir: LoadEventFoundDir$Type;
declare class LoadEventFoundFile$Type extends MessageType<LoadEventFoundFile> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.LoadEventFoundFile
 */
export declare const LoadEventFoundFile: LoadEventFoundFile$Type;
declare class LoadEventFinishedWalk$Type extends MessageType<LoadEventFinishedWalk> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.LoadEventFinishedWalk
 */
export declare const LoadEventFinishedWalk: LoadEventFinishedWalk$Type;
declare class LoadEventStartedParsingDoc$Type extends MessageType<LoadEventStartedParsingDoc> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.LoadEventStartedParsingDoc
 */
export declare const LoadEventStartedParsingDoc: LoadEventStartedParsingDoc$Type;
declare class LoadEventFinishedParsingDoc$Type extends MessageType<LoadEventFinishedParsingDoc> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.LoadEventFinishedParsingDoc
 */
export declare const LoadEventFinishedParsingDoc: LoadEventFinishedParsingDoc$Type;
declare class LoadEventFoundTask$Type extends MessageType<LoadEventFoundTask> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.LoadEventFoundTask
 */
export declare const LoadEventFoundTask: LoadEventFoundTask$Type;
declare class LoadEventError$Type extends MessageType<LoadEventError> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.LoadEventError
 */
export declare const LoadEventError: LoadEventError$Type;
declare class LoadResponse$Type extends MessageType<LoadResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.project.v1.LoadResponse
 */
export declare const LoadResponse: LoadResponse$Type;
/**
 * @generated ServiceType for protobuf service runme.project.v1.ProjectService
 */
export declare const ProjectService: any;
export {};
