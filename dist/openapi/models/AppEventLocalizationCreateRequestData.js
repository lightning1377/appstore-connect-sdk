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
exports.AppEventLocalizationCreateRequestDataTypeEnum = void 0;
exports.instanceOfAppEventLocalizationCreateRequestData = instanceOfAppEventLocalizationCreateRequestData;
exports.AppEventLocalizationCreateRequestDataFromJSON = AppEventLocalizationCreateRequestDataFromJSON;
exports.AppEventLocalizationCreateRequestDataFromJSONTyped = AppEventLocalizationCreateRequestDataFromJSONTyped;
exports.AppEventLocalizationCreateRequestDataToJSON = AppEventLocalizationCreateRequestDataToJSON;
const AppEventLocalizationCreateRequestDataAttributes_1 = require("./AppEventLocalizationCreateRequestDataAttributes");
const AppEventLocalizationCreateRequestDataRelationships_1 = require("./AppEventLocalizationCreateRequestDataRelationships");
/**
 * @export
 */
exports.AppEventLocalizationCreateRequestDataTypeEnum = {
    AppEventLocalizations: "appEventLocalizations"
};
/**
 * Check if a given object implements the AppEventLocalizationCreateRequestData interface.
 */
function instanceOfAppEventLocalizationCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function AppEventLocalizationCreateRequestDataFromJSON(json) {
    return AppEventLocalizationCreateRequestDataFromJSONTyped(json, false);
}
function AppEventLocalizationCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AppEventLocalizationCreateRequestDataAttributes_1.AppEventLocalizationCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, AppEventLocalizationCreateRequestDataRelationships_1.AppEventLocalizationCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function AppEventLocalizationCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, AppEventLocalizationCreateRequestDataAttributes_1.AppEventLocalizationCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AppEventLocalizationCreateRequestDataRelationships_1.AppEventLocalizationCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
