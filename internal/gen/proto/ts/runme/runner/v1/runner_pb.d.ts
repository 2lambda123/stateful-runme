/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/runner/v1/runner.proto" (package "runme.runner.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { MessageType } from "@protobuf-ts/runtime";
import { UInt32Value } from "../../../google/protobuf/wrappers_pb";
/**
 * @generated from protobuf message runme.runner.v1.Session
 */
export interface Session {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * envs keeps track of session environment variables.
     * They can be modified by executing programs which
     * alter them through "export" and "unset" commands.
     *
     * @generated from protobuf field: repeated string envs = 2;
     */
    envs: string[];
    /**
     * metadata is a map of client specific metadata.
     *
     * @generated from protobuf field: map<string, string> metadata = 3;
     */
    metadata: {
        [key: string]: string;
    };
}
/**
 * @generated from protobuf message runme.runner.v1.CreateSessionRequest
 */
export interface CreateSessionRequest {
    /**
     * metadata is a map of client specific metadata.
     *
     * @generated from protobuf field: map<string, string> metadata = 1;
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * envs field provides an initial set of environment variables
     * for a newly created session.
     *
     * @generated from protobuf field: repeated string envs = 2;
     */
    envs: string[];
    /**
     * optional project from which to immediately load environment variables
     *
     * @generated from protobuf field: optional runme.runner.v1.Project project = 3;
     */
    project?: Project;
    /**
     * optional selection of which env store implementation to sue
     *
     * @generated from protobuf field: optional runme.runner.v1.SessionEnvStore env_store = 4;
     */
    envStore?: SessionEnvStore;
}
/**
 * @generated from protobuf message runme.runner.v1.CreateSessionResponse
 */
export interface CreateSessionResponse {
    /**
     * @generated from protobuf field: runme.runner.v1.Session session = 1;
     */
    session?: Session;
}
/**
 * @generated from protobuf message runme.runner.v1.GetSessionRequest
 */
export interface GetSessionRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message runme.runner.v1.GetSessionResponse
 */
export interface GetSessionResponse {
    /**
     * @generated from protobuf field: runme.runner.v1.Session session = 1;
     */
    session?: Session;
}
/**
 * @generated from protobuf message runme.runner.v1.ListSessionsRequest
 */
export interface ListSessionsRequest {
}
/**
 * @generated from protobuf message runme.runner.v1.ListSessionsResponse
 */
export interface ListSessionsResponse {
    /**
     * @generated from protobuf field: repeated runme.runner.v1.Session sessions = 1;
     */
    sessions: Session[];
}
/**
 * @generated from protobuf message runme.runner.v1.DeleteSessionRequest
 */
export interface DeleteSessionRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message runme.runner.v1.DeleteSessionResponse
 */
export interface DeleteSessionResponse {
}
/**
 * @generated from protobuf message runme.runner.v1.Project
 */
export interface Project {
    /**
     * project root folder
     *
     * @generated from protobuf field: string root = 1;
     */
    root: string;
    /**
     * list of environment files to try and load
     * start with
     *
     * @generated from protobuf field: repeated string env_load_order = 2;
     */
    envLoadOrder: string[];
}
/**
 * @generated from protobuf message runme.runner.v1.Winsize
 */
export interface Winsize {
    /**
     * number of rows (in cells)
     *
     * @generated from protobuf field: uint32 rows = 1;
     */
    rows: number;
    /**
     * number of columns (in cells)
     *
     * @generated from protobuf field: uint32 cols = 2;
     */
    cols: number;
    /**
     * width in pixels
     *
     * @generated from protobuf field: uint32 x = 3;
     */
    x: number;
    /**
     * height in pixels
     *
     * @generated from protobuf field: uint32 y = 4;
     */
    y: number;
}
/**
 * @generated from protobuf message runme.runner.v1.ExecuteRequest
 */
