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
exports.instanceOfGameCenterAchievementReleaseRelationships = instanceOfGameCenterAchievementReleaseRelationships;
exports.GameCenterAchievementReleaseRelationshipsFromJSON = GameCenterAchievementReleaseRelationshipsFromJSON;
exports.GameCenterAchievementReleaseRelationshipsFromJSONTyped = GameCenterAchievementReleaseRelationshipsFromJSONTyped;
exports.GameCenterAchievementReleaseRelationshipsToJSON = GameCenterAchievementReleaseRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppRelationshipsGameCenterDetail_1 = require("./AppRelationshipsGameCenterDetail");
const GameCenterAchievementLocalizationRelationshipsGameCenterAchievement_1 = require("./GameCenterAchievementLocalizationRelationshipsGameCenterAchievement");
/**
 * Check if a given object implements the GameCenterAchievementReleaseRelationships interface.
 */
function instanceOfGameCenterAchievementReleaseRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterAchievementReleaseRelationshipsFromJSON(json) {
    return GameCenterAchievementReleaseRelationshipsFromJSONTyped(json, false);
}
function GameCenterAchievementReleaseRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        gameCenterDetail: !(0, runtime_1.exists)(json, "gameCenterDetail") ? undefined : (0, AppRelationshipsGameCenterDetail_1.AppRelationshipsGameCenterDetailFromJSON)(json["gameCenterDetail"]),
        gameCenterAchievement: !(0, runtime_1.exists)(json, "gameCenterAchievement") ? undefined : (0, GameCenterAchievementLocalizationRelationshipsGameCenterAchievement_1.GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSON)(json["gameCenterAchievement"])
    };
}
function GameCenterAchievementReleaseRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        gameCenterDetail: (0, AppRelationshipsGameCenterDetail_1.AppRelationshipsGameCenterDetailToJSON)(value.gameCenterDetail),
        gameCenterAchievement: (0, GameCenterAchievementLocalizationRelationshipsGameCenterAchievement_1.GameCenterAchievementLocalizationRelationshipsGameCenterAchievementToJSON)(value.gameCenterAchievement)
    };
}
