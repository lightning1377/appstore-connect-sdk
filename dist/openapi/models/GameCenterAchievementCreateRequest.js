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
exports.instanceOfGameCenterAchievementCreateRequest = instanceOfGameCenterAchievementCreateRequest;
exports.GameCenterAchievementCreateRequestFromJSON = GameCenterAchievementCreateRequestFromJSON;
exports.GameCenterAchievementCreateRequestFromJSONTyped = GameCenterAchievementCreateRequestFromJSONTyped;
exports.GameCenterAchievementCreateRequestToJSON = GameCenterAchievementCreateRequestToJSON;
const GameCenterAchievementCreateRequestData_1 = require("./GameCenterAchievementCreateRequestData");
/**
 * Check if a given object implements the GameCenterAchievementCreateRequest interface.
 */
function instanceOfGameCenterAchievementCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function GameCenterAchievementCreateRequestFromJSON(json) {
    return GameCenterAchievementCreateRequestFromJSONTyped(json, false);
}
function GameCenterAchievementCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterAchievementCreateRequestData_1.GameCenterAchievementCreateRequestDataFromJSON)(json["data"])
    };
}
function GameCenterAchievementCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterAchievementCreateRequestData_1.GameCenterAchievementCreateRequestDataToJSON)(value.data)
    };
}
