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
 * @interface AnalyticsReportRequestAttributes
 */
export interface AnalyticsReportRequestAttributes {
    /**
     *
     * @type {string}
     * @memberof AnalyticsReportRequestAttributes
     */
    accessType?: AnalyticsReportRequestAttributesAccessTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof AnalyticsReportRequestAttributes
     */
    stoppedDueToInactivity?: boolean;
}
/**
 * @export
 */
export declare const AnalyticsReportRequestAttributesAccessTypeEnum: {
    readonly OneTimeSnapshot: "ONE_TIME_SNAPSHOT";
    readonly Ongoing: "ONGOING";
};
export type AnalyticsReportRequestAttributesAccessTypeEnum = (typeof AnalyticsReportRequestAttributesAccessTypeEnum)[keyof typeof AnalyticsReportRequestAttributesAccessTypeEnum];
/**
 * Check if a given object implements the AnalyticsReportRequestAttributes interface.
 */
export declare function instanceOfAnalyticsReportRequestAttributes(value: object): boolean;
export declare function AnalyticsReportRequestAttributesFromJSON(json: any): AnalyticsReportRequestAttributes;
export declare function AnalyticsReportRequestAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportRequestAttributes;
export declare function AnalyticsReportRequestAttributesToJSON(value?: AnalyticsReportRequestAttributes | null): any;
