/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
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

import { exists, mapValues } from "../runtime";
import type { AnalyticsReportRequestRelationshipsReports } from "./AnalyticsReportRequestRelationshipsReports";
import { AnalyticsReportRequestRelationshipsReportsFromJSON, AnalyticsReportRequestRelationshipsReportsFromJSONTyped, AnalyticsReportRequestRelationshipsReportsToJSON } from "./AnalyticsReportRequestRelationshipsReports";

/**
 *
 * @export
 * @interface AnalyticsReportRequestRelationships
 */
export interface AnalyticsReportRequestRelationships {
    /**
     *
     * @type {AnalyticsReportRequestRelationshipsReports}
     * @memberof AnalyticsReportRequestRelationships
     */
    reports?: AnalyticsReportRequestRelationshipsReports;
}

/**
 * Check if a given object implements the AnalyticsReportRequestRelationships interface.
 */
export function instanceOfAnalyticsReportRequestRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AnalyticsReportRequestRelationshipsFromJSON(json: any): AnalyticsReportRequestRelationships {
    return AnalyticsReportRequestRelationshipsFromJSONTyped(json, false);
}

export function AnalyticsReportRequestRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportRequestRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        reports: !exists(json, "reports") ? undefined : AnalyticsReportRequestRelationshipsReportsFromJSON(json["reports"])
    };
}

export function AnalyticsReportRequestRelationshipsToJSON(value?: AnalyticsReportRequestRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        reports: AnalyticsReportRequestRelationshipsReportsToJSON(value.reports)
    };
}
