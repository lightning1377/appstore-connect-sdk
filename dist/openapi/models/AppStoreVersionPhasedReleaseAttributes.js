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
exports.instanceOfAppStoreVersionPhasedReleaseAttributes = instanceOfAppStoreVersionPhasedReleaseAttributes;
exports.AppStoreVersionPhasedReleaseAttributesFromJSON = AppStoreVersionPhasedReleaseAttributesFromJSON;
exports.AppStoreVersionPhasedReleaseAttributesFromJSONTyped = AppStoreVersionPhasedReleaseAttributesFromJSONTyped;
exports.AppStoreVersionPhasedReleaseAttributesToJSON = AppStoreVersionPhasedReleaseAttributesToJSON;
const runtime_1 = require("../runtime");
const PhasedReleaseState_1 = require("./PhasedReleaseState");
/**
 * Check if a given object implements the AppStoreVersionPhasedReleaseAttributes interface.
 */
function instanceOfAppStoreVersionPhasedReleaseAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppStoreVersionPhasedReleaseAttributesFromJSON(json) {
    return AppStoreVersionPhasedReleaseAttributesFromJSONTyped(json, false);
}
function AppStoreVersionPhasedReleaseAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        phasedReleaseState: !(0, runtime_1.exists)(json, "phasedReleaseState") ? undefined : (0, PhasedReleaseState_1.PhasedReleaseStateFromJSON)(json["phasedReleaseState"]),
        startDate: !(0, runtime_1.exists)(json, "startDate") ? undefined : new Date(json["startDate"]),
        totalPauseDuration: !(0, runtime_1.exists)(json, "totalPauseDuration") ? undefined : json["totalPauseDuration"],
        currentDayNumber: !(0, runtime_1.exists)(json, "currentDayNumber") ? undefined : json["currentDayNumber"]
    };
}
function AppStoreVersionPhasedReleaseAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        phasedReleaseState: (0, PhasedReleaseState_1.PhasedReleaseStateToJSON)(value.phasedReleaseState),
        startDate: value.startDate === undefined ? undefined : value.startDate.toISOString(),
        totalPauseDuration: value.totalPauseDuration,
        currentDayNumber: value.currentDayNumber
    };
}
