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
import type { AppEventScreenshotCreateRequestData } from "./AppEventScreenshotCreateRequestData";
/**
 *
 * @export
 * @interface AppEventScreenshotCreateRequest
 */
export interface AppEventScreenshotCreateRequest {
    /**
     *
     * @type {AppEventScreenshotCreateRequestData}
     * @memberof AppEventScreenshotCreateRequest
     */
    data: AppEventScreenshotCreateRequestData;
}
/**
 * Check if a given object implements the AppEventScreenshotCreateRequest interface.
 */
export declare function instanceOfAppEventScreenshotCreateRequest(value: object): boolean;
export declare function AppEventScreenshotCreateRequestFromJSON(json: any): AppEventScreenshotCreateRequest;
export declare function AppEventScreenshotCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotCreateRequest;
export declare function AppEventScreenshotCreateRequestToJSON(value?: AppEventScreenshotCreateRequest | null): any;
