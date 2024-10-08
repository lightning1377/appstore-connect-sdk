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
 * @interface PerfPowerMetricAttributes
 */
export interface PerfPowerMetricAttributes {
    /**
     *
     * @type {string}
     * @memberof PerfPowerMetricAttributes
     */
    platform?: PerfPowerMetricAttributesPlatformEnum;
    /**
     *
     * @type {string}
     * @memberof PerfPowerMetricAttributes
     */
    metricType?: PerfPowerMetricAttributesMetricTypeEnum;
    /**
     *
     * @type {string}
     * @memberof PerfPowerMetricAttributes
     */
    deviceType?: string;
}
/**
 * @export
 */
export declare const PerfPowerMetricAttributesPlatformEnum: {
    readonly Ios: "IOS";
};
export type PerfPowerMetricAttributesPlatformEnum = (typeof PerfPowerMetricAttributesPlatformEnum)[keyof typeof PerfPowerMetricAttributesPlatformEnum];
/**
 * @export
 */
export declare const PerfPowerMetricAttributesMetricTypeEnum: {
    readonly Disk: "DISK";
    readonly Hang: "HANG";
    readonly Battery: "BATTERY";
    readonly Launch: "LAUNCH";
    readonly Memory: "MEMORY";
    readonly Animation: "ANIMATION";
    readonly Termination: "TERMINATION";
};
export type PerfPowerMetricAttributesMetricTypeEnum = (typeof PerfPowerMetricAttributesMetricTypeEnum)[keyof typeof PerfPowerMetricAttributesMetricTypeEnum];
/**
 * Check if a given object implements the PerfPowerMetricAttributes interface.
 */
export declare function instanceOfPerfPowerMetricAttributes(value: object): boolean;
export declare function PerfPowerMetricAttributesFromJSON(json: any): PerfPowerMetricAttributes;
export declare function PerfPowerMetricAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PerfPowerMetricAttributes;
export declare function PerfPowerMetricAttributesToJSON(value?: PerfPowerMetricAttributes | null): any;
