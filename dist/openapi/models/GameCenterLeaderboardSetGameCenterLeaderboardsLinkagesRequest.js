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
exports.instanceOfGameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest = instanceOfGameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest;
exports.GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestFromJSON = GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestFromJSON;
exports.GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestFromJSONTyped = GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestFromJSONTyped;
exports.GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestToJSON = GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestToJSON;
const GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1 = require("./GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner");
/**
 * Check if a given object implements the GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest interface.
 */
function instanceOfGameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestFromJSON(json) {
    return GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON)
    };
}
function GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON)
    };
}
