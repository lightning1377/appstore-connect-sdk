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
exports.TerritoryAvailabilityInlineCreateTypeEnum = void 0;
exports.instanceOfTerritoryAvailabilityInlineCreate = instanceOfTerritoryAvailabilityInlineCreate;
exports.TerritoryAvailabilityInlineCreateFromJSON = TerritoryAvailabilityInlineCreateFromJSON;
exports.TerritoryAvailabilityInlineCreateFromJSONTyped = TerritoryAvailabilityInlineCreateFromJSONTyped;
exports.TerritoryAvailabilityInlineCreateToJSON = TerritoryAvailabilityInlineCreateToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.TerritoryAvailabilityInlineCreateTypeEnum = {
    TerritoryAvailabilities: "territoryAvailabilities"
};
/**
 * Check if a given object implements the TerritoryAvailabilityInlineCreate interface.
 */
function instanceOfTerritoryAvailabilityInlineCreate(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
function TerritoryAvailabilityInlineCreateFromJSON(json) {
    return TerritoryAvailabilityInlineCreateFromJSONTyped(json, false);
}
function TerritoryAvailabilityInlineCreateFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: !(0, runtime_1.exists)(json, "id") ? undefined : json["id"]
    };
}
function TerritoryAvailabilityInlineCreateToJSON(value) {
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
