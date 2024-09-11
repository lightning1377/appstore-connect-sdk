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
exports.instanceOfGameCenterMatchmakingQueueRelationships = instanceOfGameCenterMatchmakingQueueRelationships;
exports.GameCenterMatchmakingQueueRelationshipsFromJSON = GameCenterMatchmakingQueueRelationshipsFromJSON;
exports.GameCenterMatchmakingQueueRelationshipsFromJSONTyped = GameCenterMatchmakingQueueRelationshipsFromJSONTyped;
exports.GameCenterMatchmakingQueueRelationshipsToJSON = GameCenterMatchmakingQueueRelationshipsToJSON;
const runtime_1 = require("../runtime");
const GameCenterMatchmakingQueueRelationshipsRuleSet_1 = require("./GameCenterMatchmakingQueueRelationshipsRuleSet");
/**
 * Check if a given object implements the GameCenterMatchmakingQueueRelationships interface.
 */
function instanceOfGameCenterMatchmakingQueueRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterMatchmakingQueueRelationshipsFromJSON(json) {
    return GameCenterMatchmakingQueueRelationshipsFromJSONTyped(json, false);
}
function GameCenterMatchmakingQueueRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        ruleSet: !(0, runtime_1.exists)(json, "ruleSet") ? undefined : (0, GameCenterMatchmakingQueueRelationshipsRuleSet_1.GameCenterMatchmakingQueueRelationshipsRuleSetFromJSON)(json["ruleSet"]),
        experimentRuleSet: !(0, runtime_1.exists)(json, "experimentRuleSet") ? undefined : (0, GameCenterMatchmakingQueueRelationshipsRuleSet_1.GameCenterMatchmakingQueueRelationshipsRuleSetFromJSON)(json["experimentRuleSet"])
    };
}
function GameCenterMatchmakingQueueRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ruleSet: (0, GameCenterMatchmakingQueueRelationshipsRuleSet_1.GameCenterMatchmakingQueueRelationshipsRuleSetToJSON)(value.ruleSet),
        experimentRuleSet: (0, GameCenterMatchmakingQueueRelationshipsRuleSet_1.GameCenterMatchmakingQueueRelationshipsRuleSetToJSON)(value.experimentRuleSet)
    };
}
