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
/**
 *
 * @export
 * @interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner
 */
export interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner {
    /**
     *
     * @type {string}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner
     */
    goalKey?: string;
    /**
     *
     * @type {number}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner
     */
    lowerBound?: number;
    /**
     *
     * @type {number}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner
     */
    upperBound?: number;
}

/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner interface.
 */
export function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSON(json: any): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSONTyped(json, false);
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        goalKey: !exists(json, "goalKey") ? undefined : json["goalKey"],
        lowerBound: !exists(json, "lowerBound") ? undefined : json["lowerBound"],
        upperBound: !exists(json, "upperBound") ? undefined : json["upperBound"]
    };
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSON(value?: XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        goalKey: value.goalKey,
        lowerBound: value.lowerBound,
        upperBound: value.upperBound
    };
}
