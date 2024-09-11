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
exports.instanceOfAppScreenshotCreateRequest = instanceOfAppScreenshotCreateRequest;
exports.AppScreenshotCreateRequestFromJSON = AppScreenshotCreateRequestFromJSON;
exports.AppScreenshotCreateRequestFromJSONTyped = AppScreenshotCreateRequestFromJSONTyped;
exports.AppScreenshotCreateRequestToJSON = AppScreenshotCreateRequestToJSON;
const AppScreenshotCreateRequestData_1 = require("./AppScreenshotCreateRequestData");
/**
 * Check if a given object implements the AppScreenshotCreateRequest interface.
 */
function instanceOfAppScreenshotCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppScreenshotCreateRequestFromJSON(json) {
    return AppScreenshotCreateRequestFromJSONTyped(json, false);
}
function AppScreenshotCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppScreenshotCreateRequestData_1.AppScreenshotCreateRequestDataFromJSON)(json["data"])
    };
}
function AppScreenshotCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppScreenshotCreateRequestData_1.AppScreenshotCreateRequestDataToJSON)(value.data)
    };
}
