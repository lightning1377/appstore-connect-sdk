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
exports.GameCenterMatchmakingSessionsV1MetricResponseDataInnerGranularityEnum = void 0;
exports.instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInner = instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInner;
exports.GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSON = GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSON;
exports.GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSONTyped = GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSONTyped;
exports.GameCenterMatchmakingSessionsV1MetricResponseDataInnerToJSON = GameCenterMatchmakingSessionsV1MetricResponseDataInnerToJSON;
const runtime_1 = require("../runtime");
const GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints_1 = require("./GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints");
/**
 * @export
 */
exports.GameCenterMatchmakingSessionsV1MetricResponseDataInnerGranularityEnum = {
    P1D: "P1D",
    Pt1H: "PT1H",
    Pt15M: "PT15M"
};
/**
 * Check if a given object implements the GameCenterMatchmakingSessionsV1MetricResponseDataInner interface.
 */
function instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInner(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSON(json) {
    return GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSONTyped(json, false);
}
function GameCenterMatchmakingSessionsV1MetricResponseDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        dataPoints: !(0, runtime_1.exists)(json, "dataPoints") ? undefined : (0, GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints_1.GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSON)(json["dataPoints"]),
        granularity: !(0, runtime_1.exists)(json, "granularity") ? undefined : json["granularity"]
    };
}
function GameCenterMatchmakingSessionsV1MetricResponseDataInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        dataPoints: (0, GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints_1.GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsToJSON)(value.dataPoints),
        granularity: value.granularity
    };
}
