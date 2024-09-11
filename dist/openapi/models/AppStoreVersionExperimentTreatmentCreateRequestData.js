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
exports.AppStoreVersionExperimentTreatmentCreateRequestDataTypeEnum = void 0;
exports.instanceOfAppStoreVersionExperimentTreatmentCreateRequestData = instanceOfAppStoreVersionExperimentTreatmentCreateRequestData;
exports.AppStoreVersionExperimentTreatmentCreateRequestDataFromJSON = AppStoreVersionExperimentTreatmentCreateRequestDataFromJSON;
exports.AppStoreVersionExperimentTreatmentCreateRequestDataFromJSONTyped = AppStoreVersionExperimentTreatmentCreateRequestDataFromJSONTyped;
exports.AppStoreVersionExperimentTreatmentCreateRequestDataToJSON = AppStoreVersionExperimentTreatmentCreateRequestDataToJSON;
const AppStoreVersionExperimentTreatmentCreateRequestDataAttributes_1 = require("./AppStoreVersionExperimentTreatmentCreateRequestDataAttributes");
const AppStoreVersionExperimentTreatmentCreateRequestDataRelationships_1 = require("./AppStoreVersionExperimentTreatmentCreateRequestDataRelationships");
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentCreateRequestDataTypeEnum = {
    AppStoreVersionExperimentTreatments: "appStoreVersionExperimentTreatments"
};
/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentCreateRequestData interface.
 */
function instanceOfAppStoreVersionExperimentTreatmentCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function AppStoreVersionExperimentTreatmentCreateRequestDataFromJSON(json) {
    return AppStoreVersionExperimentTreatmentCreateRequestDataFromJSONTyped(json, false);
}
function AppStoreVersionExperimentTreatmentCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AppStoreVersionExperimentTreatmentCreateRequestDataAttributes_1.AppStoreVersionExperimentTreatmentCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, AppStoreVersionExperimentTreatmentCreateRequestDataRelationships_1.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function AppStoreVersionExperimentTreatmentCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, AppStoreVersionExperimentTreatmentCreateRequestDataAttributes_1.AppStoreVersionExperimentTreatmentCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AppStoreVersionExperimentTreatmentCreateRequestDataRelationships_1.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
