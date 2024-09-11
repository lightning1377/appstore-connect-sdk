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
exports.AppStoreVersionExperimentV2CreateRequestDataTypeEnum = void 0;
exports.instanceOfAppStoreVersionExperimentV2CreateRequestData = instanceOfAppStoreVersionExperimentV2CreateRequestData;
exports.AppStoreVersionExperimentV2CreateRequestDataFromJSON = AppStoreVersionExperimentV2CreateRequestDataFromJSON;
exports.AppStoreVersionExperimentV2CreateRequestDataFromJSONTyped = AppStoreVersionExperimentV2CreateRequestDataFromJSONTyped;
exports.AppStoreVersionExperimentV2CreateRequestDataToJSON = AppStoreVersionExperimentV2CreateRequestDataToJSON;
const AnalyticsReportRequestCreateRequestDataRelationships_1 = require("./AnalyticsReportRequestCreateRequestDataRelationships");
const AppStoreVersionExperimentV2CreateRequestDataAttributes_1 = require("./AppStoreVersionExperimentV2CreateRequestDataAttributes");
/**
 * @export
 */
exports.AppStoreVersionExperimentV2CreateRequestDataTypeEnum = {
    AppStoreVersionExperiments: "appStoreVersionExperiments"
};
/**
 * Check if a given object implements the AppStoreVersionExperimentV2CreateRequestData interface.
 */
function instanceOfAppStoreVersionExperimentV2CreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function AppStoreVersionExperimentV2CreateRequestDataFromJSON(json) {
    return AppStoreVersionExperimentV2CreateRequestDataFromJSONTyped(json, false);
}
function AppStoreVersionExperimentV2CreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AppStoreVersionExperimentV2CreateRequestDataAttributes_1.AppStoreVersionExperimentV2CreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, AnalyticsReportRequestCreateRequestDataRelationships_1.AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function AppStoreVersionExperimentV2CreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, AppStoreVersionExperimentV2CreateRequestDataAttributes_1.AppStoreVersionExperimentV2CreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AnalyticsReportRequestCreateRequestDataRelationships_1.AnalyticsReportRequestCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
