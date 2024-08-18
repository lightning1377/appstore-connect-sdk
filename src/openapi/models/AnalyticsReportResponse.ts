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
import type { AnalyticsReport } from "./AnalyticsReport";
import { AnalyticsReportFromJSON, AnalyticsReportFromJSONTyped, AnalyticsReportToJSON } from "./AnalyticsReport";
import type { DocumentLinks } from "./DocumentLinks";
import { DocumentLinksFromJSON, DocumentLinksFromJSONTyped, DocumentLinksToJSON } from "./DocumentLinks";

/**
 *
 * @export
 * @interface AnalyticsReportResponse
 */
export interface AnalyticsReportResponse {
    /**
     *
     * @type {AnalyticsReport}
     * @memberof AnalyticsReportResponse
     */
    data: AnalyticsReport;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AnalyticsReportResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AnalyticsReportResponse interface.
 */
export function instanceOfAnalyticsReportResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AnalyticsReportResponseFromJSON(json: any): AnalyticsReportResponse {
    return AnalyticsReportResponseFromJSONTyped(json, false);
}

export function AnalyticsReportResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: AnalyticsReportFromJSON(json["data"]),
        links: DocumentLinksFromJSON(json["links"])
    };
}

export function AnalyticsReportResponseToJSON(value?: AnalyticsReportResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: AnalyticsReportToJSON(value.data),
        links: DocumentLinksToJSON(value.links)
    };
}
