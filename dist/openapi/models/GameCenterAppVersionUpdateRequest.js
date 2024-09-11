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
exports.instanceOfGameCenterAppVersionUpdateRequest = instanceOfGameCenterAppVersionUpdateRequest;
exports.GameCenterAppVersionUpdateRequestFromJSON = GameCenterAppVersionUpdateRequestFromJSON;
exports.GameCenterAppVersionUpdateRequestFromJSONTyped = GameCenterAppVersionUpdateRequestFromJSONTyped;
exports.GameCenterAppVersionUpdateRequestToJSON = GameCenterAppVersionUpdateRequestToJSON;
const GameCenterAppVersionUpdateRequestData_1 = require("./GameCenterAppVersionUpdateRequestData");
/**
 * Check if a given object implements the GameCenterAppVersionUpdateRequest interface.
 */
function instanceOfGameCenterAppVersionUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function GameCenterAppVersionUpdateRequestFromJSON(json) {
    return GameCenterAppVersionUpdateRequestFromJSONTyped(json, false);
}
function GameCenterAppVersionUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterAppVersionUpdateRequestData_1.GameCenterAppVersionUpdateRequestDataFromJSON)(json["data"])
    };
}
function GameCenterAppVersionUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterAppVersionUpdateRequestData_1.GameCenterAppVersionUpdateRequestDataToJSON)(value.data)
    };
}
