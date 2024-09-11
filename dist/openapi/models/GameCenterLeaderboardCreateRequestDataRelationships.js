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
exports.instanceOfGameCenterLeaderboardCreateRequestDataRelationships = instanceOfGameCenterLeaderboardCreateRequestDataRelationships;
exports.GameCenterLeaderboardCreateRequestDataRelationshipsFromJSON = GameCenterLeaderboardCreateRequestDataRelationshipsFromJSON;
exports.GameCenterLeaderboardCreateRequestDataRelationshipsFromJSONTyped = GameCenterLeaderboardCreateRequestDataRelationshipsFromJSONTyped;
exports.GameCenterLeaderboardCreateRequestDataRelationshipsToJSON = GameCenterLeaderboardCreateRequestDataRelationshipsToJSON;
const runtime_1 = require("../runtime");
const GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail_1 = require("./GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail");
const GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup_1 = require("./GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup");
const GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets_1 = require("./GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets");
/**
 * Check if a given object implements the GameCenterLeaderboardCreateRequestDataRelationships interface.
 */
function instanceOfGameCenterLeaderboardCreateRequestDataRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterLeaderboardCreateRequestDataRelationshipsFromJSON(json) {
    return GameCenterLeaderboardCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function GameCenterLeaderboardCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        gameCenterDetail: !(0, runtime_1.exists)(json, "gameCenterDetail") ? undefined : (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetailFromJSON)(json["gameCenterDetail"]),
        gameCenterGroup: !(0, runtime_1.exists)(json, "gameCenterGroup") ? undefined : (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupFromJSON)(json["gameCenterGroup"]),
        gameCenterLeaderboardSets: !(0, runtime_1.exists)(json, "gameCenterLeaderboardSets") ? undefined : (0, GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets_1.GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSetsFromJSON)(json["gameCenterLeaderboardSets"])
    };
}
function GameCenterLeaderboardCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        gameCenterDetail: (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetailToJSON)(value.gameCenterDetail),
        gameCenterGroup: (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupToJSON)(value.gameCenterGroup),
        gameCenterLeaderboardSets: (0, GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSets_1.GameCenterLeaderboardCreateRequestDataRelationshipsGameCenterLeaderboardSetsToJSON)(value.gameCenterLeaderboardSets)
    };
}
