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
exports.instanceOfGameCenterLeaderboardSetCreateRequestDataRelationships = instanceOfGameCenterLeaderboardSetCreateRequestDataRelationships;
exports.GameCenterLeaderboardSetCreateRequestDataRelationshipsFromJSON = GameCenterLeaderboardSetCreateRequestDataRelationshipsFromJSON;
exports.GameCenterLeaderboardSetCreateRequestDataRelationshipsFromJSONTyped = GameCenterLeaderboardSetCreateRequestDataRelationshipsFromJSONTyped;
exports.GameCenterLeaderboardSetCreateRequestDataRelationshipsToJSON = GameCenterLeaderboardSetCreateRequestDataRelationshipsToJSON;
const runtime_1 = require("../runtime");
const GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail_1 = require("./GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail");
const GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup_1 = require("./GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup");
const GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards_1 = require("./GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards");
/**
 * Check if a given object implements the GameCenterLeaderboardSetCreateRequestDataRelationships interface.
 */
function instanceOfGameCenterLeaderboardSetCreateRequestDataRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterLeaderboardSetCreateRequestDataRelationshipsFromJSON(json) {
    return GameCenterLeaderboardSetCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        gameCenterDetail: !(0, runtime_1.exists)(json, "gameCenterDetail") ? undefined : (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetailFromJSON)(json["gameCenterDetail"]),
        gameCenterGroup: !(0, runtime_1.exists)(json, "gameCenterGroup") ? undefined : (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupFromJSON)(json["gameCenterGroup"]),
        gameCenterLeaderboards: !(0, runtime_1.exists)(json, "gameCenterLeaderboards") ? undefined : (0, GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards_1.GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsFromJSON)(json["gameCenterLeaderboards"])
    };
}
function GameCenterLeaderboardSetCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        gameCenterDetail: (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetailToJSON)(value.gameCenterDetail),
        gameCenterGroup: (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupToJSON)(value.gameCenterGroup),
        gameCenterLeaderboards: (0, GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboards_1.GameCenterLeaderboardSetCreateRequestDataRelationshipsGameCenterLeaderboardsToJSON)(value.gameCenterLeaderboards)
    };
}
