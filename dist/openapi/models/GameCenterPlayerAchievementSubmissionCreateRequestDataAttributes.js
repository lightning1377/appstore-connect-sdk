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
exports.instanceOfGameCenterPlayerAchievementSubmissionCreateRequestDataAttributes = instanceOfGameCenterPlayerAchievementSubmissionCreateRequestDataAttributes;
exports.GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesFromJSON = GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesFromJSON;
exports.GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesFromJSONTyped = GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesFromJSONTyped;
exports.GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesToJSON = GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the GameCenterPlayerAchievementSubmissionCreateRequestDataAttributes interface.
 */
function instanceOfGameCenterPlayerAchievementSubmissionCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "bundleId" in value;
    isInstance = isInstance && "percentageAchieved" in value;
    isInstance = isInstance && "scopedPlayerId" in value;
    isInstance = isInstance && "vendorIdentifier" in value;
    return isInstance;
}
function GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesFromJSON(json) {
    return GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesFromJSONTyped(json, false);
}
function GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        bundleId: json["bundleId"],
        challengeIds: !(0, runtime_1.exists)(json, "challengeIds") ? undefined : json["challengeIds"],
        percentageAchieved: json["percentageAchieved"],
        scopedPlayerId: json["scopedPlayerId"],
        submittedDate: !(0, runtime_1.exists)(json, "submittedDate") ? undefined : new Date(json["submittedDate"]),
        vendorIdentifier: json["vendorIdentifier"]
    };
}
function GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        bundleId: value.bundleId,
        challengeIds: value.challengeIds,
        percentageAchieved: value.percentageAchieved,
        scopedPlayerId: value.scopedPlayerId,
        submittedDate: value.submittedDate === undefined ? undefined : value.submittedDate.toISOString(),
        vendorIdentifier: value.vendorIdentifier
    };
}
