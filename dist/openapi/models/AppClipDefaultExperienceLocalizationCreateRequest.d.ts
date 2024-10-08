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
import type { AppClipDefaultExperienceLocalizationCreateRequestData } from "./AppClipDefaultExperienceLocalizationCreateRequestData";
/**
 *
 * @export
 * @interface AppClipDefaultExperienceLocalizationCreateRequest
 */
export interface AppClipDefaultExperienceLocalizationCreateRequest {
    /**
     *
     * @type {AppClipDefaultExperienceLocalizationCreateRequestData}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequest
     */
    data: AppClipDefaultExperienceLocalizationCreateRequestData;
}
/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationCreateRequest interface.
 */
export declare function instanceOfAppClipDefaultExperienceLocalizationCreateRequest(value: object): boolean;
export declare function AppClipDefaultExperienceLocalizationCreateRequestFromJSON(json: any): AppClipDefaultExperienceLocalizationCreateRequest;
export declare function AppClipDefaultExperienceLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationCreateRequest;
export declare function AppClipDefaultExperienceLocalizationCreateRequestToJSON(value?: AppClipDefaultExperienceLocalizationCreateRequest | null): any;
