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
import type { PromotedPurchaseImageCreateRequest, PromotedPurchaseImageResponse, PromotedPurchaseImageUpdateRequest } from "../models";
export interface PromotedPurchaseImagesCreateInstanceRequest {
    promotedPurchaseImageCreateRequest: PromotedPurchaseImageCreateRequest;
}
export interface PromotedPurchaseImagesDeleteInstanceRequest {
    id: string;
}
export interface PromotedPurchaseImagesGetInstanceRequest {
    id: string;
    fieldsPromotedPurchaseImages?: Array<PromotedPurchaseImagesGetInstanceFieldsPromotedPurchaseImagesEnum>;
    include?: Array<PromotedPurchaseImagesGetInstanceIncludeEnum>;
}
export interface PromotedPurchaseImagesUpdateInstanceRequest {
    id: string;
    promotedPurchaseImageUpdateRequest: PromotedPurchaseImageUpdateRequest;
}
/**
 *
 */
export declare class PromotedPurchaseImagesApi extends runtime.BaseAPI {
    /**
     */
    promotedPurchaseImagesCreateInstanceRaw(requestParameters: PromotedPurchaseImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PromotedPurchaseImageResponse>>;
    /**
     */
    promotedPurchaseImagesCreateInstance(requestParameters: PromotedPurchaseImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PromotedPurchaseImageResponse>;
    /**
     */
    promotedPurchaseImagesDeleteInstanceRaw(requestParameters: PromotedPurchaseImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    promotedPurchaseImagesDeleteInstance(requestParameters: PromotedPurchaseImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    promotedPurchaseImagesGetInstanceRaw(requestParameters: PromotedPurchaseImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PromotedPurchaseImageResponse>>;
    /**
     */
    promotedPurchaseImagesGetInstance(requestParameters: PromotedPurchaseImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PromotedPurchaseImageResponse>;
    /**
     */
    promotedPurchaseImagesUpdateInstanceRaw(requestParameters: PromotedPurchaseImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PromotedPurchaseImageResponse>>;
    /**
     */
    promotedPurchaseImagesUpdateInstance(requestParameters: PromotedPurchaseImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PromotedPurchaseImageResponse>;
}
/**
 * @export
 */
export declare const PromotedPurchaseImagesGetInstanceFieldsPromotedPurchaseImagesEnum: {
    readonly AssetToken: "assetToken";
    readonly AssetType: "assetType";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly ImageAsset: "imageAsset";
    readonly PromotedPurchase: "promotedPurchase";
    readonly SourceFileChecksum: "sourceFileChecksum";
    readonly State: "state";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
};
export type PromotedPurchaseImagesGetInstanceFieldsPromotedPurchaseImagesEnum = (typeof PromotedPurchaseImagesGetInstanceFieldsPromotedPurchaseImagesEnum)[keyof typeof PromotedPurchaseImagesGetInstanceFieldsPromotedPurchaseImagesEnum];
/**
 * @export
 */
export declare const PromotedPurchaseImagesGetInstanceIncludeEnum: {
    readonly PromotedPurchase: "promotedPurchase";
};
export type PromotedPurchaseImagesGetInstanceIncludeEnum = (typeof PromotedPurchaseImagesGetInstanceIncludeEnum)[keyof typeof PromotedPurchaseImagesGetInstanceIncludeEnum];
