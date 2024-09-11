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
exports.instanceOfAppEventScreenshotUpdateRequestDataAttributes = instanceOfAppEventScreenshotUpdateRequestDataAttributes;
exports.AppEventScreenshotUpdateRequestDataAttributesFromJSON = AppEventScreenshotUpdateRequestDataAttributesFromJSON;
exports.AppEventScreenshotUpdateRequestDataAttributesFromJSONTyped = AppEventScreenshotUpdateRequestDataAttributesFromJSONTyped;
exports.AppEventScreenshotUpdateRequestDataAttributesToJSON = AppEventScreenshotUpdateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AppEventScreenshotUpdateRequestDataAttributes interface.
 */
function instanceOfAppEventScreenshotUpdateRequestDataAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppEventScreenshotUpdateRequestDataAttributesFromJSON(json) {
    return AppEventScreenshotUpdateRequestDataAttributesFromJSONTyped(json, false);
}
function AppEventScreenshotUpdateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        uploaded: !(0, runtime_1.exists)(json, "uploaded") ? undefined : json["uploaded"]
    };
}
function AppEventScreenshotUpdateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        uploaded: value.uploaded
    };
}
