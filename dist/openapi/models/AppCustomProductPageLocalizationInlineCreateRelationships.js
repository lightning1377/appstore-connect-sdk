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
exports.instanceOfAppCustomProductPageLocalizationInlineCreateRelationships = instanceOfAppCustomProductPageLocalizationInlineCreateRelationships;
exports.AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSON = AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSON;
exports.AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSONTyped = AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSONTyped;
exports.AppCustomProductPageLocalizationInlineCreateRelationshipsToJSON = AppCustomProductPageLocalizationInlineCreateRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion_1 = require("./AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion");
/**
 * Check if a given object implements the AppCustomProductPageLocalizationInlineCreateRelationships interface.
 */
function instanceOfAppCustomProductPageLocalizationInlineCreateRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSON(json) {
    return AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSONTyped(json, false);
}
function AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appCustomProductPageVersion: !(0, runtime_1.exists)(json, "appCustomProductPageVersion") ? undefined : (0, AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion_1.AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersionFromJSON)(json["appCustomProductPageVersion"])
    };
}
function AppCustomProductPageLocalizationInlineCreateRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appCustomProductPageVersion: (0, AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion_1.AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersionToJSON)(value.appCustomProductPageVersion)
    };
}
