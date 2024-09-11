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
import type { AppEventVideoClipCreateRequest, AppEventVideoClipResponse, AppEventVideoClipUpdateRequest } from "../models";
export interface AppEventVideoClipsCreateInstanceRequest {
    appEventVideoClipCreateRequest: AppEventVideoClipCreateRequest;
}
export interface AppEventVideoClipsDeleteInstanceRequest {
    id: string;
}
export interface AppEventVideoClipsGetInstanceRequest {
    id: string;
    fieldsAppEventVideoClips?: Array<AppEventVideoClipsGetInstanceFieldsAppEventVideoClipsEnum>;
    include?: Array<AppEventVideoClipsGetInstanceIncludeEnum>;
}
export interface AppEventVideoClipsUpdateInstanceRequest {
    id: string;
    appEventVideoClipUpdateRequest: AppEventVideoClipUpdateRequest;
}
/**
 *
 */
export declare class AppEventVideoClipsApi extends runtime.BaseAPI {
    /**
     */
    appEventVideoClipsCreateInstanceRaw(requestParameters: AppEventVideoClipsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventVideoClipResponse>>;
    /**
     */
    appEventVideoClipsCreateInstance(requestParameters: AppEventVideoClipsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventVideoClipResponse>;
    /**
     */
    appEventVideoClipsDeleteInstanceRaw(requestParameters: AppEventVideoClipsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    appEventVideoClipsDeleteInstance(requestParameters: AppEventVideoClipsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    appEventVideoClipsGetInstanceRaw(requestParameters: AppEventVideoClipsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventVideoClipResponse>>;
    /**
     */
    appEventVideoClipsGetInstance(requestParameters: AppEventVideoClipsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventVideoClipResponse>;
    /**
     */
    appEventVideoClipsUpdateInstanceRaw(requestParameters: AppEventVideoClipsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventVideoClipResponse>>;
    /**
     */
    appEventVideoClipsUpdateInstance(requestParameters: AppEventVideoClipsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventVideoClipResponse>;
}
/**
 * @export
 */
export declare const AppEventVideoClipsGetInstanceFieldsAppEventVideoClipsEnum: {
    readonly AppEventAssetType: "appEventAssetType";
    readonly AppEventLocalization: "appEventLocalization";
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly PreviewFrameTimeCode: "previewFrameTimeCode";
    readonly PreviewImage: "previewImage";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
    readonly VideoUrl: "videoUrl";
};
export type AppEventVideoClipsGetInstanceFieldsAppEventVideoClipsEnum = (typeof AppEventVideoClipsGetInstanceFieldsAppEventVideoClipsEnum)[keyof typeof AppEventVideoClipsGetInstanceFieldsAppEventVideoClipsEnum];
/**
 * @export
 */
export declare const AppEventVideoClipsGetInstanceIncludeEnum: {
    readonly AppEventLocalization: "appEventLocalization";
};
export type AppEventVideoClipsGetInstanceIncludeEnum = (typeof AppEventVideoClipsGetInstanceIncludeEnum)[keyof typeof AppEventVideoClipsGetInstanceIncludeEnum];
