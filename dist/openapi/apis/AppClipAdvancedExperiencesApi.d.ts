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
import * as runtime from "../runtime";
import type { AppClipAdvancedExperienceCreateRequest, AppClipAdvancedExperienceResponse, AppClipAdvancedExperienceUpdateRequest } from "../models";
export interface AppClipAdvancedExperiencesCreateInstanceRequest {
    appClipAdvancedExperienceCreateRequest: AppClipAdvancedExperienceCreateRequest;
}
export interface AppClipAdvancedExperiencesGetInstanceRequest {
    id: string;
    fieldsAppClipAdvancedExperiences?: Array<AppClipAdvancedExperiencesGetInstanceFieldsAppClipAdvancedExperiencesEnum>;
    include?: Array<AppClipAdvancedExperiencesGetInstanceIncludeEnum>;
    limitLocalizations?: number;
}
export interface AppClipAdvancedExperiencesUpdateInstanceRequest {
    id: string;
    appClipAdvancedExperienceUpdateRequest: AppClipAdvancedExperienceUpdateRequest;
}
/**
 *
 */
export declare class AppClipAdvancedExperiencesApi extends runtime.BaseAPI {
    /**
     */
    appClipAdvancedExperiencesCreateInstanceRaw(requestParameters: AppClipAdvancedExperiencesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperienceResponse>>;
    /**
     */
    appClipAdvancedExperiencesCreateInstance(requestParameters: AppClipAdvancedExperiencesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperienceResponse>;
    /**
     */
    appClipAdvancedExperiencesGetInstanceRaw(requestParameters: AppClipAdvancedExperiencesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperienceResponse>>;
    /**
     */
    appClipAdvancedExperiencesGetInstance(requestParameters: AppClipAdvancedExperiencesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperienceResponse>;
    /**
     */
    appClipAdvancedExperiencesUpdateInstanceRaw(requestParameters: AppClipAdvancedExperiencesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperienceResponse>>;
    /**
     */
    appClipAdvancedExperiencesUpdateInstance(requestParameters: AppClipAdvancedExperiencesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperienceResponse>;
}
/**
 * @export
 */
export declare const AppClipAdvancedExperiencesGetInstanceFieldsAppClipAdvancedExperiencesEnum: {
    readonly Action: "action";
    readonly AppClip: "appClip";
    readonly BusinessCategory: "businessCategory";
    readonly DefaultLanguage: "defaultLanguage";
    readonly HeaderImage: "headerImage";
    readonly IsPoweredBy: "isPoweredBy";
    readonly Link: "link";
    readonly Localizations: "localizations";
    readonly Place: "place";
    readonly PlaceStatus: "placeStatus";
    readonly Removed: "removed";
    readonly Status: "status";
    readonly Version: "version";
};
export type AppClipAdvancedExperiencesGetInstanceFieldsAppClipAdvancedExperiencesEnum = (typeof AppClipAdvancedExperiencesGetInstanceFieldsAppClipAdvancedExperiencesEnum)[keyof typeof AppClipAdvancedExperiencesGetInstanceFieldsAppClipAdvancedExperiencesEnum];
/**
 * @export
 */
export declare const AppClipAdvancedExperiencesGetInstanceIncludeEnum: {
    readonly AppClip: "appClip";
    readonly HeaderImage: "headerImage";
    readonly Localizations: "localizations";
};
export type AppClipAdvancedExperiencesGetInstanceIncludeEnum = (typeof AppClipAdvancedExperiencesGetInstanceIncludeEnum)[keyof typeof AppClipAdvancedExperiencesGetInstanceIncludeEnum];