export interface ExecuteRequest {
    /**
     * program_name is a name of the program to execute.
     * If it's not a path (relative or absolute), the runner
     * will try to resolve the name.
     * For example: "sh", "/bin/bash".
     *
     * @generated from protobuf field: string program_name = 1;
     */
    programName: string;
    /**
     * arguments is a list of arguments passed to the program.
     *
     * @generated from protobuf field: repeated string arguments = 2;
     */
    arguments: string[];
    /**
     * directory to execute the program in.
     *
     * @generated from protobuf field: string directory = 3;
     */
    directory: string;
    /**
     * envs is a list of additional environment variables
     * that will be injected to the executed program.
     *
     * @generated from protobuf field: repeated string envs = 4;
     */
    envs: string[];
    /**
     * commands are commands to be executed by the program.
     * The commands are joined and executed as a script.
     * For example: "echo 'Hello, World'", "ls -l /etc".
     * This is mutually exclusive with the script field.
     *
     * @generated from protobuf field: repeated string commands = 5;
     */
    commands: string[];
    /**
     * script is code to be executed by the program.
     * Individual lines are joined with the new line character.
     * This is mutually exclusive with the commands field.
     *
     * @generated from protobuf field: string script = 6;
     */
    script: string;
    /**
     * tty when true allocates a pseudo-TTY.
     *
     * @generated from protobuf field: bool tty = 7;
     */
    tty: boolean;
    /**
     * input_data is a byte array that will be send as input
     * to the program.
     *
     * @generated from protobuf field: bytes input_data = 8;
     */
    inputData: Uint8Array;
    /**
     * stop requests the running process to be stopped.
     * It is allowed only in the consecutive calls.
     *
     * @generated from protobuf field: runme.runner.v1.ExecuteStop stop = 9;
     */
    stop: ExecuteStop;
    /**
     * sets pty winsize
     * has no effect in non-interactive mode
     *
     * @generated from protobuf field: optional runme.runner.v1.Winsize winsize = 10;
     */
    winsize?: Winsize;
    /**
     * background indicates a background process
     * this will send the process' PID as a first response
     *
     * @generated from protobuf field: bool background = 11;
     */
    background: boolean;
    /**
     * session_id indicates in which Session the program should execute.
     * Executing in a Session might provide additional context like
     * environment variables.
     *
     * @generated from protobuf field: string session_id = 20;
     */
    sessionId: string;
    /**
     * strategy for selecting session
     *
     * @generated from protobuf field: runme.runner.v1.SessionStrategy session_strategy = 21;
     */
    sessionStrategy: SessionStrategy;
    /**
     * project for this runner
     * used to load environment variables from .env files
     *
     * @generated from protobuf field: optional runme.runner.v1.Project project = 22;
     */
    project?: Project;
    /**
     * whether to store the stdout of the last ran
     * block in the environment variable `__`
     *
     * @generated from protobuf field: bool store_last_output = 23;
     */
    storeLastOutput: boolean;
    /**
     * @generated from protobuf field: runme.runner.v1.CommandMode command_mode = 24;
     */
    commandMode: CommandMode;
    /**
     * language id associated with script
     *
     * @generated from protobuf field: string language_id = 25;
     */
    languageId: string;
    /**
     * file extension associated with script
     *
     * @generated from protobuf field: string file_extension = 26;
     */
    fileExtension: string;
}
/**
 * @generated from protobuf message runme.runner.v1.ProcessPID
 */
export interface ProcessPID {
    /**
     * @generated from protobuf field: int64 pid = 1;
     */
    pid: string;
}
/**
 * @generated from protobuf message runme.runner.v1.ExecuteResponse
 */
export interface ExecuteResponse {
    /**
     * exit_code is sent only in the final message.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value exit_code = 1;
     */
    exitCode?: UInt32Value;
    /**
     * stdout_data contains bytes from stdout since the last response.
     *
     * @generated from protobuf field: bytes stdout_data = 2;
     */
    stdoutData: Uint8Array;
    /**
     * stderr_data contains bytes from stderr since the last response.
     *
     * @generated from protobuf field: bytes stderr_data = 3;
     */
    stderrData: Uint8Array;
    /**
     * pid contains the process' PID
     * this is only sent once in an initial response for background processes.
     *
     * @generated from protobuf field: runme.runner.v1.ProcessPID pid = 4;
     */
    pid?: ProcessPID;
}
/**
 * @generated from protobuf message runme.runner.v1.ResolveProgramCommandList
 */
export interface ResolveProgramCommandList {
    /**
     * commands are commands to be executed by the program.
     * The commands are joined and executed as a script.
     * For example: ["echo 'Hello, World'", "ls -l /etc"].
     *
     * @generated from protobuf field: repeated string lines = 1;
     */
    lines: string[];
}
/**
 * @generated from protobuf message runme.runner.v1.ResolveProgramRequest
 */
