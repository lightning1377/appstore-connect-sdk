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
exports.instanceOfAppUpdateRequest = instanceOfAppUpdateRequest;
exports.AppUpdateRequestFromJSON = AppUpdateRequestFromJSON;
exports.AppUpdateRequestFromJSONTyped = AppUpdateRequestFromJSONTyped;
exports.AppUpdateRequestToJSON = AppUpdateRequestToJSON;
const AppUpdateRequestData_1 = require("./AppUpdateRequestData");
/**
 * Check if a given object implements the AppUpdateRequest interface.
 */
function instanceOfAppUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppUpdateRequestFromJSON(json) {
    return AppUpdateRequestFromJSONTyped(json, false);
}
function AppUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppUpdateRequestData_1.AppUpdateRequestDataFromJSON)(json["data"])
    };
}
function AppUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppUpdateRequestData_1.AppUpdateRequestDataToJSON)(value.data)
    };
}
