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
exports.instanceOfAppPreviewUpdateRequest = instanceOfAppPreviewUpdateRequest;
exports.AppPreviewUpdateRequestFromJSON = AppPreviewUpdateRequestFromJSON;
exports.AppPreviewUpdateRequestFromJSONTyped = AppPreviewUpdateRequestFromJSONTyped;
exports.AppPreviewUpdateRequestToJSON = AppPreviewUpdateRequestToJSON;
const AppPreviewUpdateRequestData_1 = require("./AppPreviewUpdateRequestData");
/**
 * Check if a given object implements the AppPreviewUpdateRequest interface.
 */
function instanceOfAppPreviewUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppPreviewUpdateRequestFromJSON(json) {
    return AppPreviewUpdateRequestFromJSONTyped(json, false);
}
function AppPreviewUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppPreviewUpdateRequestData_1.AppPreviewUpdateRequestDataFromJSON)(json["data"])
    };
}
function AppPreviewUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppPreviewUpdateRequestData_1.AppPreviewUpdateRequestDataToJSON)(value.data)
    };
}
