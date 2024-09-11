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
exports.AppEventVideoClipCreateRequestDataTypeEnum = void 0;
exports.instanceOfAppEventVideoClipCreateRequestData = instanceOfAppEventVideoClipCreateRequestData;
exports.AppEventVideoClipCreateRequestDataFromJSON = AppEventVideoClipCreateRequestDataFromJSON;
exports.AppEventVideoClipCreateRequestDataFromJSONTyped = AppEventVideoClipCreateRequestDataFromJSONTyped;
exports.AppEventVideoClipCreateRequestDataToJSON = AppEventVideoClipCreateRequestDataToJSON;
const AppEventScreenshotCreateRequestDataRelationships_1 = require("./AppEventScreenshotCreateRequestDataRelationships");
const AppEventVideoClipCreateRequestDataAttributes_1 = require("./AppEventVideoClipCreateRequestDataAttributes");
/**
 * @export
 */
exports.AppEventVideoClipCreateRequestDataTypeEnum = {
    AppEventVideoClips: "appEventVideoClips"
};
/**
 * Check if a given object implements the AppEventVideoClipCreateRequestData interface.
 */
function instanceOfAppEventVideoClipCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function AppEventVideoClipCreateRequestDataFromJSON(json) {
    return AppEventVideoClipCreateRequestDataFromJSONTyped(json, false);
}
function AppEventVideoClipCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AppEventVideoClipCreateRequestDataAttributes_1.AppEventVideoClipCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, AppEventScreenshotCreateRequestDataRelationships_1.AppEventScreenshotCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function AppEventVideoClipCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, AppEventVideoClipCreateRequestDataAttributes_1.AppEventVideoClipCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AppEventScreenshotCreateRequestDataRelationships_1.AppEventScreenshotCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
