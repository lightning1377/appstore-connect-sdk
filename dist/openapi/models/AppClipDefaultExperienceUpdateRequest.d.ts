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
import type { AppClipDefaultExperienceUpdateRequestData } from "./AppClipDefaultExperienceUpdateRequestData";
/**
 *
 * @export
 * @interface AppClipDefaultExperienceUpdateRequest
 */
export interface AppClipDefaultExperienceUpdateRequest {
    /**
     *
     * @type {AppClipDefaultExperienceUpdateRequestData}
     * @memberof AppClipDefaultExperienceUpdateRequest
     */
    data: AppClipDefaultExperienceUpdateRequestData;
}
/**
 * Check if a given object implements the AppClipDefaultExperienceUpdateRequest interface.
 */
export declare function instanceOfAppClipDefaultExperienceUpdateRequest(value: object): boolean;
export declare function AppClipDefaultExperienceUpdateRequestFromJSON(json: any): AppClipDefaultExperienceUpdateRequest;
export declare function AppClipDefaultExperienceUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceUpdateRequest;
export declare function AppClipDefaultExperienceUpdateRequestToJSON(value?: AppClipDefaultExperienceUpdateRequest | null): any;
