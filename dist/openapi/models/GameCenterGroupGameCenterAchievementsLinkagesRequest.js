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
exports.instanceOfGameCenterGroupGameCenterAchievementsLinkagesRequest = instanceOfGameCenterGroupGameCenterAchievementsLinkagesRequest;
exports.GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSON = GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSON;
exports.GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSONTyped = GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSONTyped;
exports.GameCenterGroupGameCenterAchievementsLinkagesRequestToJSON = GameCenterGroupGameCenterAchievementsLinkagesRequestToJSON;
const GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData_1 = require("./GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData");
/**
 * Check if a given object implements the GameCenterGroupGameCenterAchievementsLinkagesRequest interface.
 */
function instanceOfGameCenterGroupGameCenterAchievementsLinkagesRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSON(json) {
    return GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSONTyped(json, false);
}
function GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData_1.GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON)
    };
}
function GameCenterGroupGameCenterAchievementsLinkagesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData_1.GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON)
    };
}
