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
import type { InAppPurchaseContentResponse } from "../models";
export interface InAppPurchaseContentsGetInstanceRequest {
    id: string;
    fieldsInAppPurchaseContents?: Array<InAppPurchaseContentsGetInstanceFieldsInAppPurchaseContentsEnum>;
    include?: Array<InAppPurchaseContentsGetInstanceIncludeEnum>;
}
/**
 *
 */
export declare class InAppPurchaseContentsApi extends runtime.BaseAPI {
    /**
     */
    inAppPurchaseContentsGetInstanceRaw(requestParameters: InAppPurchaseContentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseContentResponse>>;
    /**
     */
    inAppPurchaseContentsGetInstance(requestParameters: InAppPurchaseContentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseContentResponse>;
}
/**
 * @export
 */
export declare const InAppPurchaseContentsGetInstanceFieldsInAppPurchaseContentsEnum: {
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly InAppPurchaseV2: "inAppPurchaseV2";
    readonly LastModifiedDate: "lastModifiedDate";
    readonly Url: "url";
};
export type InAppPurchaseContentsGetInstanceFieldsInAppPurchaseContentsEnum = (typeof InAppPurchaseContentsGetInstanceFieldsInAppPurchaseContentsEnum)[keyof typeof InAppPurchaseContentsGetInstanceFieldsInAppPurchaseContentsEnum];
/**
 * @export
 */
export declare const InAppPurchaseContentsGetInstanceIncludeEnum: {
    readonly InAppPurchaseV2: "inAppPurchaseV2";
};
export type InAppPurchaseContentsGetInstanceIncludeEnum = (typeof InAppPurchaseContentsGetInstanceIncludeEnum)[keyof typeof InAppPurchaseContentsGetInstanceIncludeEnum];
