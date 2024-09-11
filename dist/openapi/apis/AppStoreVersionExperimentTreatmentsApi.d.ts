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
import type { AppStoreVersionExperimentTreatmentCreateRequest, AppStoreVersionExperimentTreatmentLocalizationsResponse, AppStoreVersionExperimentTreatmentResponse, AppStoreVersionExperimentTreatmentUpdateRequest } from "../models";
export interface AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedRequest {
    id: string;
    filterLocale?: Array<string>;
    fieldsAppScreenshotSets?: Array<AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum>;
    fieldsAppStoreVersionExperimentTreatments?: Array<AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentsEnum>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    fieldsAppPreviewSets?: Array<AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum>;
    limit?: number;
    limitAppScreenshotSets?: number;
    limitAppPreviewSets?: number;
    include?: Array<AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedIncludeEnum>;
}
export interface AppStoreVersionExperimentTreatmentsCreateInstanceRequest {
    appStoreVersionExperimentTreatmentCreateRequest: AppStoreVersionExperimentTreatmentCreateRequest;
}
export interface AppStoreVersionExperimentTreatmentsDeleteInstanceRequest {
    id: string;
}
export interface AppStoreVersionExperimentTreatmentsGetInstanceRequest {
    id: string;
    fieldsAppStoreVersionExperimentTreatments?: Array<AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentsEnum>;
    include?: Array<AppStoreVersionExperimentTreatmentsGetInstanceIncludeEnum>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    limitAppStoreVersionExperimentTreatmentLocalizations?: number;
}
export interface AppStoreVersionExperimentTreatmentsUpdateInstanceRequest {
    id: string;
    appStoreVersionExperimentTreatmentUpdateRequest: AppStoreVersionExperimentTreatmentUpdateRequest;
}
/**
 *
 */
export declare class AppStoreVersionExperimentTreatmentsApi extends runtime.BaseAPI {
    /**
     */
    appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedRaw(requestParameters: AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionExperimentTreatmentLocalizationsResponse>>;
    /**
     */
    appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated(requestParameters: AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionExperimentTreatmentLocalizationsResponse>;
    /**
     */
    appStoreVersionExperimentTreatmentsCreateInstanceRaw(requestParameters: AppStoreVersionExperimentTreatmentsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionExperimentTreatmentResponse>>;
    /**
     */
    appStoreVersionExperimentTreatmentsCreateInstance(requestParameters: AppStoreVersionExperimentTreatmentsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionExperimentTreatmentResponse>;
    /**
     */
    appStoreVersionExperimentTreatmentsDeleteInstanceRaw(requestParameters: AppStoreVersionExperimentTreatmentsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    appStoreVersionExperimentTreatmentsDeleteInstance(requestParameters: AppStoreVersionExperimentTreatmentsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    appStoreVersionExperimentTreatmentsGetInstanceRaw(requestParameters: AppStoreVersionExperimentTreatmentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionExperimentTreatmentResponse>>;
    /**
     */
    appStoreVersionExperimentTreatmentsGetInstance(requestParameters: AppStoreVersionExperimentTreatmentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionExperimentTreatmentResponse>;
    /**
     */
    appStoreVersionExperimentTreatmentsUpdateInstanceRaw(requestParameters: AppStoreVersionExperimentTreatmentsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionExperimentTreatmentResponse>>;
    /**
     */
    appStoreVersionExperimentTreatmentsUpdateInstance(requestParameters: AppStoreVersionExperimentTreatmentsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionExperimentTreatmentResponse>;
}
/**
 * @export
 */
export declare const AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum: {
    readonly AppCustomProductPageLocalization: "appCustomProductPageLocalization";
    readonly AppScreenshots: "appScreenshots";
    readonly AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization";
    readonly AppStoreVersionLocalization: "appStoreVersionLocalization";
    readonly ScreenshotDisplayType: "screenshotDisplayType";
};
export type AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum = (typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum)[keyof typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export declare const AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentsEnum: {
    readonly AppIcon: "appIcon";
    readonly AppIconName: "appIconName";
    readonly AppStoreVersionExperiment: "appStoreVersionExperiment";
    readonly AppStoreVersionExperimentTreatmentLocalizations: "appStoreVersionExperimentTreatmentLocalizations";
    readonly AppStoreVersionExperimentV2: "appStoreVersionExperimentV2";
    readonly Name: "name";
    readonly PromotedDate: "promotedDate";
};
export type AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentsEnum = (typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentsEnum)[keyof typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentsEnum];
/**
 * @export
 */
export declare const AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum: {
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly AppStoreVersionExperimentTreatment: "appStoreVersionExperimentTreatment";
    readonly Locale: "locale";
};
export type AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = (typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum)[keyof typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum];
/**
 * @export
 */
export declare const AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum: {
    readonly AppCustomProductPageLocalization: "appCustomProductPageLocalization";
    readonly AppPreviews: "appPreviews";
    readonly AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization";
    readonly AppStoreVersionLocalization: "appStoreVersionLocalization";
    readonly PreviewType: "previewType";
};
export type AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum = (typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum)[keyof typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum];
/**
 * @export
 */
export declare const AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedIncludeEnum: {
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly AppStoreVersionExperimentTreatment: "appStoreVersionExperimentTreatment";
};
export type AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedIncludeEnum = (typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedIncludeEnum)[keyof typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentsEnum: {
    readonly AppIcon: "appIcon";
    readonly AppIconName: "appIconName";
    readonly AppStoreVersionExperiment: "appStoreVersionExperiment";
    readonly AppStoreVersionExperimentTreatmentLocalizations: "appStoreVersionExperimentTreatmentLocalizations";
    readonly AppStoreVersionExperimentV2: "appStoreVersionExperimentV2";
    readonly Name: "name";
    readonly PromotedDate: "promotedDate";
};
export type AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentsEnum = (typeof AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentsEnum)[keyof typeof AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentsEnum];
/**
 * @export
 */
export declare const AppStoreVersionExperimentTreatmentsGetInstanceIncludeEnum: {
    readonly AppStoreVersionExperiment: "appStoreVersionExperiment";
    readonly AppStoreVersionExperimentTreatmentLocalizations: "appStoreVersionExperimentTreatmentLocalizations";
    readonly AppStoreVersionExperimentV2: "appStoreVersionExperimentV2";
};
export type AppStoreVersionExperimentTreatmentsGetInstanceIncludeEnum = (typeof AppStoreVersionExperimentTreatmentsGetInstanceIncludeEnum)[keyof typeof AppStoreVersionExperimentTreatmentsGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum: {
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly AppStoreVersionExperimentTreatment: "appStoreVersionExperimentTreatment";
    readonly Locale: "locale";
};
export type AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = (typeof AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum)[keyof typeof AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum];
