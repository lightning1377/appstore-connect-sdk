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
exports.instanceOfAppStoreVersionExperimentV2UpdateRequest = instanceOfAppStoreVersionExperimentV2UpdateRequest;
exports.AppStoreVersionExperimentV2UpdateRequestFromJSON = AppStoreVersionExperimentV2UpdateRequestFromJSON;
exports.AppStoreVersionExperimentV2UpdateRequestFromJSONTyped = AppStoreVersionExperimentV2UpdateRequestFromJSONTyped;
exports.AppStoreVersionExperimentV2UpdateRequestToJSON = AppStoreVersionExperimentV2UpdateRequestToJSON;
const AppStoreVersionExperimentV2UpdateRequestData_1 = require("./AppStoreVersionExperimentV2UpdateRequestData");
/**
 * Check if a given object implements the AppStoreVersionExperimentV2UpdateRequest interface.
 */
function instanceOfAppStoreVersionExperimentV2UpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppStoreVersionExperimentV2UpdateRequestFromJSON(json) {
    return AppStoreVersionExperimentV2UpdateRequestFromJSONTyped(json, false);
}
function AppStoreVersionExperimentV2UpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppStoreVersionExperimentV2UpdateRequestData_1.AppStoreVersionExperimentV2UpdateRequestDataFromJSON)(json["data"])
    };
}
function AppStoreVersionExperimentV2UpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppStoreVersionExperimentV2UpdateRequestData_1.AppStoreVersionExperimentV2UpdateRequestDataToJSON)(value.data)
    };
}
