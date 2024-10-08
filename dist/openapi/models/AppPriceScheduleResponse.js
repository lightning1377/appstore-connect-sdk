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
exports.instanceOfAppPriceScheduleResponse = instanceOfAppPriceScheduleResponse;
exports.AppPriceScheduleResponseFromJSON = AppPriceScheduleResponseFromJSON;
exports.AppPriceScheduleResponseFromJSONTyped = AppPriceScheduleResponseFromJSONTyped;
exports.AppPriceScheduleResponseToJSON = AppPriceScheduleResponseToJSON;
const runtime_1 = require("../runtime");
const AppPriceSchedule_1 = require("./AppPriceSchedule");
const AppPriceScheduleResponseIncludedInner_1 = require("./AppPriceScheduleResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppPriceScheduleResponse interface.
 */
function instanceOfAppPriceScheduleResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppPriceScheduleResponseFromJSON(json) {
    return AppPriceScheduleResponseFromJSONTyped(json, false);
}
function AppPriceScheduleResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppPriceSchedule_1.AppPriceScheduleFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppPriceScheduleResponseIncludedInner_1.AppPriceScheduleResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AppPriceScheduleResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppPriceSchedule_1.AppPriceScheduleToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(AppPriceScheduleResponseIncludedInner_1.AppPriceScheduleResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
