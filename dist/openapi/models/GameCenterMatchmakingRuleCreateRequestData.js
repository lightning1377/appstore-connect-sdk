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
exports.GameCenterMatchmakingRuleCreateRequestDataTypeEnum = void 0;
exports.instanceOfGameCenterMatchmakingRuleCreateRequestData = instanceOfGameCenterMatchmakingRuleCreateRequestData;
exports.GameCenterMatchmakingRuleCreateRequestDataFromJSON = GameCenterMatchmakingRuleCreateRequestDataFromJSON;
exports.GameCenterMatchmakingRuleCreateRequestDataFromJSONTyped = GameCenterMatchmakingRuleCreateRequestDataFromJSONTyped;
exports.GameCenterMatchmakingRuleCreateRequestDataToJSON = GameCenterMatchmakingRuleCreateRequestDataToJSON;
const GameCenterMatchmakingRuleCreateRequestDataAttributes_1 = require("./GameCenterMatchmakingRuleCreateRequestDataAttributes");
const GameCenterMatchmakingRuleCreateRequestDataRelationships_1 = require("./GameCenterMatchmakingRuleCreateRequestDataRelationships");
/**
 * @export
 */
exports.GameCenterMatchmakingRuleCreateRequestDataTypeEnum = {
    GameCenterMatchmakingRules: "gameCenterMatchmakingRules"
};
/**
 * Check if a given object implements the GameCenterMatchmakingRuleCreateRequestData interface.
 */
function instanceOfGameCenterMatchmakingRuleCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function GameCenterMatchmakingRuleCreateRequestDataFromJSON(json) {
    return GameCenterMatchmakingRuleCreateRequestDataFromJSONTyped(json, false);
}
function GameCenterMatchmakingRuleCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, GameCenterMatchmakingRuleCreateRequestDataAttributes_1.GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, GameCenterMatchmakingRuleCreateRequestDataRelationships_1.GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function GameCenterMatchmakingRuleCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, GameCenterMatchmakingRuleCreateRequestDataAttributes_1.GameCenterMatchmakingRuleCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, GameCenterMatchmakingRuleCreateRequestDataRelationships_1.GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
