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
exports.instanceOfAppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment = instanceOfAppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment;
exports.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSON = AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSON;
exports.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSONTyped = AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSONTyped;
exports.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentToJSON = AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentToJSON;
const AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData_1 = require("./AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData");
/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment interface.
 */
function instanceOfAppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSON(json) {
    return AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSONTyped(json, false);
}
function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData_1.AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataFromJSON)(json["data"])
    };
}
function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData_1.AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataToJSON)(value.data)
    };
}
