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
exports.instanceOfGameCenterMatchmakingRuleCreateRequestDataRelationships = instanceOfGameCenterMatchmakingRuleCreateRequestDataRelationships;
exports.GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSON = GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSON;
exports.GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSONTyped = GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSONTyped;
exports.GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSON = GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSON;
const GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet_1 = require("./GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet");
/**
 * Check if a given object implements the GameCenterMatchmakingRuleCreateRequestDataRelationships interface.
 */
function instanceOfGameCenterMatchmakingRuleCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "ruleSet" in value;
    return isInstance;
}
function GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSON(json) {
    return GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        ruleSet: (0, GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet_1.GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetFromJSON)(json["ruleSet"])
    };
}
function GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ruleSet: (0, GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSet_1.GameCenterMatchmakingQueueCreateRequestDataRelationshipsRuleSetToJSON)(value.ruleSet)
    };
}
