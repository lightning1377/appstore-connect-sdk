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
exports.instanceOfGameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes = instanceOfGameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes;
exports.GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSON = GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSON;
exports.GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSONTyped = GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSONTyped;
exports.GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesToJSON = GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
const Decimal_1 = require("./Decimal");
/**
 * Check if a given object implements the GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes interface.
 */
function instanceOfGameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "bundleId" in value;
    isInstance = isInstance && "scopedPlayerId" in value;
    isInstance = isInstance && "score" in value;
    isInstance = isInstance && "vendorIdentifier" in value;
    return isInstance;
}
function GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSON(json) {
    return GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSONTyped(json, false);
}
function GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        bundleId: json["bundleId"],
        challengeIds: !(0, runtime_1.exists)(json, "challengeIds") ? undefined : json["challengeIds"],
        context: !(0, runtime_1.exists)(json, "context") ? undefined : (0, Decimal_1.DecimalFromJSON)(json["context"]),
        scopedPlayerId: json["scopedPlayerId"],
        score: (0, Decimal_1.DecimalFromJSON)(json["score"]),
        submittedDate: !(0, runtime_1.exists)(json, "submittedDate") ? undefined : new Date(json["submittedDate"]),
        vendorIdentifier: json["vendorIdentifier"]
    };
}
function GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        bundleId: value.bundleId,
        challengeIds: value.challengeIds,
        context: (0, Decimal_1.DecimalToJSON)(value.context),
        scopedPlayerId: value.scopedPlayerId,
        score: (0, Decimal_1.DecimalToJSON)(value.score),
        submittedDate: value.submittedDate === undefined ? undefined : value.submittedDate.toISOString(),
        vendorIdentifier: value.vendorIdentifier
    };
}
