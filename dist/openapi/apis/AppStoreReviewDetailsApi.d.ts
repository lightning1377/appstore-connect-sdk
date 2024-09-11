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
import type { AppStoreReviewAttachmentsResponse, AppStoreReviewDetailCreateRequest, AppStoreReviewDetailResponse, AppStoreReviewDetailUpdateRequest } from "../models";
export interface AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRequest {
    id: string;
    fieldsAppStoreReviewDetails?: Array<AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum>;
    fieldsAppStoreReviewAttachments?: Array<AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum>;
    limit?: number;
    include?: Array<AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum>;
}
export interface AppStoreReviewDetailsCreateInstanceRequest {
    appStoreReviewDetailCreateRequest: AppStoreReviewDetailCreateRequest;
}
export interface AppStoreReviewDetailsGetInstanceRequest {
    id: string;
    fieldsAppStoreReviewDetails?: Array<AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum>;
    include?: Array<AppStoreReviewDetailsGetInstanceIncludeEnum>;
    fieldsAppStoreReviewAttachments?: Array<AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum>;
    limitAppStoreReviewAttachments?: number;
}
export interface AppStoreReviewDetailsUpdateInstanceRequest {
    id: string;
    appStoreReviewDetailUpdateRequest: AppStoreReviewDetailUpdateRequest;
}
/**
 *
 */
export declare class AppStoreReviewDetailsApi extends runtime.BaseAPI {
    /**
     */
    appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRaw(requestParameters: AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewAttachmentsResponse>>;
    /**
     */
    appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated(requestParameters: AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewAttachmentsResponse>;
    /**
     */
    appStoreReviewDetailsCreateInstanceRaw(requestParameters: AppStoreReviewDetailsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewDetailResponse>>;
    /**
     */
    appStoreReviewDetailsCreateInstance(requestParameters: AppStoreReviewDetailsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewDetailResponse>;
    /**
     */
    appStoreReviewDetailsGetInstanceRaw(requestParameters: AppStoreReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewDetailResponse>>;
    /**
     */
    appStoreReviewDetailsGetInstance(requestParameters: AppStoreReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewDetailResponse>;
    /**
     */
    appStoreReviewDetailsUpdateInstanceRaw(requestParameters: AppStoreReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewDetailResponse>>;
    /**
     */
    appStoreReviewDetailsUpdateInstance(requestParameters: AppStoreReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewDetailResponse>;
}
/**
 * @export
 */
export declare const AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum: {
    readonly AppStoreReviewAttachments: "appStoreReviewAttachments";
    readonly AppStoreVersion: "appStoreVersion";
    readonly ContactEmail: "contactEmail";
    readonly ContactFirstName: "contactFirstName";
    readonly ContactLastName: "contactLastName";
    readonly ContactPhone: "contactPhone";
    readonly DemoAccountName: "demoAccountName";
    readonly DemoAccountPassword: "demoAccountPassword";
    readonly DemoAccountRequired: "demoAccountRequired";
    readonly Notes: "notes";
};
export type AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum = (typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum)[keyof typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum];
/**
 * @export
 */
export declare const AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum: {
    readonly AppStoreReviewDetail: "appStoreReviewDetail";
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly SourceFileChecksum: "sourceFileChecksum";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
};
export type AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum = (typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum)[keyof typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum];
/**
 * @export
 */
export declare const AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum: {
    readonly AppStoreReviewDetail: "appStoreReviewDetail";
};
export type AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum = (typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum)[keyof typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum: {
    readonly AppStoreReviewAttachments: "appStoreReviewAttachments";
    readonly AppStoreVersion: "appStoreVersion";
    readonly ContactEmail: "contactEmail";
    readonly ContactFirstName: "contactFirstName";
    readonly ContactLastName: "contactLastName";
    readonly ContactPhone: "contactPhone";
    readonly DemoAccountName: "demoAccountName";
    readonly DemoAccountPassword: "demoAccountPassword";
    readonly DemoAccountRequired: "demoAccountRequired";
    readonly Notes: "notes";
};
export type AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum = (typeof AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum)[keyof typeof AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum];
/**
 * @export
 */
export declare const AppStoreReviewDetailsGetInstanceIncludeEnum: {
    readonly AppStoreReviewAttachments: "appStoreReviewAttachments";
    readonly AppStoreVersion: "appStoreVersion";
};
export type AppStoreReviewDetailsGetInstanceIncludeEnum = (typeof AppStoreReviewDetailsGetInstanceIncludeEnum)[keyof typeof AppStoreReviewDetailsGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum: {
    readonly AppStoreReviewDetail: "appStoreReviewDetail";
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly SourceFileChecksum: "sourceFileChecksum";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
};
export type AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum = (typeof AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum)[keyof typeof AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum];
