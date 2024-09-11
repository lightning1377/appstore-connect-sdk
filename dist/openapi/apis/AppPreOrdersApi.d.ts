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
import type { AppPreOrderCreateRequest, AppPreOrderResponse, AppPreOrderUpdateRequest } from "../models";
export interface AppPreOrdersCreateInstanceRequest {
    appPreOrderCreateRequest: AppPreOrderCreateRequest;
}
export interface AppPreOrdersDeleteInstanceRequest {
    id: string;
}
export interface AppPreOrdersGetInstanceRequest {
    id: string;
    fieldsAppPreOrders?: Array<AppPreOrdersGetInstanceFieldsAppPreOrdersEnum>;
    include?: Array<AppPreOrdersGetInstanceIncludeEnum>;
}
export interface AppPreOrdersUpdateInstanceRequest {
    id: string;
    appPreOrderUpdateRequest: AppPreOrderUpdateRequest;
}
/**
 *
 */
export declare class AppPreOrdersApi extends runtime.BaseAPI {
    /**
     */
    appPreOrdersCreateInstanceRaw(requestParameters: AppPreOrdersCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPreOrderResponse>>;
    /**
     */
    appPreOrdersCreateInstance(requestParameters: AppPreOrdersCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPreOrderResponse>;
    /**
     */
    appPreOrdersDeleteInstanceRaw(requestParameters: AppPreOrdersDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    appPreOrdersDeleteInstance(requestParameters: AppPreOrdersDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    appPreOrdersGetInstanceRaw(requestParameters: AppPreOrdersGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPreOrderResponse>>;
    /**
     */
    appPreOrdersGetInstance(requestParameters: AppPreOrdersGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPreOrderResponse>;
    /**
     */
    appPreOrdersUpdateInstanceRaw(requestParameters: AppPreOrdersUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPreOrderResponse>>;
    /**
     */
    appPreOrdersUpdateInstance(requestParameters: AppPreOrdersUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPreOrderResponse>;
}
/**
 * @export
 */
export declare const AppPreOrdersGetInstanceFieldsAppPreOrdersEnum: {
    readonly App: "app";
    readonly AppReleaseDate: "appReleaseDate";
    readonly PreOrderAvailableDate: "preOrderAvailableDate";
};
export type AppPreOrdersGetInstanceFieldsAppPreOrdersEnum = (typeof AppPreOrdersGetInstanceFieldsAppPreOrdersEnum)[keyof typeof AppPreOrdersGetInstanceFieldsAppPreOrdersEnum];
/**
 * @export
 */
export declare const AppPreOrdersGetInstanceIncludeEnum: {
    readonly App: "app";
};
export type AppPreOrdersGetInstanceIncludeEnum = (typeof AppPreOrdersGetInstanceIncludeEnum)[keyof typeof AppPreOrdersGetInstanceIncludeEnum];
