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
exports.AppPreviewCreateRequestDataTypeEnum = void 0;
exports.instanceOfAppPreviewCreateRequestData = instanceOfAppPreviewCreateRequestData;
exports.AppPreviewCreateRequestDataFromJSON = AppPreviewCreateRequestDataFromJSON;
exports.AppPreviewCreateRequestDataFromJSONTyped = AppPreviewCreateRequestDataFromJSONTyped;
exports.AppPreviewCreateRequestDataToJSON = AppPreviewCreateRequestDataToJSON;
const AppPreviewCreateRequestDataAttributes_1 = require("./AppPreviewCreateRequestDataAttributes");
const AppPreviewCreateRequestDataRelationships_1 = require("./AppPreviewCreateRequestDataRelationships");
/**
 * @export
 */
exports.AppPreviewCreateRequestDataTypeEnum = {
    AppPreviews: "appPreviews"
};
/**
 * Check if a given object implements the AppPreviewCreateRequestData interface.
 */
function instanceOfAppPreviewCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function AppPreviewCreateRequestDataFromJSON(json) {
    return AppPreviewCreateRequestDataFromJSONTyped(json, false);
}
function AppPreviewCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AppPreviewCreateRequestDataAttributes_1.AppPreviewCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, AppPreviewCreateRequestDataRelationships_1.AppPreviewCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function AppPreviewCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, AppPreviewCreateRequestDataAttributes_1.AppPreviewCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AppPreviewCreateRequestDataRelationships_1.AppPreviewCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
