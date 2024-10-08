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
exports.instanceOfAppScreenshotSetAppScreenshotsLinkagesRequest = instanceOfAppScreenshotSetAppScreenshotsLinkagesRequest;
exports.AppScreenshotSetAppScreenshotsLinkagesRequestFromJSON = AppScreenshotSetAppScreenshotsLinkagesRequestFromJSON;
exports.AppScreenshotSetAppScreenshotsLinkagesRequestFromJSONTyped = AppScreenshotSetAppScreenshotsLinkagesRequestFromJSONTyped;
exports.AppScreenshotSetAppScreenshotsLinkagesRequestToJSON = AppScreenshotSetAppScreenshotsLinkagesRequestToJSON;
const AppScreenshotSetRelationshipsAppScreenshotsDataInner_1 = require("./AppScreenshotSetRelationshipsAppScreenshotsDataInner");
/**
 * Check if a given object implements the AppScreenshotSetAppScreenshotsLinkagesRequest interface.
 */
function instanceOfAppScreenshotSetAppScreenshotsLinkagesRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppScreenshotSetAppScreenshotsLinkagesRequestFromJSON(json) {
    return AppScreenshotSetAppScreenshotsLinkagesRequestFromJSONTyped(json, false);
}
function AppScreenshotSetAppScreenshotsLinkagesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(AppScreenshotSetRelationshipsAppScreenshotsDataInner_1.AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON)
    };
}
function AppScreenshotSetAppScreenshotsLinkagesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(AppScreenshotSetRelationshipsAppScreenshotsDataInner_1.AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON)
    };
}
