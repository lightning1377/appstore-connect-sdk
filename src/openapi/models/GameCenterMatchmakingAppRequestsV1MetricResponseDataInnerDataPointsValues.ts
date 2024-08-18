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
 * @interface GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues
 */
export interface GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues {
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues
     */
    count?: number;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues
     */
    averageSecondsInQueue?: number;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues
     */
    p50SecondsInQueue?: number;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues
     */
    p95SecondsInQueue?: number;
}

/**
 * Check if a given object implements the GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues interface.
 */
export function instanceOfGameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesFromJSON(json: any): GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues {
    return GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        count: !exists(json, "count") ? undefined : json["count"],
        averageSecondsInQueue: !exists(json, "averageSecondsInQueue") ? undefined : json["averageSecondsInQueue"],
        p50SecondsInQueue: !exists(json, "p50SecondsInQueue") ? undefined : json["p50SecondsInQueue"],
        p95SecondsInQueue: !exists(json, "p95SecondsInQueue") ? undefined : json["p95SecondsInQueue"]
    };
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesToJSON(value?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        count: value.count,
        averageSecondsInQueue: value.averageSecondsInQueue,
        p50SecondsInQueue: value.p50SecondsInQueue,
        p95SecondsInQueue: value.p95SecondsInQueue
    };
}
