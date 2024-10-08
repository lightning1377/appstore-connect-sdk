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
exports.GameCenterMatchmakingRuleUpdateRequestDataTypeEnum = void 0;
exports.instanceOfGameCenterMatchmakingRuleUpdateRequestData = instanceOfGameCenterMatchmakingRuleUpdateRequestData;
exports.GameCenterMatchmakingRuleUpdateRequestDataFromJSON = GameCenterMatchmakingRuleUpdateRequestDataFromJSON;
exports.GameCenterMatchmakingRuleUpdateRequestDataFromJSONTyped = GameCenterMatchmakingRuleUpdateRequestDataFromJSONTyped;
exports.GameCenterMatchmakingRuleUpdateRequestDataToJSON = GameCenterMatchmakingRuleUpdateRequestDataToJSON;
const runtime_1 = require("../runtime");
const GameCenterMatchmakingRuleUpdateRequestDataAttributes_1 = require("./GameCenterMatchmakingRuleUpdateRequestDataAttributes");
/**
 * @export
 */
exports.GameCenterMatchmakingRuleUpdateRequestDataTypeEnum = {
    GameCenterMatchmakingRules: "gameCenterMatchmakingRules"
};
/**
 * Check if a given object implements the GameCenterMatchmakingRuleUpdateRequestData interface.
 */
function instanceOfGameCenterMatchmakingRuleUpdateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function GameCenterMatchmakingRuleUpdateRequestDataFromJSON(json) {
    return GameCenterMatchmakingRuleUpdateRequestDataFromJSONTyped(json, false);
}
function GameCenterMatchmakingRuleUpdateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, GameCenterMatchmakingRuleUpdateRequestDataAttributes_1.GameCenterMatchmakingRuleUpdateRequestDataAttributesFromJSON)(json["attributes"])
    };
}
function GameCenterMatchmakingRuleUpdateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, GameCenterMatchmakingRuleUpdateRequestDataAttributes_1.GameCenterMatchmakingRuleUpdateRequestDataAttributesToJSON)(value.attributes)
    };
}
