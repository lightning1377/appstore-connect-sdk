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
exports.instanceOfAppStoreVersionLocalizationAttributes = instanceOfAppStoreVersionLocalizationAttributes;
exports.AppStoreVersionLocalizationAttributesFromJSON = AppStoreVersionLocalizationAttributesFromJSON;
exports.AppStoreVersionLocalizationAttributesFromJSONTyped = AppStoreVersionLocalizationAttributesFromJSONTyped;
exports.AppStoreVersionLocalizationAttributesToJSON = AppStoreVersionLocalizationAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AppStoreVersionLocalizationAttributes interface.
 */
function instanceOfAppStoreVersionLocalizationAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppStoreVersionLocalizationAttributesFromJSON(json) {
    return AppStoreVersionLocalizationAttributesFromJSONTyped(json, false);
}
function AppStoreVersionLocalizationAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        description: !(0, runtime_1.exists)(json, "description") ? undefined : json["description"],
        locale: !(0, runtime_1.exists)(json, "locale") ? undefined : json["locale"],
        keywords: !(0, runtime_1.exists)(json, "keywords") ? undefined : json["keywords"],
        marketingUrl: !(0, runtime_1.exists)(json, "marketingUrl") ? undefined : json["marketingUrl"],
        promotionalText: !(0, runtime_1.exists)(json, "promotionalText") ? undefined : json["promotionalText"],
        supportUrl: !(0, runtime_1.exists)(json, "supportUrl") ? undefined : json["supportUrl"],
        whatsNew: !(0, runtime_1.exists)(json, "whatsNew") ? undefined : json["whatsNew"]
    };
}
function AppStoreVersionLocalizationAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        description: value.description,
        locale: value.locale,
        keywords: value.keywords,
        marketingUrl: value.marketingUrl,
        promotionalText: value.promotionalText,
        supportUrl: value.supportUrl,
        whatsNew: value.whatsNew
    };
}
