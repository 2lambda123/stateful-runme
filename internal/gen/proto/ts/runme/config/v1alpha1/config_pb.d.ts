/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/config/v1alpha1/config.proto" (package "runme.config.v1alpha1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Config describes the configuration of the runme tools, including CLI, server, and clients like VS Code extension.
 *
 * @generated from protobuf message runme.config.v1alpha1.Config
 */
export interface Config {
    /**
     * @generated from protobuf oneof: source
     */
    source: {
        oneofKind: "project";
        /**
         * project indicates a dir-based source typically including multiple Markdown files.
         *
         * @generated from protobuf field: runme.config.v1alpha1.Config.Project project = 1;
         */
        project: Config_Project;
    } | {
        oneofKind: "filename";
        /**
         * filename indicates a single Markdown file.
         *
         * @generated from protobuf field: string filename = 2;
         */
        filename: string;
    } | {
        oneofKind: undefined;
    };
    /**
     * env_paths is a list of paths to look for environment files.
     *
     * @generated from protobuf field: repeated string env_paths = 4 [json_name = "env"];
     */
    envPaths: string[];
    /**
     * filters is a list of filters to apply.
     * Filters can be applied to documents or
     * individual code blocks.
     *
     * @generated from protobuf field: repeated runme.config.v1alpha1.Config.Filter filters = 5;
     */
    filters: Config_Filter[];
    /**
     * log contains the log configuration.
     *
     * @generated from protobuf field: runme.config.v1alpha1.Config.Log log = 7;
     */
    log?: Config_Log;
}
/**
 * @generated from protobuf message runme.config.v1alpha1.Config.Project
 */
export interface Config_Project {
    /**
     * dir is the directory to look for Markdown files.
     *
     * @generated from protobuf field: string dir = 1;
     */
    dir: string;
    /**
     * find_repo_upward indicates whether to find the nearest Git repository upward.
     * This is useful to, for example, recognize .gitignore files.
     *
     * @generated from protobuf field: bool find_repo_upward = 2;
     */
    findRepoUpward: boolean;
    /**
     * ignore_paths is a list of paths to ignore relative to dir.
     *
     * @generated from protobuf field: repeated string ignore_paths = 3 [json_name = "ignore"];
     */
    ignorePaths: string[];
    /**
     * disable_gitignore indicates whether to disable the .gitignore file.
     *
     * @generated from protobuf field: bool disable_gitignore = 4;
     */
    disableGitignore: boolean;
}
/**
 * @generated from protobuf message runme.config.v1alpha1.Config.Filter
 */
export interface Config_Filter {
    /**
     * type is the type of the filter.
     *
     * @generated from protobuf field: runme.config.v1alpha1.Config.FilterType type = 1;
     */
    type: Config_FilterType;
    /**
     * condition is the filter program to execute for each document or block,
     * depending on the filter type.
     *
     * The condition should be a valid Expr expression and it should return a boolean value.
     * You can read more about the Expr syntax on https://expr-lang.org/.
     *
     * @generated from protobuf field: string condition = 2;
     */
    condition: string;
}
/**
 * @generated from protobuf message runme.config.v1alpha1.Config.Log
 */
export interface Config_Log {
    /**
     * enabled indicates whether to enable logging.
     *
     * @generated from protobuf field: bool enabled = 1;
     */
    enabled: boolean;
    /**
     * path is the path to the log output file.
     *
     * @generated from protobuf field: string path = 2;
     */
    path: string;
    /**
     * verbose is the verbosity level of the log.
     *
     * @generated from protobuf field: bool verbose = 3;
     */
    verbose: boolean;
}
/**
 * @generated from protobuf enum runme.config.v1alpha1.Config.FilterType
 */
export declare enum Config_FilterType {
    /**
     * @generated from protobuf enum value: FILTER_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: FILTER_TYPE_BLOCK = 1;
     */
    BLOCK = 1,
    /**
     * @generated from protobuf enum value: FILTER_TYPE_DOCUMENT = 2;
     */
    DOCUMENT = 2
}
declare class Config$Type extends MessageType<Config> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config
 */
export declare const Config: Config$Type;
declare class Config_Project$Type extends MessageType<Config_Project> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Project
 */
export declare const Config_Project: Config_Project$Type;
declare class Config_Filter$Type extends MessageType<Config_Filter> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Filter
 */
export declare const Config_Filter: Config_Filter$Type;
declare class Config_Log$Type extends MessageType<Config_Log> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.config.v1alpha1.Config.Log
 */
export declare const Config_Log: Config_Log$Type;
export {};