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
exports.instanceOfGameCenterDetailCreateRequest = instanceOfGameCenterDetailCreateRequest;
exports.GameCenterDetailCreateRequestFromJSON = GameCenterDetailCreateRequestFromJSON;
exports.GameCenterDetailCreateRequestFromJSONTyped = GameCenterDetailCreateRequestFromJSONTyped;
exports.GameCenterDetailCreateRequestToJSON = GameCenterDetailCreateRequestToJSON;
const GameCenterDetailCreateRequestData_1 = require("./GameCenterDetailCreateRequestData");
/**
 * Check if a given object implements the GameCenterDetailCreateRequest interface.
 */
function instanceOfGameCenterDetailCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function GameCenterDetailCreateRequestFromJSON(json) {
    return GameCenterDetailCreateRequestFromJSONTyped(json, false);
}
function GameCenterDetailCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterDetailCreateRequestData_1.GameCenterDetailCreateRequestDataFromJSON)(json["data"])
    };
}
function GameCenterDetailCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterDetailCreateRequestData_1.GameCenterDetailCreateRequestDataToJSON)(value.data)
    };
}
