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
exports.AppStoreVersionLocalizationCreateRequestDataTypeEnum = void 0;
exports.instanceOfAppStoreVersionLocalizationCreateRequestData = instanceOfAppStoreVersionLocalizationCreateRequestData;
exports.AppStoreVersionLocalizationCreateRequestDataFromJSON = AppStoreVersionLocalizationCreateRequestDataFromJSON;
exports.AppStoreVersionLocalizationCreateRequestDataFromJSONTyped = AppStoreVersionLocalizationCreateRequestDataFromJSONTyped;
exports.AppStoreVersionLocalizationCreateRequestDataToJSON = AppStoreVersionLocalizationCreateRequestDataToJSON;
const AlternativeDistributionPackageCreateRequestDataRelationships_1 = require("./AlternativeDistributionPackageCreateRequestDataRelationships");
const AppStoreVersionLocalizationCreateRequestDataAttributes_1 = require("./AppStoreVersionLocalizationCreateRequestDataAttributes");
/**
 * @export
 */
exports.AppStoreVersionLocalizationCreateRequestDataTypeEnum = {
    AppStoreVersionLocalizations: "appStoreVersionLocalizations"
};
/**
 * Check if a given object implements the AppStoreVersionLocalizationCreateRequestData interface.
 */
function instanceOfAppStoreVersionLocalizationCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function AppStoreVersionLocalizationCreateRequestDataFromJSON(json) {
    return AppStoreVersionLocalizationCreateRequestDataFromJSONTyped(json, false);
}
function AppStoreVersionLocalizationCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AppStoreVersionLocalizationCreateRequestDataAttributes_1.AppStoreVersionLocalizationCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, AlternativeDistributionPackageCreateRequestDataRelationships_1.AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function AppStoreVersionLocalizationCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, AppStoreVersionLocalizationCreateRequestDataAttributes_1.AppStoreVersionLocalizationCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AlternativeDistributionPackageCreateRequestDataRelationships_1.AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
