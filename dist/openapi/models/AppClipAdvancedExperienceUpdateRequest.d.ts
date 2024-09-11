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
import type { AppClipAdvancedExperienceLocalizationInlineCreate } from "./AppClipAdvancedExperienceLocalizationInlineCreate";
import type { AppClipAdvancedExperienceUpdateRequestData } from "./AppClipAdvancedExperienceUpdateRequestData";
/**
 *
 * @export
 * @interface AppClipAdvancedExperienceUpdateRequest
 */
export interface AppClipAdvancedExperienceUpdateRequest {
    /**
     *
     * @type {AppClipAdvancedExperienceUpdateRequestData}
     * @memberof AppClipAdvancedExperienceUpdateRequest
     */
    data: AppClipAdvancedExperienceUpdateRequestData;
    /**
     *
     * @type {Array<AppClipAdvancedExperienceLocalizationInlineCreate>}
     * @memberof AppClipAdvancedExperienceUpdateRequest
     */
    included?: Array<AppClipAdvancedExperienceLocalizationInlineCreate>;
}
/**
 * Check if a given object implements the AppClipAdvancedExperienceUpdateRequest interface.
 */
export declare function instanceOfAppClipAdvancedExperienceUpdateRequest(value: object): boolean;
export declare function AppClipAdvancedExperienceUpdateRequestFromJSON(json: any): AppClipAdvancedExperienceUpdateRequest;
export declare function AppClipAdvancedExperienceUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceUpdateRequest;
export declare function AppClipAdvancedExperienceUpdateRequestToJSON(value?: AppClipAdvancedExperienceUpdateRequest | null): any;
