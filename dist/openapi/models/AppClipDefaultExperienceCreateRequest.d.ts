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
import type { AppClipDefaultExperienceCreateRequestData } from "./AppClipDefaultExperienceCreateRequestData";
/**
 *
 * @export
 * @interface AppClipDefaultExperienceCreateRequest
 */
export interface AppClipDefaultExperienceCreateRequest {
    /**
     *
     * @type {AppClipDefaultExperienceCreateRequestData}
     * @memberof AppClipDefaultExperienceCreateRequest
     */
    data: AppClipDefaultExperienceCreateRequestData;
}
/**
 * Check if a given object implements the AppClipDefaultExperienceCreateRequest interface.
 */
export declare function instanceOfAppClipDefaultExperienceCreateRequest(value: object): boolean;
export declare function AppClipDefaultExperienceCreateRequestFromJSON(json: any): AppClipDefaultExperienceCreateRequest;
export declare function AppClipDefaultExperienceCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceCreateRequest;
export declare function AppClipDefaultExperienceCreateRequestToJSON(value?: AppClipDefaultExperienceCreateRequest | null): any;
