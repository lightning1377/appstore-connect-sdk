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
exports.instanceOfGameCenterLeaderboardSetMemberLocalizationAttributes = instanceOfGameCenterLeaderboardSetMemberLocalizationAttributes;
exports.GameCenterLeaderboardSetMemberLocalizationAttributesFromJSON = GameCenterLeaderboardSetMemberLocalizationAttributesFromJSON;
exports.GameCenterLeaderboardSetMemberLocalizationAttributesFromJSONTyped = GameCenterLeaderboardSetMemberLocalizationAttributesFromJSONTyped;
exports.GameCenterLeaderboardSetMemberLocalizationAttributesToJSON = GameCenterLeaderboardSetMemberLocalizationAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationAttributes interface.
 */
function instanceOfGameCenterLeaderboardSetMemberLocalizationAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterLeaderboardSetMemberLocalizationAttributesFromJSON(json) {
    return GameCenterLeaderboardSetMemberLocalizationAttributesFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetMemberLocalizationAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, "name") ? undefined : json["name"],
        locale: !(0, runtime_1.exists)(json, "locale") ? undefined : json["locale"]
    };
}
function GameCenterLeaderboardSetMemberLocalizationAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        locale: value.locale
    };
}
