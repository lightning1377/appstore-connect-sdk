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
import type { AppScreenshotCreateRequest, AppScreenshotResponse, AppScreenshotUpdateRequest } from "../models";
export interface AppScreenshotsCreateInstanceRequest {
    appScreenshotCreateRequest: AppScreenshotCreateRequest;
}
export interface AppScreenshotsDeleteInstanceRequest {
    id: string;
}
export interface AppScreenshotsGetInstanceRequest {
    id: string;
    fieldsAppScreenshots?: Array<AppScreenshotsGetInstanceFieldsAppScreenshotsEnum>;
    include?: Array<AppScreenshotsGetInstanceIncludeEnum>;
}
export interface AppScreenshotsUpdateInstanceRequest {
    id: string;
    appScreenshotUpdateRequest: AppScreenshotUpdateRequest;
}
/**
 *
 */
export declare class AppScreenshotsApi extends runtime.BaseAPI {
    /**
     */
    appScreenshotsCreateInstanceRaw(requestParameters: AppScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotResponse>>;
    /**
     */
    appScreenshotsCreateInstance(requestParameters: AppScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotResponse>;
    /**
     */
    appScreenshotsDeleteInstanceRaw(requestParameters: AppScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    appScreenshotsDeleteInstance(requestParameters: AppScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    appScreenshotsGetInstanceRaw(requestParameters: AppScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotResponse>>;
    /**
     */
    appScreenshotsGetInstance(requestParameters: AppScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotResponse>;
    /**
     */
    appScreenshotsUpdateInstanceRaw(requestParameters: AppScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotResponse>>;
    /**
     */
    appScreenshotsUpdateInstance(requestParameters: AppScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotResponse>;
}
/**
 * @export
 */
export declare const AppScreenshotsGetInstanceFieldsAppScreenshotsEnum: {
    readonly AppScreenshotSet: "appScreenshotSet";
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly AssetToken: "assetToken";
    readonly AssetType: "assetType";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly ImageAsset: "imageAsset";
    readonly SourceFileChecksum: "sourceFileChecksum";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
};
export type AppScreenshotsGetInstanceFieldsAppScreenshotsEnum = (typeof AppScreenshotsGetInstanceFieldsAppScreenshotsEnum)[keyof typeof AppScreenshotsGetInstanceFieldsAppScreenshotsEnum];
/**
 * @export
 */
export declare const AppScreenshotsGetInstanceIncludeEnum: {
    readonly AppScreenshotSet: "appScreenshotSet";
};
export type AppScreenshotsGetInstanceIncludeEnum = (typeof AppScreenshotsGetInstanceIncludeEnum)[keyof typeof AppScreenshotsGetInstanceIncludeEnum];
