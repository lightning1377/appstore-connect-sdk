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
import type { DeviceCreateRequest, DeviceResponse, DeviceUpdateRequest, DevicesResponse } from "../models";
export interface DevicesCreateInstanceRequest {
    deviceCreateRequest: DeviceCreateRequest;
}
export interface DevicesGetCollectionRequest {
    filterName?: Array<string>;
    filterPlatform?: Array<DevicesGetCollectionFilterPlatformEnum>;
    filterStatus?: Array<DevicesGetCollectionFilterStatusEnum>;
    filterUdid?: Array<string>;
    filterId?: Array<string>;
    sort?: Array<DevicesGetCollectionSortEnum>;
    fieldsDevices?: Array<DevicesGetCollectionFieldsDevicesEnum>;
    limit?: number;
}
export interface DevicesGetInstanceRequest {
    id: string;
    fieldsDevices?: Array<DevicesGetInstanceFieldsDevicesEnum>;
}
export interface DevicesUpdateInstanceRequest {
    id: string;
    deviceUpdateRequest: DeviceUpdateRequest;
}
/**
 *
 */
export declare class DevicesApi extends runtime.BaseAPI {
    /**
     */
    devicesCreateInstanceRaw(requestParameters: DevicesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeviceResponse>>;
    /**
     */
    devicesCreateInstance(requestParameters: DevicesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceResponse>;
    /**
     */
    devicesGetCollectionRaw(requestParameters: DevicesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DevicesResponse>>;
    /**
     */
    devicesGetCollection(requestParameters?: DevicesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DevicesResponse>;
    /**
     */
    devicesGetInstanceRaw(requestParameters: DevicesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeviceResponse>>;
    /**
     */
    devicesGetInstance(requestParameters: DevicesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceResponse>;
    /**
     */
    devicesUpdateInstanceRaw(requestParameters: DevicesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeviceResponse>>;
    /**
     */
    devicesUpdateInstance(requestParameters: DevicesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceResponse>;
}
/**
 * @export
 */
export declare const DevicesGetCollectionFilterPlatformEnum: {
    readonly Ios: "IOS";
    readonly MacOs: "MAC_OS";
};
export type DevicesGetCollectionFilterPlatformEnum = (typeof DevicesGetCollectionFilterPlatformEnum)[keyof typeof DevicesGetCollectionFilterPlatformEnum];
/**
 * @export
 */
export declare const DevicesGetCollectionFilterStatusEnum: {
    readonly Enabled: "ENABLED";
    readonly Disabled: "DISABLED";
};
export type DevicesGetCollectionFilterStatusEnum = (typeof DevicesGetCollectionFilterStatusEnum)[keyof typeof DevicesGetCollectionFilterStatusEnum];
/**
 * @export
 */
export declare const DevicesGetCollectionSortEnum: {
    readonly Id: "-id";
    readonly Name: "-name";
    readonly Platform: "-platform";
    readonly Status: "-status";
    readonly Udid: "-udid";
};
export type DevicesGetCollectionSortEnum = (typeof DevicesGetCollectionSortEnum)[keyof typeof DevicesGetCollectionSortEnum];
/**
 * @export
 */
export declare const DevicesGetCollectionFieldsDevicesEnum: {
    readonly AddedDate: "addedDate";
    readonly DeviceClass: "deviceClass";
    readonly Model: "model";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly Status: "status";
    readonly Udid: "udid";
};
export type DevicesGetCollectionFieldsDevicesEnum = (typeof DevicesGetCollectionFieldsDevicesEnum)[keyof typeof DevicesGetCollectionFieldsDevicesEnum];
/**
 * @export
 */
export declare const DevicesGetInstanceFieldsDevicesEnum: {
    readonly AddedDate: "addedDate";
    readonly DeviceClass: "deviceClass";
    readonly Model: "model";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly Status: "status";
    readonly Udid: "udid";
};
export type DevicesGetInstanceFieldsDevicesEnum = (typeof DevicesGetInstanceFieldsDevicesEnum)[keyof typeof DevicesGetInstanceFieldsDevicesEnum];
