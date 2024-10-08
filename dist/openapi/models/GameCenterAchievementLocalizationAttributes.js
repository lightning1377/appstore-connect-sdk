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
exports.instanceOfGameCenterAchievementLocalizationAttributes = instanceOfGameCenterAchievementLocalizationAttributes;
exports.GameCenterAchievementLocalizationAttributesFromJSON = GameCenterAchievementLocalizationAttributesFromJSON;
exports.GameCenterAchievementLocalizationAttributesFromJSONTyped = GameCenterAchievementLocalizationAttributesFromJSONTyped;
exports.GameCenterAchievementLocalizationAttributesToJSON = GameCenterAchievementLocalizationAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the GameCenterAchievementLocalizationAttributes interface.
 */
function instanceOfGameCenterAchievementLocalizationAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterAchievementLocalizationAttributesFromJSON(json) {
    return GameCenterAchievementLocalizationAttributesFromJSONTyped(json, false);
}
function GameCenterAchievementLocalizationAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        locale: !(0, runtime_1.exists)(json, "locale") ? undefined : json["locale"],
        name: !(0, runtime_1.exists)(json, "name") ? undefined : json["name"],
        beforeEarnedDescription: !(0, runtime_1.exists)(json, "beforeEarnedDescription") ? undefined : json["beforeEarnedDescription"],
        afterEarnedDescription: !(0, runtime_1.exists)(json, "afterEarnedDescription") ? undefined : json["afterEarnedDescription"]
    };
}
function GameCenterAchievementLocalizationAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        locale: value.locale,
        name: value.name,
        beforeEarnedDescription: value.beforeEarnedDescription,
        afterEarnedDescription: value.afterEarnedDescription
    };
}
