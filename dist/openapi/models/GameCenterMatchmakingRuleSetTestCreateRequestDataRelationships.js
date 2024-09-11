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
exports.instanceOfGameCenterMatchmakingRuleSetTestCreateRequestDataRelationships = instanceOfGameCenterMatchmakingRuleSetTestCreateRequestDataRelationships;
exports.GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSON = GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSON;
exports.GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSONTyped = GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSONTyped;
exports.GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsToJSON = GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsToJSON;
const GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet_1 = require("./GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet");
const GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests_1 = require("./GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests");
/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetTestCreateRequestDataRelationships interface.
 */
function instanceOfGameCenterMatchmakingRuleSetTestCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "matchmakingRuleSet" in value;
    isInstance = isInstance && "matchmakingRequests" in value;
    return isInstance;
}
function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSON(json) {
    return GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        matchmakingRuleSet: (0, GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet_1.GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSON)(json["matchmakingRuleSet"]),
        matchmakingRequests: (0, GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests_1.GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsFromJSON)(json["matchmakingRequests"])
    };
}
function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        matchmakingRuleSet: (0, GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet_1.GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetToJSON)(value.matchmakingRuleSet),
        matchmakingRequests: (0, GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequests_1.GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsToJSON)(value.matchmakingRequests)
    };
}
