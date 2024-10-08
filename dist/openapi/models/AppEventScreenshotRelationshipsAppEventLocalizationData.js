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
exports.AppEventScreenshotRelationshipsAppEventLocalizationDataTypeEnum = void 0;
exports.instanceOfAppEventScreenshotRelationshipsAppEventLocalizationData = instanceOfAppEventScreenshotRelationshipsAppEventLocalizationData;
exports.AppEventScreenshotRelationshipsAppEventLocalizationDataFromJSON = AppEventScreenshotRelationshipsAppEventLocalizationDataFromJSON;
exports.AppEventScreenshotRelationshipsAppEventLocalizationDataFromJSONTyped = AppEventScreenshotRelationshipsAppEventLocalizationDataFromJSONTyped;
exports.AppEventScreenshotRelationshipsAppEventLocalizationDataToJSON = AppEventScreenshotRelationshipsAppEventLocalizationDataToJSON;
/**
 * @export
 */
exports.AppEventScreenshotRelationshipsAppEventLocalizationDataTypeEnum = {
    AppEventLocalizations: "appEventLocalizations"
};
/**
 * Check if a given object implements the AppEventScreenshotRelationshipsAppEventLocalizationData interface.
 */
function instanceOfAppEventScreenshotRelationshipsAppEventLocalizationData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppEventScreenshotRelationshipsAppEventLocalizationDataFromJSON(json) {
    return AppEventScreenshotRelationshipsAppEventLocalizationDataFromJSONTyped(json, false);
}
function AppEventScreenshotRelationshipsAppEventLocalizationDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}
function AppEventScreenshotRelationshipsAppEventLocalizationDataToJSON(value) {
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
