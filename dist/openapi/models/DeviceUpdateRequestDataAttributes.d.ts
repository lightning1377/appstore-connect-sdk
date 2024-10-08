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
/**
 *
 * @export
 * @interface DeviceUpdateRequestDataAttributes
 */
export interface DeviceUpdateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof DeviceUpdateRequestDataAttributes
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceUpdateRequestDataAttributes
     */
    status?: DeviceUpdateRequestDataAttributesStatusEnum;
}
/**
 * @export
 */
export declare const DeviceUpdateRequestDataAttributesStatusEnum: {
    readonly Enabled: "ENABLED";
    readonly Disabled: "DISABLED";
};
export type DeviceUpdateRequestDataAttributesStatusEnum = (typeof DeviceUpdateRequestDataAttributesStatusEnum)[keyof typeof DeviceUpdateRequestDataAttributesStatusEnum];
/**
 * Check if a given object implements the DeviceUpdateRequestDataAttributes interface.
 */
export declare function instanceOfDeviceUpdateRequestDataAttributes(value: object): boolean;
export declare function DeviceUpdateRequestDataAttributesFromJSON(json: any): DeviceUpdateRequestDataAttributes;
export declare function DeviceUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceUpdateRequestDataAttributes;
export declare function DeviceUpdateRequestDataAttributesToJSON(value?: DeviceUpdateRequestDataAttributes | null): any;
