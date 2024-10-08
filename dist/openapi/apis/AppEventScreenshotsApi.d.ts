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
import type { AppEventScreenshotCreateRequest, AppEventScreenshotResponse, AppEventScreenshotUpdateRequest } from "../models";
export interface AppEventScreenshotsCreateInstanceRequest {
    appEventScreenshotCreateRequest: AppEventScreenshotCreateRequest;
}
export interface AppEventScreenshotsDeleteInstanceRequest {
    id: string;
}
export interface AppEventScreenshotsGetInstanceRequest {
    id: string;
    fieldsAppEventScreenshots?: Array<AppEventScreenshotsGetInstanceFieldsAppEventScreenshotsEnum>;
    include?: Array<AppEventScreenshotsGetInstanceIncludeEnum>;
}
export interface AppEventScreenshotsUpdateInstanceRequest {
    id: string;
    appEventScreenshotUpdateRequest: AppEventScreenshotUpdateRequest;
}
/**
 *
 */
export declare class AppEventScreenshotsApi extends runtime.BaseAPI {
    /**
     */
    appEventScreenshotsCreateInstanceRaw(requestParameters: AppEventScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventScreenshotResponse>>;
    /**
     */
    appEventScreenshotsCreateInstance(requestParameters: AppEventScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventScreenshotResponse>;
    /**
     */
    appEventScreenshotsDeleteInstanceRaw(requestParameters: AppEventScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    appEventScreenshotsDeleteInstance(requestParameters: AppEventScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    appEventScreenshotsGetInstanceRaw(requestParameters: AppEventScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventScreenshotResponse>>;
    /**
     */
    appEventScreenshotsGetInstance(requestParameters: AppEventScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventScreenshotResponse>;
    /**
     */
    appEventScreenshotsUpdateInstanceRaw(requestParameters: AppEventScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventScreenshotResponse>>;
    /**
     */
    appEventScreenshotsUpdateInstance(requestParameters: AppEventScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventScreenshotResponse>;
}
/**
 * @export
 */
export declare const AppEventScreenshotsGetInstanceFieldsAppEventScreenshotsEnum: {
    readonly AppEventAssetType: "appEventAssetType";
    readonly AppEventLocalization: "appEventLocalization";
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly AssetToken: "assetToken";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly ImageAsset: "imageAsset";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
};
export type AppEventScreenshotsGetInstanceFieldsAppEventScreenshotsEnum = (typeof AppEventScreenshotsGetInstanceFieldsAppEventScreenshotsEnum)[keyof typeof AppEventScreenshotsGetInstanceFieldsAppEventScreenshotsEnum];
/**
 * @export
 */
export declare const AppEventScreenshotsGetInstanceIncludeEnum: {
    readonly AppEventLocalization: "appEventLocalization";
};
export type AppEventScreenshotsGetInstanceIncludeEnum = (typeof AppEventScreenshotsGetInstanceIncludeEnum)[keyof typeof AppEventScreenshotsGetInstanceIncludeEnum];
