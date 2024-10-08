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
import type { AnalyticsReportAttributes } from "./AnalyticsReportAttributes";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AnalyticsReport
 */
export interface AnalyticsReport {
    /**
     *
     * @type {string}
     * @memberof AnalyticsReport
     */
    type: AnalyticsReportTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AnalyticsReport
     */
    id: string;
    /**
     *
     * @type {AnalyticsReportAttributes}
     * @memberof AnalyticsReport
     */
    attributes?: AnalyticsReportAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AnalyticsReport
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AnalyticsReportTypeEnum: {
    readonly AnalyticsReports: "analyticsReports";
};
export type AnalyticsReportTypeEnum = (typeof AnalyticsReportTypeEnum)[keyof typeof AnalyticsReportTypeEnum];
/**
 * Check if a given object implements the AnalyticsReport interface.
 */
export declare function instanceOfAnalyticsReport(value: object): boolean;
export declare function AnalyticsReportFromJSON(json: any): AnalyticsReport;
export declare function AnalyticsReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReport;
export declare function AnalyticsReportToJSON(value?: AnalyticsReport | null): any;
