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
exports.AppClipAdvancedExperienceCreateRequestDataTypeEnum = void 0;
exports.instanceOfAppClipAdvancedExperienceCreateRequestData = instanceOfAppClipAdvancedExperienceCreateRequestData;
exports.AppClipAdvancedExperienceCreateRequestDataFromJSON = AppClipAdvancedExperienceCreateRequestDataFromJSON;
exports.AppClipAdvancedExperienceCreateRequestDataFromJSONTyped = AppClipAdvancedExperienceCreateRequestDataFromJSONTyped;
exports.AppClipAdvancedExperienceCreateRequestDataToJSON = AppClipAdvancedExperienceCreateRequestDataToJSON;
const AppClipAdvancedExperienceCreateRequestDataAttributes_1 = require("./AppClipAdvancedExperienceCreateRequestDataAttributes");
const AppClipAdvancedExperienceCreateRequestDataRelationships_1 = require("./AppClipAdvancedExperienceCreateRequestDataRelationships");
/**
 * @export
 */
exports.AppClipAdvancedExperienceCreateRequestDataTypeEnum = {
    AppClipAdvancedExperiences: "appClipAdvancedExperiences"
};
/**
 * Check if a given object implements the AppClipAdvancedExperienceCreateRequestData interface.
 */
function instanceOfAppClipAdvancedExperienceCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function AppClipAdvancedExperienceCreateRequestDataFromJSON(json) {
    return AppClipAdvancedExperienceCreateRequestDataFromJSONTyped(json, false);
}
function AppClipAdvancedExperienceCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AppClipAdvancedExperienceCreateRequestDataAttributes_1.AppClipAdvancedExperienceCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, AppClipAdvancedExperienceCreateRequestDataRelationships_1.AppClipAdvancedExperienceCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function AppClipAdvancedExperienceCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, AppClipAdvancedExperienceCreateRequestDataAttributes_1.AppClipAdvancedExperienceCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AppClipAdvancedExperienceCreateRequestDataRelationships_1.AppClipAdvancedExperienceCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
