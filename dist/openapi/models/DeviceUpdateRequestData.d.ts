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
import type { DeviceUpdateRequestDataAttributes } from "./DeviceUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface DeviceUpdateRequestData
 */
export interface DeviceUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof DeviceUpdateRequestData
     */
    type: DeviceUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof DeviceUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {DeviceUpdateRequestDataAttributes}
     * @memberof DeviceUpdateRequestData
     */
    attributes?: DeviceUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const DeviceUpdateRequestDataTypeEnum: {
    readonly Devices: "devices";
};
export type DeviceUpdateRequestDataTypeEnum = (typeof DeviceUpdateRequestDataTypeEnum)[keyof typeof DeviceUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the DeviceUpdateRequestData interface.
 */
export declare function instanceOfDeviceUpdateRequestData(value: object): boolean;
export declare function DeviceUpdateRequestDataFromJSON(json: any): DeviceUpdateRequestData;
export declare function DeviceUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceUpdateRequestData;
export declare function DeviceUpdateRequestDataToJSON(value?: DeviceUpdateRequestData | null): any;
