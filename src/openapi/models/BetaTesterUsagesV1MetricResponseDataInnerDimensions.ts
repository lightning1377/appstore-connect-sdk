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
import type { AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters } from "./AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters";
import { AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON, AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSONTyped, AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON } from "./AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters";

/**
 *
 * @export
 * @interface BetaTesterUsagesV1MetricResponseDataInnerDimensions
 */
export interface BetaTesterUsagesV1MetricResponseDataInnerDimensions {
    /**
     *
     * @type {AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters}
     * @memberof BetaTesterUsagesV1MetricResponseDataInnerDimensions
     */
    apps?: AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters;
}

/**
 * Check if a given object implements the BetaTesterUsagesV1MetricResponseDataInnerDimensions interface.
 */
export function instanceOfBetaTesterUsagesV1MetricResponseDataInnerDimensions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaTesterUsagesV1MetricResponseDataInnerDimensionsFromJSON(json: any): BetaTesterUsagesV1MetricResponseDataInnerDimensions {
    return BetaTesterUsagesV1MetricResponseDataInnerDimensionsFromJSONTyped(json, false);
}

export function BetaTesterUsagesV1MetricResponseDataInnerDimensionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterUsagesV1MetricResponseDataInnerDimensions {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        apps: !exists(json, "apps") ? undefined : AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON(json["apps"])
    };
}

export function BetaTesterUsagesV1MetricResponseDataInnerDimensionsToJSON(value?: BetaTesterUsagesV1MetricResponseDataInnerDimensions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        apps: AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON(value.apps)
    };
}
