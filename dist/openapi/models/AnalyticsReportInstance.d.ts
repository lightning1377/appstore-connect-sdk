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
import type { AnalyticsReportInstanceAttributes } from "./AnalyticsReportInstanceAttributes";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AnalyticsReportInstance
 */
export interface AnalyticsReportInstance {
    /**
     *
     * @type {string}
     * @memberof AnalyticsReportInstance
     */
    type: AnalyticsReportInstanceTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AnalyticsReportInstance
     */
    id: string;
    /**
     *
     * @type {AnalyticsReportInstanceAttributes}
     * @memberof AnalyticsReportInstance
     */
    attributes?: AnalyticsReportInstanceAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AnalyticsReportInstance
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AnalyticsReportInstanceTypeEnum: {
    readonly AnalyticsReportInstances: "analyticsReportInstances";
};
export type AnalyticsReportInstanceTypeEnum = (typeof AnalyticsReportInstanceTypeEnum)[keyof typeof AnalyticsReportInstanceTypeEnum];
/**
 * Check if a given object implements the AnalyticsReportInstance interface.
 */
export declare function instanceOfAnalyticsReportInstance(value: object): boolean;
export declare function AnalyticsReportInstanceFromJSON(json: any): AnalyticsReportInstance;
export declare function AnalyticsReportInstanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportInstance;
export declare function AnalyticsReportInstanceToJSON(value?: AnalyticsReportInstance | null): any;
