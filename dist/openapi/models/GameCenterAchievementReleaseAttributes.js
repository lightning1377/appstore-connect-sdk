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
exports.instanceOfGameCenterAchievementReleaseAttributes = instanceOfGameCenterAchievementReleaseAttributes;
exports.GameCenterAchievementReleaseAttributesFromJSON = GameCenterAchievementReleaseAttributesFromJSON;
exports.GameCenterAchievementReleaseAttributesFromJSONTyped = GameCenterAchievementReleaseAttributesFromJSONTyped;
exports.GameCenterAchievementReleaseAttributesToJSON = GameCenterAchievementReleaseAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the GameCenterAchievementReleaseAttributes interface.
 */
function instanceOfGameCenterAchievementReleaseAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterAchievementReleaseAttributesFromJSON(json) {
    return GameCenterAchievementReleaseAttributesFromJSONTyped(json, false);
}
function GameCenterAchievementReleaseAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        live: !(0, runtime_1.exists)(json, "live") ? undefined : json["live"]
    };
}
function GameCenterAchievementReleaseAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        live: value.live
    };
}
