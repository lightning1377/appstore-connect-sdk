/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { SandboxTesterV2UpdateRequestData } from "./SandboxTesterV2UpdateRequestData";
/**
 *
 * @export
 * @interface SandboxTesterV2UpdateRequest
 */
export interface SandboxTesterV2UpdateRequest {
    /**
     *
     * @type {SandboxTesterV2UpdateRequestData}
     * @memberof SandboxTesterV2UpdateRequest
     */
    data: SandboxTesterV2UpdateRequestData;
}
/**
 * Check if a given object implements the SandboxTesterV2UpdateRequest interface.
 */
export declare function instanceOfSandboxTesterV2UpdateRequest(value: object): boolean;
export declare function SandboxTesterV2UpdateRequestFromJSON(json: any): SandboxTesterV2UpdateRequest;
export declare function SandboxTesterV2UpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTesterV2UpdateRequest;
export declare function SandboxTesterV2UpdateRequestToJSON(value?: SandboxTesterV2UpdateRequest | null): any;
