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
exports.instanceOfAppScreenshotSetResponse = instanceOfAppScreenshotSetResponse;
exports.AppScreenshotSetResponseFromJSON = AppScreenshotSetResponseFromJSON;
exports.AppScreenshotSetResponseFromJSONTyped = AppScreenshotSetResponseFromJSONTyped;
exports.AppScreenshotSetResponseToJSON = AppScreenshotSetResponseToJSON;
const runtime_1 = require("../runtime");
const AppScreenshotSet_1 = require("./AppScreenshotSet");
const AppScreenshotSetsResponseIncludedInner_1 = require("./AppScreenshotSetsResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppScreenshotSetResponse interface.
 */
function instanceOfAppScreenshotSetResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppScreenshotSetResponseFromJSON(json) {
    return AppScreenshotSetResponseFromJSONTyped(json, false);
}
function AppScreenshotSetResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppScreenshotSet_1.AppScreenshotSetFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppScreenshotSetsResponseIncludedInner_1.AppScreenshotSetsResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AppScreenshotSetResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppScreenshotSet_1.AppScreenshotSetToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(AppScreenshotSetsResponseIncludedInner_1.AppScreenshotSetsResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
