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
import type { AnalyticsReportRequestCreateRequestDataRelationshipsApp } from "./AnalyticsReportRequestCreateRequestDataRelationshipsApp";
/**
 *
 * @export
 * @interface AnalyticsReportRequestCreateRequestDataRelationships
 */
export interface AnalyticsReportRequestCreateRequestDataRelationships {
    /**
     *
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof AnalyticsReportRequestCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
}
/**
 * Check if a given object implements the AnalyticsReportRequestCreateRequestDataRelationships interface.
 */
export declare function instanceOfAnalyticsReportRequestCreateRequestDataRelationships(value: object): boolean;
export declare function AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON(json: any): AnalyticsReportRequestCreateRequestDataRelationships;
export declare function AnalyticsReportRequestCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportRequestCreateRequestDataRelationships;
export declare function AnalyticsReportRequestCreateRequestDataRelationshipsToJSON(value?: AnalyticsReportRequestCreateRequestDataRelationships | null): any;