export interface ResolveProgramRequest {
    /**
     * @generated from protobuf oneof: source
     */
    source: {
        oneofKind: "commands";
        /**
         * commands are commands to be executed by the program.
         * The commands are joined and executed as a script.
         *
         * @generated from protobuf field: runme.runner.v1.ResolveProgramCommandList commands = 1;
         */
        commands: ResolveProgramCommandList;
    } | {
        oneofKind: "script";
        /**
         * script is code to be executed by the program.
         * Individual lines are joined with the new line character.
         *
         * @generated from protobuf field: string script = 2;
         */
        script: string;
    } | {
        oneofKind: undefined;
    };
    /**
     * mode determines how variables resolution occurs.
     * It is usually based on document or cell annotation config.
     *
     * @generated from protobuf field: runme.runner.v1.ResolveProgramRequest.Mode mode = 3;
     */
    mode: ResolveProgramRequest_Mode;
    /**
     * env is a list of explicit environment variables that will be used
     * to resolve the environment variables found in the source.
     *
     * @generated from protobuf field: repeated string env = 4;
     */
    env: string[];
    /**
     * session_id indicates which session is the source of
     * environment variables. If not provided, the most recent
     * session can be used using session_strategy.
     *
     * @generated from protobuf field: string session_id = 5;
     */
    sessionId: string;
    /**
     * session_strategy is a strategy for selecting the session.
     *
     * @generated from protobuf field: runme.runner.v1.SessionStrategy session_strategy = 6;
     */
    sessionStrategy: SessionStrategy;
    /**
     * project used to load environment variables from .env files.
     *
     * @generated from protobuf field: optional runme.runner.v1.Project project = 7;
     */
    project?: Project;
}
/**
 * @generated from protobuf enum runme.runner.v1.ResolveProgramRequest.Mode
 */
export declare enum ResolveProgramRequest_Mode {
    /**
     * unspecified is auto (default) which prompts for all
     * unresolved environment variables.
     * Subsequent runs will likely resolve via the session.
     *
     * @generated from protobuf enum value: MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * prompt always means to prompt for all environment variables.
     *
     * @generated from protobuf enum value: MODE_PROMPT_ALL = 1;
     */
    PROMPT_ALL = 1,
    /**
     * skip means to not prompt for any environment variables.
     * All variables will be marked as resolved.
     *
     * @generated from protobuf enum value: MODE_SKIP_ALL = 2;
     */
    SKIP_ALL = 2
}
/**
 * @generated from protobuf message runme.runner.v1.ResolveProgramResponse
 */
export interface ResolveProgramResponse {
    /**
     * @generated from protobuf field: string script = 1;
     */
    script: string;
    /**
     * use script until commands normalization is implemented
     *
     * @generated from protobuf field: runme.runner.v1.ResolveProgramCommandList commands = 2;
     */
    commands?: ResolveProgramCommandList;
    /**
     * @generated from protobuf field: repeated runme.runner.v1.ResolveProgramResponse.VarResult vars = 3;
     */
    vars: ResolveProgramResponse_VarResult[];
}
/**
 * @generated from protobuf message runme.runner.v1.ResolveProgramResponse.VarResult
 */
export interface ResolveProgramResponse_VarResult {
    /**
     * prompt indicates the resolution status of the env variable.
     *
     * @generated from protobuf field: runme.runner.v1.ResolveProgramResponse.Status status = 1;
     */
    status: ResolveProgramResponse_Status;
    /**
     * name is the name of the environment variable.
     *
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * original_value is a default value of the environment variable.
     * It might be a value that is assigned to the variable in the script,
     * like FOO=bar or FOO=${FOO:-bar}.
     * If the variable is not assigned, it is an empty string.
     *
     * @generated from protobuf field: string original_value = 3;
     */
    originalValue: string;
    /**
     * resolved_value is a value of the environment variable resolved from a source.
     * If it is an empty string, it means that the environment variable is not resolved.
     *
     * @generated from protobuf field: string resolved_value = 4;
     */
    resolvedValue: string;
}
/**
 * @generated from protobuf enum runme.runner.v1.ResolveProgramResponse.Status
 */
export declare enum ResolveProgramResponse_Status {
    /**
     * unspecified is the default value and it means unresolved.
     *
     * @generated from protobuf enum value: STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * unresolved with message means that the variable is unresolved
     * but it contains a message. E.g. FOO=this is message
     *
     * @generated from protobuf enum value: STATUS_UNRESOLVED_WITH_MESSAGE = 1;
     */
    UNRESOLVED_WITH_MESSAGE = 1,
    /**
     * unresolved with placeholder means that the variable is unresolved
     * but it contains a placeholder. E.g. FOO="this is placeholder"
     *
     * @generated from protobuf enum value: STATUS_UNRESOLVED_WITH_PLACEHOLDER = 2;
     */
    UNRESOLVED_WITH_PLACEHOLDER = 2,
    /**
     * resolved means that the variable is resolved.
     *
     * @generated from protobuf enum value: STATUS_RESOLVED = 3;
     */
    RESOLVED = 3
}
/**
 * @generated from protobuf message runme.runner.v1.MonitorEnvRequest
 */
