/* eslint-disable */
// @generated by protobuf-ts 2.9.0 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/runner/v1/runner.proto" (package "runme.runner.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { RunnerService } from "./runner_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service runme.runner.v1.RunnerService
 */
export class RunnerServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = RunnerService.typeName;
        this.methods = RunnerService.methods;
        this.options = RunnerService.options;
    }
    /**
     * @generated from protobuf rpc: CreateSession(runme.runner.v1.CreateSessionRequest) returns (runme.runner.v1.CreateSessionResponse);
     */
    createSession(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetSession(runme.runner.v1.GetSessionRequest) returns (runme.runner.v1.GetSessionResponse);
     */
    getSession(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListSessions(runme.runner.v1.ListSessionsRequest) returns (runme.runner.v1.ListSessionsResponse);
     */
    listSessions(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteSession(runme.runner.v1.DeleteSessionRequest) returns (runme.runner.v1.DeleteSessionResponse);
     */
    deleteSession(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
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
     * @generated from protobuf rpc: Execute(stream runme.runner.v1.ExecuteRequest) returns (stream runme.runner.v1.ExecuteResponse);
     */
    execute(options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("duplex", this._transport, method, opt);
    }
}
