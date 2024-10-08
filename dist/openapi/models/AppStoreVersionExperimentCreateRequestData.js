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
exports.AppStoreVersionExperimentCreateRequestDataTypeEnum = void 0;
exports.instanceOfAppStoreVersionExperimentCreateRequestData = instanceOfAppStoreVersionExperimentCreateRequestData;
exports.AppStoreVersionExperimentCreateRequestDataFromJSON = AppStoreVersionExperimentCreateRequestDataFromJSON;
exports.AppStoreVersionExperimentCreateRequestDataFromJSONTyped = AppStoreVersionExperimentCreateRequestDataFromJSONTyped;
exports.AppStoreVersionExperimentCreateRequestDataToJSON = AppStoreVersionExperimentCreateRequestDataToJSON;
const AlternativeDistributionPackageCreateRequestDataRelationships_1 = require("./AlternativeDistributionPackageCreateRequestDataRelationships");
const AppStoreVersionExperimentCreateRequestDataAttributes_1 = require("./AppStoreVersionExperimentCreateRequestDataAttributes");
/**
 * @export
 */
exports.AppStoreVersionExperimentCreateRequestDataTypeEnum = {
    AppStoreVersionExperiments: "appStoreVersionExperiments"
};
/**
 * Check if a given object implements the AppStoreVersionExperimentCreateRequestData interface.
 */
function instanceOfAppStoreVersionExperimentCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function AppStoreVersionExperimentCreateRequestDataFromJSON(json) {
    return AppStoreVersionExperimentCreateRequestDataFromJSONTyped(json, false);
}
function AppStoreVersionExperimentCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AppStoreVersionExperimentCreateRequestDataAttributes_1.AppStoreVersionExperimentCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, AlternativeDistributionPackageCreateRequestDataRelationships_1.AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function AppStoreVersionExperimentCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, AppStoreVersionExperimentCreateRequestDataAttributes_1.AppStoreVersionExperimentCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AlternativeDistributionPackageCreateRequestDataRelationships_1.AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
