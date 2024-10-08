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
exports.instanceOfGameCenterLeaderboardSetReleaseCreateRequestDataRelationships = instanceOfGameCenterLeaderboardSetReleaseCreateRequestDataRelationships;
exports.GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSON = GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSON;
exports.GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSONTyped = GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSONTyped;
exports.GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsToJSON = GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsToJSON;
const GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail_1 = require("./GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail");
const GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet_1 = require("./GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet");
/**
 * Check if a given object implements the GameCenterLeaderboardSetReleaseCreateRequestDataRelationships interface.
 */
function instanceOfGameCenterLeaderboardSetReleaseCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "gameCenterDetail" in value;
    isInstance = isInstance && "gameCenterLeaderboardSet" in value;
    return isInstance;
}
function GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSON(json) {
    return GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        gameCenterDetail: (0, GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail_1.GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailFromJSON)(json["gameCenterDetail"]),
        gameCenterLeaderboardSet: (0, GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet_1.GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetFromJSON)(json["gameCenterLeaderboardSet"])
    };
}
function GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        gameCenterDetail: (0, GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail_1.GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetailToJSON)(value.gameCenterDetail),
        gameCenterLeaderboardSet: (0, GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet_1.GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetToJSON)(value.gameCenterLeaderboardSet)
    };
}
