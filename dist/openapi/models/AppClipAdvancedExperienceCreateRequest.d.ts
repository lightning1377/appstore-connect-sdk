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
import type { AppClipAdvancedExperienceCreateRequestData } from "./AppClipAdvancedExperienceCreateRequestData";
import type { AppClipAdvancedExperienceLocalizationInlineCreate } from "./AppClipAdvancedExperienceLocalizationInlineCreate";
/**
 *
 * @export
 * @interface AppClipAdvancedExperienceCreateRequest
 */
export interface AppClipAdvancedExperienceCreateRequest {
    /**
     *
     * @type {AppClipAdvancedExperienceCreateRequestData}
     * @memberof AppClipAdvancedExperienceCreateRequest
     */
    data: AppClipAdvancedExperienceCreateRequestData;
    /**
     *
     * @type {Array<AppClipAdvancedExperienceLocalizationInlineCreate>}
     * @memberof AppClipAdvancedExperienceCreateRequest
     */
    included?: Array<AppClipAdvancedExperienceLocalizationInlineCreate>;
}
/**
 * Check if a given object implements the AppClipAdvancedExperienceCreateRequest interface.
 */
export declare function instanceOfAppClipAdvancedExperienceCreateRequest(value: object): boolean;
export declare function AppClipAdvancedExperienceCreateRequestFromJSON(json: any): AppClipAdvancedExperienceCreateRequest;
export declare function AppClipAdvancedExperienceCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceCreateRequest;
export declare function AppClipAdvancedExperienceCreateRequestToJSON(value?: AppClipAdvancedExperienceCreateRequest | null): any;
