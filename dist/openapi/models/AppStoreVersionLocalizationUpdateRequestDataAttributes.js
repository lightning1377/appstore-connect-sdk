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
exports.instanceOfAppStoreVersionLocalizationUpdateRequestDataAttributes = instanceOfAppStoreVersionLocalizationUpdateRequestDataAttributes;
exports.AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSON = AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSON;
exports.AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSONTyped = AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSONTyped;
exports.AppStoreVersionLocalizationUpdateRequestDataAttributesToJSON = AppStoreVersionLocalizationUpdateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AppStoreVersionLocalizationUpdateRequestDataAttributes interface.
 */
function instanceOfAppStoreVersionLocalizationUpdateRequestDataAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSON(json) {
    return AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}
function AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        description: !(0, runtime_1.exists)(json, "description") ? undefined : json["description"],
        keywords: !(0, runtime_1.exists)(json, "keywords") ? undefined : json["keywords"],
        marketingUrl: !(0, runtime_1.exists)(json, "marketingUrl") ? undefined : json["marketingUrl"],
        promotionalText: !(0, runtime_1.exists)(json, "promotionalText") ? undefined : json["promotionalText"],
        supportUrl: !(0, runtime_1.exists)(json, "supportUrl") ? undefined : json["supportUrl"],
        whatsNew: !(0, runtime_1.exists)(json, "whatsNew") ? undefined : json["whatsNew"]
    };
}
function AppStoreVersionLocalizationUpdateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        description: value.description,
        keywords: value.keywords,
        marketingUrl: value.marketingUrl,
        promotionalText: value.promotionalText,
        supportUrl: value.supportUrl,
        whatsNew: value.whatsNew
    };
}
