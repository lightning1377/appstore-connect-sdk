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
exports.instanceOfGameCenterMatchmakingTestRequestInlineCreateRelationships = instanceOfGameCenterMatchmakingTestRequestInlineCreateRelationships;
exports.GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSON = GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSON;
exports.GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSONTyped = GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSONTyped;
exports.GameCenterMatchmakingTestRequestInlineCreateRelationshipsToJSON = GameCenterMatchmakingTestRequestInlineCreateRelationshipsToJSON;
const runtime_1 = require("../runtime");
const GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties_1 = require("./GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties");
/**
 * Check if a given object implements the GameCenterMatchmakingTestRequestInlineCreateRelationships interface.
 */
function instanceOfGameCenterMatchmakingTestRequestInlineCreateRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSON(json) {
    return GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSONTyped(json, false);
}
function GameCenterMatchmakingTestRequestInlineCreateRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        matchmakingPlayerProperties: !(0, runtime_1.exists)(json, "matchmakingPlayerProperties") ? undefined : (0, GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties_1.GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesFromJSON)(json["matchmakingPlayerProperties"])
    };
}
function GameCenterMatchmakingTestRequestInlineCreateRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        matchmakingPlayerProperties: (0, GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerProperties_1.GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesToJSON)(value.matchmakingPlayerProperties)
    };
}
