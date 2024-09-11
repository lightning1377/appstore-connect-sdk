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
import type { AppCustomProductPageLocalizationsResponse, AppCustomProductPageVersionCreateRequest, AppCustomProductPageVersionResponse, AppCustomProductPageVersionUpdateRequest } from "../models";
export interface AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedRequest {
    id: string;
    filterLocale?: Array<string>;
    fieldsAppScreenshotSets?: Array<AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum>;
    fieldsAppCustomProductPageLocalizations?: Array<AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum>;
    fieldsAppCustomProductPageVersions?: Array<AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum>;
    fieldsAppPreviewSets?: Array<AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum>;
    limit?: number;
    limitAppScreenshotSets?: number;
    limitAppPreviewSets?: number;
    include?: Array<AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedIncludeEnum>;
}
export interface AppCustomProductPageVersionsCreateInstanceRequest {
    appCustomProductPageVersionCreateRequest: AppCustomProductPageVersionCreateRequest;
}
export interface AppCustomProductPageVersionsGetInstanceRequest {
    id: string;
    fieldsAppCustomProductPageVersions?: Array<AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageVersionsEnum>;
    include?: Array<AppCustomProductPageVersionsGetInstanceIncludeEnum>;
    fieldsAppCustomProductPageLocalizations?: Array<AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageLocalizationsEnum>;
    limitAppCustomProductPageLocalizations?: number;
}
export interface AppCustomProductPageVersionsUpdateInstanceRequest {
    id: string;
    appCustomProductPageVersionUpdateRequest: AppCustomProductPageVersionUpdateRequest;
}
/**
 *
 */
export declare class AppCustomProductPageVersionsApi extends runtime.BaseAPI {
    /**
     */
    appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedRaw(requestParameters: AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageLocalizationsResponse>>;
    /**
     */
    appCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelated(requestParameters: AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageLocalizationsResponse>;
    /**
     */
    appCustomProductPageVersionsCreateInstanceRaw(requestParameters: AppCustomProductPageVersionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageVersionResponse>>;
    /**
     */
    appCustomProductPageVersionsCreateInstance(requestParameters: AppCustomProductPageVersionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageVersionResponse>;
    /**
     */
    appCustomProductPageVersionsGetInstanceRaw(requestParameters: AppCustomProductPageVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageVersionResponse>>;
    /**
     */
    appCustomProductPageVersionsGetInstance(requestParameters: AppCustomProductPageVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageVersionResponse>;
    /**
     */
    appCustomProductPageVersionsUpdateInstanceRaw(requestParameters: AppCustomProductPageVersionsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageVersionResponse>>;
    /**
     */
    appCustomProductPageVersionsUpdateInstance(requestParameters: AppCustomProductPageVersionsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageVersionResponse>;
}
/**
 * @export
 */
export declare const AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum: {
    readonly AppCustomProductPageLocalization: "appCustomProductPageLocalization";
    readonly AppScreenshots: "appScreenshots";
    readonly AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization";
    readonly AppStoreVersionLocalization: "appStoreVersionLocalization";
    readonly ScreenshotDisplayType: "screenshotDisplayType";
};
export type AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum = (typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum)[keyof typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum: {
    readonly AppCustomProductPageVersion: "appCustomProductPageVersion";
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly Locale: "locale";
    readonly PromotionalText: "promotionalText";
};
export type AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = (typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum)[keyof typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum: {
    readonly AppCustomProductPage: "appCustomProductPage";
    readonly AppCustomProductPageLocalizations: "appCustomProductPageLocalizations";
    readonly DeepLink: "deepLink";
    readonly State: "state";
    readonly Version: "version";
};
export type AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum = (typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum)[keyof typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum: {
    readonly AppCustomProductPageLocalization: "appCustomProductPageLocalization";
    readonly AppPreviews: "appPreviews";
    readonly AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization";
    readonly AppStoreVersionLocalization: "appStoreVersionLocalization";
    readonly PreviewType: "previewType";
};
export type AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum = (typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum)[keyof typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedIncludeEnum: {
    readonly AppCustomProductPageVersion: "appCustomProductPageVersion";
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
};
export type AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedIncludeEnum = (typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedIncludeEnum)[keyof typeof AppCustomProductPageVersionsAppCustomProductPageLocalizationsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageVersionsEnum: {
    readonly AppCustomProductPage: "appCustomProductPage";
    readonly AppCustomProductPageLocalizations: "appCustomProductPageLocalizations";
    readonly DeepLink: "deepLink";
    readonly State: "state";
    readonly Version: "version";
};
export type AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageVersionsEnum = (typeof AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageVersionsEnum)[keyof typeof AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageVersionsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageVersionsGetInstanceIncludeEnum: {
    readonly AppCustomProductPage: "appCustomProductPage";
    readonly AppCustomProductPageLocalizations: "appCustomProductPageLocalizations";
};
export type AppCustomProductPageVersionsGetInstanceIncludeEnum = (typeof AppCustomProductPageVersionsGetInstanceIncludeEnum)[keyof typeof AppCustomProductPageVersionsGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageLocalizationsEnum: {
    readonly AppCustomProductPageVersion: "appCustomProductPageVersion";
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly Locale: "locale";
    readonly PromotionalText: "promotionalText";
};
export type AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageLocalizationsEnum = (typeof AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageLocalizationsEnum)[keyof typeof AppCustomProductPageVersionsGetInstanceFieldsAppCustomProductPageLocalizationsEnum];
