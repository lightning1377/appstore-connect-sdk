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
import type { MetricsInsight } from "./MetricsInsight";
import { MetricsInsightFromJSON, MetricsInsightFromJSONTyped, MetricsInsightToJSON } from "./MetricsInsight";

/**
 *
 * @export
 * @interface XcodeMetricsInsights
 */
export interface XcodeMetricsInsights {
    /**
     *
     * @type {Array<MetricsInsight>}
     * @memberof XcodeMetricsInsights
     */
    trendingUp?: Array<MetricsInsight>;
    /**
     *
     * @type {Array<MetricsInsight>}
     * @memberof XcodeMetricsInsights
     */
    regressions?: Array<MetricsInsight>;
}

/**
 * Check if a given object implements the XcodeMetricsInsights interface.
 */
export function instanceOfXcodeMetricsInsights(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function XcodeMetricsInsightsFromJSON(json: any): XcodeMetricsInsights {
    return XcodeMetricsInsightsFromJSONTyped(json, false);
}

export function XcodeMetricsInsightsFromJSONTyped(json: any, ignoreDiscriminator: boolean): XcodeMetricsInsights {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        trendingUp: !exists(json, "trendingUp") ? undefined : (json["trendingUp"] as Array<any>).map(MetricsInsightFromJSON),
        regressions: !exists(json, "regressions") ? undefined : (json["regressions"] as Array<any>).map(MetricsInsightFromJSON)
    };
}

export function XcodeMetricsInsightsToJSON(value?: XcodeMetricsInsights | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        trendingUp: value.trendingUp === undefined ? undefined : (value.trendingUp as Array<any>).map(MetricsInsightToJSON),
        regressions: value.regressions === undefined ? undefined : (value.regressions as Array<any>).map(MetricsInsightToJSON)
    };
}
