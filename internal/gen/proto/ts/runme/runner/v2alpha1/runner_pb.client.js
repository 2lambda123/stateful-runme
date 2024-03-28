/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/runner/v2alpha1/runner.proto" (package "runme.runner.v2alpha1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { RunnerService } from "./runner_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service runme.runner.v2alpha1.RunnerService
 */
export class RunnerServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = RunnerService.typeName;
        this.methods = RunnerService.methods;
        this.options = RunnerService.options;
    }
    /**
     * @generated from protobuf rpc: CreateSession(runme.runner.v2alpha1.CreateSessionRequest) returns (runme.runner.v2alpha1.CreateSessionResponse);
     */
    createSession(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetSession(runme.runner.v2alpha1.GetSessionRequest) returns (runme.runner.v2alpha1.GetSessionResponse);
     */
    getSession(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListSessions(runme.runner.v2alpha1.ListSessionsRequest) returns (runme.runner.v2alpha1.ListSessionsResponse);
     */
    listSessions(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdateSession(runme.runner.v2alpha1.UpdateSessionRequest) returns (runme.runner.v2alpha1.UpdateSessionResponse);
     */
    updateSession(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteSession(runme.runner.v2alpha1.DeleteSessionRequest) returns (runme.runner.v2alpha1.DeleteSessionResponse);
     */
    deleteSession(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
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
    execute(options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("duplex", this._transport, method, opt);
    }
    /**
     * ResolveProgram resolves variables from a script or a list of commands
     * using the provided sources, which can be a list of environment variables,
     * a session, or a project.
     * For now, the resolved variables are only the exported ones using `export`.
     *
     * @generated from protobuf rpc: ResolveProgram(runme.runner.v2alpha1.ResolveProgramRequest) returns (runme.runner.v2alpha1.ResolveProgramResponse);
     */
    resolveProgram(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
