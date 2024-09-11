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
exports.GameCenterAppVersionCreateRequestDataTypeEnum = void 0;
exports.instanceOfGameCenterAppVersionCreateRequestData = instanceOfGameCenterAppVersionCreateRequestData;
exports.GameCenterAppVersionCreateRequestDataFromJSON = GameCenterAppVersionCreateRequestDataFromJSON;
exports.GameCenterAppVersionCreateRequestDataFromJSONTyped = GameCenterAppVersionCreateRequestDataFromJSONTyped;
exports.GameCenterAppVersionCreateRequestDataToJSON = GameCenterAppVersionCreateRequestDataToJSON;
const AlternativeDistributionPackageCreateRequestDataRelationships_1 = require("./AlternativeDistributionPackageCreateRequestDataRelationships");
/**
 * @export
 */
exports.GameCenterAppVersionCreateRequestDataTypeEnum = {
    GameCenterAppVersions: "gameCenterAppVersions"
};
/**
 * Check if a given object implements the GameCenterAppVersionCreateRequestData interface.
 */
function instanceOfGameCenterAppVersionCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function GameCenterAppVersionCreateRequestDataFromJSON(json) {
    return GameCenterAppVersionCreateRequestDataFromJSONTyped(json, false);
}
function GameCenterAppVersionCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        relationships: (0, AlternativeDistributionPackageCreateRequestDataRelationships_1.AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function GameCenterAppVersionCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        relationships: (0, AlternativeDistributionPackageCreateRequestDataRelationships_1.AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
