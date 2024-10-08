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
exports.instanceOfAppStoreVersionExperimentTreatmentCreateRequestDataRelationships = instanceOfAppStoreVersionExperimentTreatmentCreateRequestDataRelationships;
exports.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSON = AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSON;
exports.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSONTyped = AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSONTyped;
exports.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsToJSON = AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment_1 = require("./AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment");
const AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2_1 = require("./AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2");
/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentCreateRequestDataRelationships interface.
 */
function instanceOfAppStoreVersionExperimentTreatmentCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "appStoreVersionExperiment" in value;
    return isInstance;
}
function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSON(json) {
    return AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appStoreVersionExperiment: (0, AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment_1.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSON)(json["appStoreVersionExperiment"]),
        appStoreVersionExperimentV2: !(0, runtime_1.exists)(json, "appStoreVersionExperimentV2") ? undefined : (0, AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2_1.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2FromJSON)(json["appStoreVersionExperimentV2"])
    };
}
function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appStoreVersionExperiment: (0, AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment_1.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentToJSON)(value.appStoreVersionExperiment),
        appStoreVersionExperimentV2: (0, AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2_1.AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2ToJSON)(value.appStoreVersionExperimentV2)
    };
}
