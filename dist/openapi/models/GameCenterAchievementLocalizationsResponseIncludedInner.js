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
exports.GameCenterAchievementLocalizationsResponseIncludedInnerFromJSON = GameCenterAchievementLocalizationsResponseIncludedInnerFromJSON;
exports.GameCenterAchievementLocalizationsResponseIncludedInnerFromJSONTyped = GameCenterAchievementLocalizationsResponseIncludedInnerFromJSONTyped;
exports.GameCenterAchievementLocalizationsResponseIncludedInnerToJSON = GameCenterAchievementLocalizationsResponseIncludedInnerToJSON;
const GameCenterAchievement_1 = require("./GameCenterAchievement");
const GameCenterAchievementImage_1 = require("./GameCenterAchievementImage");
function GameCenterAchievementLocalizationsResponseIncludedInnerFromJSON(json) {
    return GameCenterAchievementLocalizationsResponseIncludedInnerFromJSONTyped(json, false);
}
function GameCenterAchievementLocalizationsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, GameCenterAchievement_1.GameCenterAchievementFromJSONTyped)(json, true)), (0, GameCenterAchievementImage_1.GameCenterAchievementImageFromJSONTyped)(json, true));
}
function GameCenterAchievementLocalizationsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, GameCenterAchievement_1.instanceOfGameCenterAchievement)(value)) {
        return (0, GameCenterAchievement_1.GameCenterAchievementToJSON)(value);
    }
    if ((0, GameCenterAchievementImage_1.instanceOfGameCenterAchievementImage)(value)) {
        return (0, GameCenterAchievementImage_1.GameCenterAchievementImageToJSON)(value);
    }
    return {};
}
