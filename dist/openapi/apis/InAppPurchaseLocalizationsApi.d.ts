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
import type { InAppPurchaseLocalizationCreateRequest, InAppPurchaseLocalizationResponse, InAppPurchaseLocalizationUpdateRequest } from "../models";
export interface InAppPurchaseLocalizationsCreateInstanceRequest {
    inAppPurchaseLocalizationCreateRequest: InAppPurchaseLocalizationCreateRequest;
}
export interface InAppPurchaseLocalizationsDeleteInstanceRequest {
    id: string;
}
export interface InAppPurchaseLocalizationsGetInstanceRequest {
    id: string;
    fieldsInAppPurchaseLocalizations?: Array<InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum>;
    include?: Array<InAppPurchaseLocalizationsGetInstanceIncludeEnum>;
}
export interface InAppPurchaseLocalizationsUpdateInstanceRequest {
    id: string;
    inAppPurchaseLocalizationUpdateRequest: InAppPurchaseLocalizationUpdateRequest;
}
/**
 *
 */
export declare class InAppPurchaseLocalizationsApi extends runtime.BaseAPI {
    /**
     */
    inAppPurchaseLocalizationsCreateInstanceRaw(requestParameters: InAppPurchaseLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseLocalizationResponse>>;
    /**
     */
    inAppPurchaseLocalizationsCreateInstance(requestParameters: InAppPurchaseLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseLocalizationResponse>;
    /**
     */
    inAppPurchaseLocalizationsDeleteInstanceRaw(requestParameters: InAppPurchaseLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    inAppPurchaseLocalizationsDeleteInstance(requestParameters: InAppPurchaseLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    inAppPurchaseLocalizationsGetInstanceRaw(requestParameters: InAppPurchaseLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseLocalizationResponse>>;
    /**
     */
    inAppPurchaseLocalizationsGetInstance(requestParameters: InAppPurchaseLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseLocalizationResponse>;
    /**
     */
    inAppPurchaseLocalizationsUpdateInstanceRaw(requestParameters: InAppPurchaseLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseLocalizationResponse>>;
    /**
     */
    inAppPurchaseLocalizationsUpdateInstance(requestParameters: InAppPurchaseLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseLocalizationResponse>;
}
/**
 * @export
 */
export declare const InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum: {
    readonly Description: "description";
    readonly InAppPurchaseV2: "inAppPurchaseV2";
    readonly Locale: "locale";
    readonly Name: "name";
    readonly State: "state";
};
export type InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum = (typeof InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum)[keyof typeof InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum];
/**
 * @export
 */
export declare const InAppPurchaseLocalizationsGetInstanceIncludeEnum: {
    readonly InAppPurchaseV2: "inAppPurchaseV2";
};
export type InAppPurchaseLocalizationsGetInstanceIncludeEnum = (typeof InAppPurchaseLocalizationsGetInstanceIncludeEnum)[keyof typeof InAppPurchaseLocalizationsGetInstanceIncludeEnum];
