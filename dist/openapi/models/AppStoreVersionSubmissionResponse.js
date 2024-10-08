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
exports.instanceOfAppStoreVersionSubmissionResponse = instanceOfAppStoreVersionSubmissionResponse;
exports.AppStoreVersionSubmissionResponseFromJSON = AppStoreVersionSubmissionResponseFromJSON;
exports.AppStoreVersionSubmissionResponseFromJSONTyped = AppStoreVersionSubmissionResponseFromJSONTyped;
exports.AppStoreVersionSubmissionResponseToJSON = AppStoreVersionSubmissionResponseToJSON;
const runtime_1 = require("../runtime");
const AppStoreVersion_1 = require("./AppStoreVersion");
const AppStoreVersionSubmission_1 = require("./AppStoreVersionSubmission");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppStoreVersionSubmissionResponse interface.
 */
function instanceOfAppStoreVersionSubmissionResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppStoreVersionSubmissionResponseFromJSON(json) {
    return AppStoreVersionSubmissionResponseFromJSONTyped(json, false);
}
function AppStoreVersionSubmissionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppStoreVersionSubmission_1.AppStoreVersionSubmissionFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppStoreVersion_1.AppStoreVersionFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AppStoreVersionSubmissionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppStoreVersionSubmission_1.AppStoreVersionSubmissionToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(AppStoreVersion_1.AppStoreVersionToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
