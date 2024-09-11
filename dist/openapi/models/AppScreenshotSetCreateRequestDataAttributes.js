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
exports.instanceOfAppScreenshotSetCreateRequestDataAttributes = instanceOfAppScreenshotSetCreateRequestDataAttributes;
exports.AppScreenshotSetCreateRequestDataAttributesFromJSON = AppScreenshotSetCreateRequestDataAttributesFromJSON;
exports.AppScreenshotSetCreateRequestDataAttributesFromJSONTyped = AppScreenshotSetCreateRequestDataAttributesFromJSONTyped;
exports.AppScreenshotSetCreateRequestDataAttributesToJSON = AppScreenshotSetCreateRequestDataAttributesToJSON;
const ScreenshotDisplayType_1 = require("./ScreenshotDisplayType");
/**
 * Check if a given object implements the AppScreenshotSetCreateRequestDataAttributes interface.
 */
function instanceOfAppScreenshotSetCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "screenshotDisplayType" in value;
    return isInstance;
}
function AppScreenshotSetCreateRequestDataAttributesFromJSON(json) {
    return AppScreenshotSetCreateRequestDataAttributesFromJSONTyped(json, false);
}
function AppScreenshotSetCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        screenshotDisplayType: (0, ScreenshotDisplayType_1.ScreenshotDisplayTypeFromJSON)(json["screenshotDisplayType"])
    };
}
function AppScreenshotSetCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        screenshotDisplayType: (0, ScreenshotDisplayType_1.ScreenshotDisplayTypeToJSON)(value.screenshotDisplayType)
    };
}
