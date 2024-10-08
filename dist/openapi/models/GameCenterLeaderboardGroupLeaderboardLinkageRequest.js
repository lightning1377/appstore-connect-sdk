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
exports.instanceOfGameCenterLeaderboardGroupLeaderboardLinkageRequest = instanceOfGameCenterLeaderboardGroupLeaderboardLinkageRequest;
exports.GameCenterLeaderboardGroupLeaderboardLinkageRequestFromJSON = GameCenterLeaderboardGroupLeaderboardLinkageRequestFromJSON;
exports.GameCenterLeaderboardGroupLeaderboardLinkageRequestFromJSONTyped = GameCenterLeaderboardGroupLeaderboardLinkageRequestFromJSONTyped;
exports.GameCenterLeaderboardGroupLeaderboardLinkageRequestToJSON = GameCenterLeaderboardGroupLeaderboardLinkageRequestToJSON;
const GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1 = require("./GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner");
/**
 * Check if a given object implements the GameCenterLeaderboardGroupLeaderboardLinkageRequest interface.
 */
function instanceOfGameCenterLeaderboardGroupLeaderboardLinkageRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function GameCenterLeaderboardGroupLeaderboardLinkageRequestFromJSON(json) {
    return GameCenterLeaderboardGroupLeaderboardLinkageRequestFromJSONTyped(json, false);
}
function GameCenterLeaderboardGroupLeaderboardLinkageRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON)(json["data"])
    };
}
function GameCenterLeaderboardGroupLeaderboardLinkageRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON)(value.data)
    };
}
