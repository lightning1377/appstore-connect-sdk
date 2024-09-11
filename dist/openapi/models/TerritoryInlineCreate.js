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
exports.TerritoryInlineCreateTypeEnum = void 0;
exports.instanceOfTerritoryInlineCreate = instanceOfTerritoryInlineCreate;
exports.TerritoryInlineCreateFromJSON = TerritoryInlineCreateFromJSON;
exports.TerritoryInlineCreateFromJSONTyped = TerritoryInlineCreateFromJSONTyped;
exports.TerritoryInlineCreateToJSON = TerritoryInlineCreateToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.TerritoryInlineCreateTypeEnum = {
    Territories: "territories"
};
/**
 * Check if a given object implements the TerritoryInlineCreate interface.
 */
function instanceOfTerritoryInlineCreate(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
function TerritoryInlineCreateFromJSON(json) {
    return TerritoryInlineCreateFromJSONTyped(json, false);
}
function TerritoryInlineCreateFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: !(0, runtime_1.exists)(json, "id") ? undefined : json["id"]
    };
}
function TerritoryInlineCreateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id
    };
}
