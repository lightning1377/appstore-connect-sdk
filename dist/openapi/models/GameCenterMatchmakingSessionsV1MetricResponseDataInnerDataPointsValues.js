"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues = instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues;
exports.GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSON = GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSON;
exports.GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped = GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped;
exports.GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesToJSON = GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues interface.
 */
function instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSON(json) {
    return GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json, false);
}
function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        count: !(0, runtime_1.exists)(json, "count") ? undefined : json["count"],
        averagePlayerCount: !(0, runtime_1.exists)(json, "averagePlayerCount") ? undefined : json["averagePlayerCount"],
        p50PlayerCount: !(0, runtime_1.exists)(json, "p50PlayerCount") ? undefined : json["p50PlayerCount"],
        p95PlayerCount: !(0, runtime_1.exists)(json, "p95PlayerCount") ? undefined : json["p95PlayerCount"]
    };
}
function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        count: value.count,
        averagePlayerCount: value.averagePlayerCount,
        p50PlayerCount: value.p50PlayerCount,
        p95PlayerCount: value.p95PlayerCount
    };
}
