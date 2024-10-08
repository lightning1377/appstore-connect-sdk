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
exports.instanceOfAppEventScreenshotsResponse = instanceOfAppEventScreenshotsResponse;
exports.AppEventScreenshotsResponseFromJSON = AppEventScreenshotsResponseFromJSON;
exports.AppEventScreenshotsResponseFromJSONTyped = AppEventScreenshotsResponseFromJSONTyped;
exports.AppEventScreenshotsResponseToJSON = AppEventScreenshotsResponseToJSON;
const runtime_1 = require("../runtime");
const AppEventLocalization_1 = require("./AppEventLocalization");
const AppEventScreenshot_1 = require("./AppEventScreenshot");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppEventScreenshotsResponse interface.
 */
function instanceOfAppEventScreenshotsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppEventScreenshotsResponseFromJSON(json) {
    return AppEventScreenshotsResponseFromJSONTyped(json, false);
}
function AppEventScreenshotsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(AppEventScreenshot_1.AppEventScreenshotFromJSON),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppEventLocalization_1.AppEventLocalizationFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function AppEventScreenshotsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(AppEventScreenshot_1.AppEventScreenshotToJSON),
        included: value.included === undefined ? undefined : value.included.map(AppEventLocalization_1.AppEventLocalizationToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
