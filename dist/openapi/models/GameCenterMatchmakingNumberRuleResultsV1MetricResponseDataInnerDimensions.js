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
exports.instanceOfGameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions = instanceOfGameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions;
exports.GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSON = GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSON;
exports.GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSONTyped = GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSONTyped;
exports.GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsToJSON = GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsToJSON;
const runtime_1 = require("../runtime");
const AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters_1 = require("./AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters");
/**
 * Check if a given object implements the GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions interface.
 */
function instanceOfGameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSON(json) {
    return GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSONTyped(json, false);
}
function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        gameCenterMatchmakingQueue: !(0, runtime_1.exists)(json, "gameCenterMatchmakingQueue") ? undefined : (0, AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters_1.AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON)(json["gameCenterMatchmakingQueue"])
    };
}
function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        gameCenterMatchmakingQueue: (0, AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters_1.AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON)(value.gameCenterMatchmakingQueue)
    };
}
