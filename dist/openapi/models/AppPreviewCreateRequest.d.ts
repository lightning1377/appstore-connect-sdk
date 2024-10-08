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
import type { AppPreviewCreateRequestData } from "./AppPreviewCreateRequestData";
/**
 *
 * @export
 * @interface AppPreviewCreateRequest
 */
export interface AppPreviewCreateRequest {
    /**
     *
     * @type {AppPreviewCreateRequestData}
     * @memberof AppPreviewCreateRequest
     */
    data: AppPreviewCreateRequestData;
}
/**
 * Check if a given object implements the AppPreviewCreateRequest interface.
 */
export declare function instanceOfAppPreviewCreateRequest(value: object): boolean;
export declare function AppPreviewCreateRequestFromJSON(json: any): AppPreviewCreateRequest;
export declare function AppPreviewCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewCreateRequest;
export declare function AppPreviewCreateRequestToJSON(value?: AppPreviewCreateRequest | null): any;
