/* tslint:disable */
/* eslint-disable */
/**
 * ecli API
 * RESTFul APIs provided by ecli-server
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ProgramType } from './program-type';
/**
 * 
 * @export
 * @interface StartTaskRequest
 */
export interface StartTaskRequest {
    /**
     * Base64-encoded program data
     * @type {string}
     * @memberof StartTaskRequest
     */
    program_data_buf: string;
    /**
     * 
     * @type {ProgramType}
     * @memberof StartTaskRequest
     */
    program_type: ProgramType;
    /**
     * The name of the program. If not provided, will generate a random one
     * @type {string}
     * @memberof StartTaskRequest
     */
    program_name?: string;
    /**
     * Btf archive path in the server.
     * @type {string}
     * @memberof StartTaskRequest
     */
    btf_archive_path?: string;
    /**
     * Command line arguments to the eBPF program
     * @type {Array<string>}
     * @memberof StartTaskRequest
     */
    extra_args?: Array<string>;
    /**
     * Whether to let the bpf-loader program dumps json. Only works for json & tar program
     * @type {boolean}
     * @memberof StartTaskRequest
     */
    export_json?: boolean;
}