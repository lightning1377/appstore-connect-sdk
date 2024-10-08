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
exports.GameCenterEnabledVersionsResponseIncludedInnerFromJSON = GameCenterEnabledVersionsResponseIncludedInnerFromJSON;
exports.GameCenterEnabledVersionsResponseIncludedInnerFromJSONTyped = GameCenterEnabledVersionsResponseIncludedInnerFromJSONTyped;
exports.GameCenterEnabledVersionsResponseIncludedInnerToJSON = GameCenterEnabledVersionsResponseIncludedInnerToJSON;
const App_1 = require("./App");
const GameCenterEnabledVersion_1 = require("./GameCenterEnabledVersion");
function GameCenterEnabledVersionsResponseIncludedInnerFromJSON(json) {
    return GameCenterEnabledVersionsResponseIncludedInnerFromJSONTyped(json, false);
}
function GameCenterEnabledVersionsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, App_1.AppFromJSONTyped)(json, true)), (0, GameCenterEnabledVersion_1.GameCenterEnabledVersionFromJSONTyped)(json, true));
}
function GameCenterEnabledVersionsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, App_1.instanceOfApp)(value)) {
        return (0, App_1.AppToJSON)(value);
    }
    if ((0, GameCenterEnabledVersion_1.instanceOfGameCenterEnabledVersion)(value)) {
        return (0, GameCenterEnabledVersion_1.GameCenterEnabledVersionToJSON)(value);
    }
    return {};
}
