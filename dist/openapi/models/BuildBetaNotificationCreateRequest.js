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
exports.instanceOfBuildBetaNotificationCreateRequest = instanceOfBuildBetaNotificationCreateRequest;
exports.BuildBetaNotificationCreateRequestFromJSON = BuildBetaNotificationCreateRequestFromJSON;
exports.BuildBetaNotificationCreateRequestFromJSONTyped = BuildBetaNotificationCreateRequestFromJSONTyped;
exports.BuildBetaNotificationCreateRequestToJSON = BuildBetaNotificationCreateRequestToJSON;
const BuildBetaNotificationCreateRequestData_1 = require("./BuildBetaNotificationCreateRequestData");
/**
 * Check if a given object implements the BuildBetaNotificationCreateRequest interface.
 */
function instanceOfBuildBetaNotificationCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function BuildBetaNotificationCreateRequestFromJSON(json) {
    return BuildBetaNotificationCreateRequestFromJSONTyped(json, false);
}
function BuildBetaNotificationCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BuildBetaNotificationCreateRequestData_1.BuildBetaNotificationCreateRequestDataFromJSON)(json["data"])
    };
}
function BuildBetaNotificationCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BuildBetaNotificationCreateRequestData_1.BuildBetaNotificationCreateRequestDataToJSON)(value.data)
    };
}