export interface MonitorEnvRequest {
    /**
     * @generated from protobuf field: runme.runner.v1.Session session = 1;
     */
    session?: Session;
}
/**
 * @generated from protobuf message runme.runner.v1.MonitorEnvResponseSnapshot
 */
export interface MonitorEnvResponseSnapshot {
    /**
     * @generated from protobuf field: repeated runme.runner.v1.MonitorEnvResponseSnapshot.SnapshotEnv envs = 1;
     */
    envs: MonitorEnvResponseSnapshot_SnapshotEnv[];
}
/**
 * @generated from protobuf message runme.runner.v1.MonitorEnvResponseSnapshot.SnapshotEnv
 */
export interface MonitorEnvResponseSnapshot_SnapshotEnv {
    /**
     * @generated from protobuf field: runme.runner.v1.MonitorEnvResponseSnapshot.Status status = 1;
     */
    status: MonitorEnvResponseSnapshot_Status;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string spec = 3;
     */
    spec: string;
    /**
     * @generated from protobuf field: string original_value = 4;
     */
    originalValue: string;
    /**
     * @generated from protobuf field: string resolved_value = 5;
     */
    resolvedValue: string;
}
/**
 * @generated from protobuf enum runme.runner.v1.MonitorEnvResponseSnapshot.Status
 */
export declare enum MonitorEnvResponseSnapshot_Status {
    /**
     * @generated from protobuf enum value: STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: STATUS_LITERAL = 1;
     */
    LITERAL = 1,
    /**
     * @generated from protobuf enum value: STATUS_HIDDEN = 2;
     */
    HIDDEN = 2,
    /**
     * @generated from protobuf enum value: STATUS_MASKED = 3;
     */
    MASKED = 3
}
/**
 * @generated from protobuf message runme.runner.v1.MonitorEnvResponse
 */
export interface MonitorEnvResponse {
    /**
     * @generated from protobuf field: runme.runner.v1.MonitorEnvType type = 1;
     */
    type: MonitorEnvType;
    /**
     * @generated from protobuf oneof: data
     */
    data: {
        oneofKind: "snapshot";
        /**
         * @generated from protobuf field: runme.runner.v1.MonitorEnvResponseSnapshot snapshot = 2;
         */
        snapshot: MonitorEnvResponseSnapshot;
    } | {
        oneofKind: undefined;
    };
}
/**
 * env store implementation
 *
 * @generated from protobuf enum runme.runner.v1.SessionEnvStore
 */
export declare enum SessionEnvStore {
    /**
     * uses default env store
     *
     * @generated from protobuf enum value: SESSION_ENV_STORE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * uses owl store
     *
     * @generated from protobuf enum value: SESSION_ENV_STORE_OWL = 1;
     */
    OWL = 1
}
/**
 * @generated from protobuf enum runme.runner.v1.ExecuteStop
 */
export declare enum ExecuteStop {
    /**
     * @generated from protobuf enum value: EXECUTE_STOP_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: EXECUTE_STOP_INTERRUPT = 1;
     */
    INTERRUPT = 1,
    /**
     * @generated from protobuf enum value: EXECUTE_STOP_KILL = 2;
     */
    KILL = 2
}
/**
 * @generated from protobuf enum runme.runner.v1.CommandMode
 */
export declare enum CommandMode {
    /**
     * @generated from protobuf enum value: COMMAND_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: COMMAND_MODE_INLINE_SHELL = 1;
     */
    INLINE_SHELL = 1,
    /**
     * @generated from protobuf enum value: COMMAND_MODE_TEMP_FILE = 2;
     */
    TEMP_FILE = 2
}
/**
 * strategy for selecting a session in an initial execute request
 *
 * @generated from protobuf enum runme.runner.v1.SessionStrategy
 */
export declare enum SessionStrategy {
    /**
     * uses session_id field to determine session
     * if none is present, a new session is created
     *
     * @generated from protobuf enum value: SESSION_STRATEGY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * uses most recently used session on the grpc server
     * if there is none, a new one is created
     *
     * @generated from protobuf enum value: SESSION_STRATEGY_MOST_RECENT = 1;
     */
    MOST_RECENT = 1
}
/**
 * @generated from protobuf enum runme.runner.v1.MonitorEnvType
 */
