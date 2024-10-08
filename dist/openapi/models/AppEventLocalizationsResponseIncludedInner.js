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
exports.AppEventLocalizationsResponseIncludedInnerFromJSON = AppEventLocalizationsResponseIncludedInnerFromJSON;
exports.AppEventLocalizationsResponseIncludedInnerFromJSONTyped = AppEventLocalizationsResponseIncludedInnerFromJSONTyped;
exports.AppEventLocalizationsResponseIncludedInnerToJSON = AppEventLocalizationsResponseIncludedInnerToJSON;
const AppEvent_1 = require("./AppEvent");
const AppEventScreenshot_1 = require("./AppEventScreenshot");
const AppEventVideoClip_1 = require("./AppEventVideoClip");
function AppEventLocalizationsResponseIncludedInnerFromJSON(json) {
    return AppEventLocalizationsResponseIncludedInnerFromJSONTyped(json, false);
}
function AppEventLocalizationsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign({}, (0, AppEvent_1.AppEventFromJSONTyped)(json, true)), (0, AppEventScreenshot_1.AppEventScreenshotFromJSONTyped)(json, true)), (0, AppEventVideoClip_1.AppEventVideoClipFromJSONTyped)(json, true));
}
function AppEventLocalizationsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, AppEvent_1.instanceOfAppEvent)(value)) {
        return (0, AppEvent_1.AppEventToJSON)(value);
    }
    if ((0, AppEventScreenshot_1.instanceOfAppEventScreenshot)(value)) {
        return (0, AppEventScreenshot_1.AppEventScreenshotToJSON)(value);
    }
    if ((0, AppEventVideoClip_1.instanceOfAppEventVideoClip)(value)) {
        return (0, AppEventVideoClip_1.AppEventVideoClipToJSON)(value);
    }
    return {};
}
