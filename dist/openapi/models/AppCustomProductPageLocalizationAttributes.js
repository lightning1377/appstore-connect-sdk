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
exports.instanceOfAppCustomProductPageLocalizationAttributes = instanceOfAppCustomProductPageLocalizationAttributes;
exports.AppCustomProductPageLocalizationAttributesFromJSON = AppCustomProductPageLocalizationAttributesFromJSON;
exports.AppCustomProductPageLocalizationAttributesFromJSONTyped = AppCustomProductPageLocalizationAttributesFromJSONTyped;
exports.AppCustomProductPageLocalizationAttributesToJSON = AppCustomProductPageLocalizationAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AppCustomProductPageLocalizationAttributes interface.
 */
function instanceOfAppCustomProductPageLocalizationAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppCustomProductPageLocalizationAttributesFromJSON(json) {
    return AppCustomProductPageLocalizationAttributesFromJSONTyped(json, false);
}
function AppCustomProductPageLocalizationAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        locale: !(0, runtime_1.exists)(json, "locale") ? undefined : json["locale"],
        promotionalText: !(0, runtime_1.exists)(json, "promotionalText") ? undefined : json["promotionalText"]
    };
}
function AppCustomProductPageLocalizationAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        locale: value.locale,
        promotionalText: value.promotionalText
    };
}
