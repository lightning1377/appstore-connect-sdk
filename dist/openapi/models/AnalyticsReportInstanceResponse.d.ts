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
import type { AnalyticsReportInstance } from "./AnalyticsReportInstance";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AnalyticsReportInstanceResponse
 */
export interface AnalyticsReportInstanceResponse {
    /**
     *
     * @type {AnalyticsReportInstance}
     * @memberof AnalyticsReportInstanceResponse
     */
    data: AnalyticsReportInstance;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AnalyticsReportInstanceResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AnalyticsReportInstanceResponse interface.
 */
export declare function instanceOfAnalyticsReportInstanceResponse(value: object): boolean;
export declare function AnalyticsReportInstanceResponseFromJSON(json: any): AnalyticsReportInstanceResponse;
export declare function AnalyticsReportInstanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportInstanceResponse;
export declare function AnalyticsReportInstanceResponseToJSON(value?: AnalyticsReportInstanceResponse | null): any;
