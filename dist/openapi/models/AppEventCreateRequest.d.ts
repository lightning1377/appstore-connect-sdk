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
import type { AppEventCreateRequestData } from "./AppEventCreateRequestData";
/**
 *
 * @export
 * @interface AppEventCreateRequest
 */
export interface AppEventCreateRequest {
    /**
     *
     * @type {AppEventCreateRequestData}
     * @memberof AppEventCreateRequest
     */
    data: AppEventCreateRequestData;
}
/**
 * Check if a given object implements the AppEventCreateRequest interface.
 */
export declare function instanceOfAppEventCreateRequest(value: object): boolean;
export declare function AppEventCreateRequestFromJSON(json: any): AppEventCreateRequest;
export declare function AppEventCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventCreateRequest;
export declare function AppEventCreateRequestToJSON(value?: AppEventCreateRequest | null): any;
