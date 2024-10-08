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
exports.instanceOfAppPreviewCreateRequest = instanceOfAppPreviewCreateRequest;
exports.AppPreviewCreateRequestFromJSON = AppPreviewCreateRequestFromJSON;
exports.AppPreviewCreateRequestFromJSONTyped = AppPreviewCreateRequestFromJSONTyped;
exports.AppPreviewCreateRequestToJSON = AppPreviewCreateRequestToJSON;
const AppPreviewCreateRequestData_1 = require("./AppPreviewCreateRequestData");
/**
 * Check if a given object implements the AppPreviewCreateRequest interface.
 */
function instanceOfAppPreviewCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppPreviewCreateRequestFromJSON(json) {
    return AppPreviewCreateRequestFromJSONTyped(json, false);
}
function AppPreviewCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppPreviewCreateRequestData_1.AppPreviewCreateRequestDataFromJSON)(json["data"])
    };
}
function AppPreviewCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppPreviewCreateRequestData_1.AppPreviewCreateRequestDataToJSON)(value.data)
    };
}
