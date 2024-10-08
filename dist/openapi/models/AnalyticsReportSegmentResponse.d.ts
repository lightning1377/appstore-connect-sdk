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
import type { AnalyticsReportSegment } from "./AnalyticsReportSegment";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AnalyticsReportSegmentResponse
 */
export interface AnalyticsReportSegmentResponse {
    /**
     *
     * @type {AnalyticsReportSegment}
     * @memberof AnalyticsReportSegmentResponse
     */
    data: AnalyticsReportSegment;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AnalyticsReportSegmentResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AnalyticsReportSegmentResponse interface.
 */
export declare function instanceOfAnalyticsReportSegmentResponse(value: object): boolean;
export declare function AnalyticsReportSegmentResponseFromJSON(json: any): AnalyticsReportSegmentResponse;
export declare function AnalyticsReportSegmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportSegmentResponse;
export declare function AnalyticsReportSegmentResponseToJSON(value?: AnalyticsReportSegmentResponse | null): any;