export declare enum MonitorEnvType {
    /**
     * @generated from protobuf enum value: MONITOR_ENV_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: MONITOR_ENV_TYPE_SNAPSHOT = 1;
     */
    SNAPSHOT = 1
}
declare class Session$Type extends MessageType<Session> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.Session
 */
export declare const Session: Session$Type;
declare class CreateSessionRequest$Type extends MessageType<CreateSessionRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.CreateSessionRequest
 */
export declare const CreateSessionRequest: CreateSessionRequest$Type;
declare class CreateSessionResponse$Type extends MessageType<CreateSessionResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.CreateSessionResponse
 */
export declare const CreateSessionResponse: CreateSessionResponse$Type;
declare class GetSessionRequest$Type extends MessageType<GetSessionRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.GetSessionRequest
 */
export declare const GetSessionRequest: GetSessionRequest$Type;
declare class GetSessionResponse$Type extends MessageType<GetSessionResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.GetSessionResponse
 */
export declare const GetSessionResponse: GetSessionResponse$Type;
declare class ListSessionsRequest$Type extends MessageType<ListSessionsRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ListSessionsRequest
 */
export declare const ListSessionsRequest: ListSessionsRequest$Type;
declare class ListSessionsResponse$Type extends MessageType<ListSessionsResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ListSessionsResponse
 */
export declare const ListSessionsResponse: ListSessionsResponse$Type;
declare class DeleteSessionRequest$Type extends MessageType<DeleteSessionRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.DeleteSessionRequest
 */
export declare const DeleteSessionRequest: DeleteSessionRequest$Type;
declare class DeleteSessionResponse$Type extends MessageType<DeleteSessionResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.DeleteSessionResponse
 */
export declare const DeleteSessionResponse: DeleteSessionResponse$Type;
declare class Project$Type extends MessageType<Project> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.Project
 */
export declare const Project: Project$Type;
declare class Winsize$Type extends MessageType<Winsize> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.Winsize
 */
export declare const Winsize: Winsize$Type;
declare class ExecuteRequest$Type extends MessageType<ExecuteRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ExecuteRequest
 */
export declare const ExecuteRequest: ExecuteRequest$Type;
declare class ProcessPID$Type extends MessageType<ProcessPID> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ProcessPID
 */
export declare const ProcessPID: ProcessPID$Type;
declare class ExecuteResponse$Type extends MessageType<ExecuteResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ExecuteResponse
 */
export declare const ExecuteResponse: ExecuteResponse$Type;
declare class ResolveProgramCommandList$Type extends MessageType<ResolveProgramCommandList> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ResolveProgramCommandList
 */
export declare const ResolveProgramCommandList: ResolveProgramCommandList$Type;
declare class ResolveProgramRequest$Type extends MessageType<ResolveProgramRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ResolveProgramRequest
 */
export declare const ResolveProgramRequest: ResolveProgramRequest$Type;
declare class ResolveProgramResponse$Type extends MessageType<ResolveProgramResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ResolveProgramResponse
 */
export declare const ResolveProgramResponse: ResolveProgramResponse$Type;
declare class ResolveProgramResponse_VarResult$Type extends MessageType<ResolveProgramResponse_VarResult> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ResolveProgramResponse.VarResult
 */
export declare const ResolveProgramResponse_VarResult: ResolveProgramResponse_VarResult$Type;
declare class MonitorEnvRequest$Type extends MessageType<MonitorEnvRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.MonitorEnvRequest
 */
export declare const MonitorEnvRequest: MonitorEnvRequest$Type;
declare class MonitorEnvResponseSnapshot$Type extends MessageType<MonitorEnvResponseSnapshot> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.MonitorEnvResponseSnapshot
 */
export declare const MonitorEnvResponseSnapshot: MonitorEnvResponseSnapshot$Type;
declare class MonitorEnvResponseSnapshot_SnapshotEnv$Type extends MessageType<MonitorEnvResponseSnapshot_SnapshotEnv> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.MonitorEnvResponseSnapshot.SnapshotEnv
 */
export declare const MonitorEnvResponseSnapshot_SnapshotEnv: MonitorEnvResponseSnapshot_SnapshotEnv$Type;
declare class MonitorEnvResponse$Type extends MessageType<MonitorEnvResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.MonitorEnvResponse
 */
export declare const MonitorEnvResponse: MonitorEnvResponse$Type;
/**
 * @generated ServiceType for protobuf service runme.runner.v1.RunnerService
 */
export declare const RunnerService: any;
export {};
