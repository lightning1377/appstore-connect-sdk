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
import type { BuildUpdateRequestData } from "./BuildUpdateRequestData";
/**
 *
 * @export
 * @interface BuildUpdateRequest
 */
export interface BuildUpdateRequest {
    /**
     *
     * @type {BuildUpdateRequestData}
     * @memberof BuildUpdateRequest
     */
    data: BuildUpdateRequestData;
}
/**
 * Check if a given object implements the BuildUpdateRequest interface.
 */
export declare function instanceOfBuildUpdateRequest(value: object): boolean;
export declare function BuildUpdateRequestFromJSON(json: any): BuildUpdateRequest;
export declare function BuildUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildUpdateRequest;
export declare function BuildUpdateRequestToJSON(value?: BuildUpdateRequest | null): any;
