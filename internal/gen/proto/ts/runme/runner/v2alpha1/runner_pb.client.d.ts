/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/runner/v2alpha1/runner.proto" (package "runme.runner.v2alpha1", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ResolveProgramResponse } from "./runner_pb";
import type { ResolveProgramRequest } from "./runner_pb";
import type { ExecuteResponse } from "./runner_pb";
import type { ExecuteRequest } from "./runner_pb";
import type { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { DeleteSessionResponse } from "./runner_pb";
import type { DeleteSessionRequest } from "./runner_pb";
import type { UpdateSessionResponse } from "./runner_pb";
import type { UpdateSessionRequest } from "./runner_pb";
import type { ListSessionsResponse } from "./runner_pb";
import type { ListSessionsRequest } from "./runner_pb";
import type { GetSessionResponse } from "./runner_pb";
import type { GetSessionRequest } from "./runner_pb";
import type { CreateSessionResponse } from "./runner_pb";
import type { CreateSessionRequest } from "./runner_pb";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service runme.runner.v2alpha1.RunnerService
 */
export interface IRunnerServiceClient {
    /**
     * @generated from protobuf rpc: CreateSession(runme.runner.v2alpha1.CreateSessionRequest) returns (runme.runner.v2alpha1.CreateSessionResponse);
     */
    createSession(input: CreateSessionRequest, options?: RpcOptions): UnaryCall<CreateSessionRequest, CreateSessionResponse>;
    /**
     * @generated from protobuf rpc: GetSession(runme.runner.v2alpha1.GetSessionRequest) returns (runme.runner.v2alpha1.GetSessionResponse);
     */
    getSession(input: GetSessionRequest, options?: RpcOptions): UnaryCall<GetSessionRequest, GetSessionResponse>;
    /**
     * @generated from protobuf rpc: ListSessions(runme.runner.v2alpha1.ListSessionsRequest) returns (runme.runner.v2alpha1.ListSessionsResponse);
     */
    listSessions(input: ListSessionsRequest, options?: RpcOptions): UnaryCall<ListSessionsRequest, ListSessionsResponse>;
    /**
     * @generated from protobuf rpc: UpdateSession(runme.runner.v2alpha1.UpdateSessionRequest) returns (runme.runner.v2alpha1.UpdateSessionResponse);
     */
    updateSession(input: UpdateSessionRequest, options?: RpcOptions): UnaryCall<UpdateSessionRequest, UpdateSessionResponse>;
    /**
     * @generated from protobuf rpc: DeleteSession(runme.runner.v2alpha1.DeleteSessionRequest) returns (runme.runner.v2alpha1.DeleteSessionResponse);
     */
    deleteSession(input: DeleteSessionRequest, options?: RpcOptions): UnaryCall<DeleteSessionRequest, DeleteSessionResponse>;
    /**
     * Execute executes a program. Examine "ExecuteRequest" to explore
     * configuration options.
     *
     * It's a bidirectional stream RPC method. It expects the first
     * "ExecuteRequest" to contain details of a program to execute.
     * Subsequent "ExecuteRequest" should only contain "input_data" as
     * other fields will be ignored.
     *
     * @generated from protobuf rpc: Execute(stream runme.runner.v2alpha1.ExecuteRequest) returns (stream runme.runner.v2alpha1.ExecuteResponse);
     */
    execute(options?: RpcOptions): DuplexStreamingCall<ExecuteRequest, ExecuteResponse>;
    /**
     * ResolveProgram resolves variables from a script or a list of commands
     * using the provided sources, which can be a list of environment variables,
     * a session, or a project.
     * For now, the resolved variables are only the exported ones using `export`.
     *
     * @generated from protobuf rpc: ResolveProgram(runme.runner.v2alpha1.ResolveProgramRequest) returns (runme.runner.v2alpha1.ResolveProgramResponse);
     */
    resolveProgram(input: ResolveProgramRequest, options?: RpcOptions): UnaryCall<ResolveProgramRequest, ResolveProgramResponse>;
}
/**
 * @generated from protobuf service runme.runner.v2alpha1.RunnerService
 */
export declare class RunnerServiceClient implements IRunnerServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: CreateSession(runme.runner.v2alpha1.CreateSessionRequest) returns (runme.runner.v2alpha1.CreateSessionResponse);
     */
    createSession(input: CreateSessionRequest, options?: RpcOptions): UnaryCall<CreateSessionRequest, CreateSessionResponse>;
    /**
     * @generated from protobuf rpc: GetSession(runme.runner.v2alpha1.GetSessionRequest) returns (runme.runner.v2alpha1.GetSessionResponse);
     */
    getSession(input: GetSessionRequest, options?: RpcOptions): UnaryCall<GetSessionRequest, GetSessionResponse>;
    /**
     * @generated from protobuf rpc: ListSessions(runme.runner.v2alpha1.ListSessionsRequest) returns (runme.runner.v2alpha1.ListSessionsResponse);
     */
    listSessions(input: ListSessionsRequest, options?: RpcOptions): UnaryCall<ListSessionsRequest, ListSessionsResponse>;
    /**
     * @generated from protobuf rpc: UpdateSession(runme.runner.v2alpha1.UpdateSessionRequest) returns (runme.runner.v2alpha1.UpdateSessionResponse);
     */
    updateSession(input: UpdateSessionRequest, options?: RpcOptions): UnaryCall<UpdateSessionRequest, UpdateSessionResponse>;
    /**
     * @generated from protobuf rpc: DeleteSession(runme.runner.v2alpha1.DeleteSessionRequest) returns (runme.runner.v2alpha1.DeleteSessionResponse);
     */
    deleteSession(input: DeleteSessionRequest, options?: RpcOptions): UnaryCall<DeleteSessionRequest, DeleteSessionResponse>;
    /**
     * Execute executes a program. Examine "ExecuteRequest" to explore
     * configuration options.
     *
     * It's a bidirectional stream RPC method. It expects the first
     * "ExecuteRequest" to contain details of a program to execute.
     * Subsequent "ExecuteRequest" should only contain "input_data" as
     * other fields will be ignored.
     *
     * @generated from protobuf rpc: Execute(stream runme.runner.v2alpha1.ExecuteRequest) returns (stream runme.runner.v2alpha1.ExecuteResponse);
     */
    execute(options?: RpcOptions): DuplexStreamingCall<ExecuteRequest, ExecuteResponse>;
    /**
     * ResolveProgram resolves variables from a script or a list of commands
     * using the provided sources, which can be a list of environment variables,
     * a session, or a project.
     * For now, the resolved variables are only the exported ones using `export`.
     *
     * @generated from protobuf rpc: ResolveProgram(runme.runner.v2alpha1.ResolveProgramRequest) returns (runme.runner.v2alpha1.ResolveProgramResponse);
     */
    resolveProgram(input: ResolveProgramRequest, options?: RpcOptions): UnaryCall<ResolveProgramRequest, ResolveProgramResponse>;
}
