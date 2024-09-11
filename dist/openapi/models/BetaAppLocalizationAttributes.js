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
exports.instanceOfBetaAppLocalizationAttributes = instanceOfBetaAppLocalizationAttributes;
exports.BetaAppLocalizationAttributesFromJSON = BetaAppLocalizationAttributesFromJSON;
exports.BetaAppLocalizationAttributesFromJSONTyped = BetaAppLocalizationAttributesFromJSONTyped;
exports.BetaAppLocalizationAttributesToJSON = BetaAppLocalizationAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BetaAppLocalizationAttributes interface.
 */
function instanceOfBetaAppLocalizationAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function BetaAppLocalizationAttributesFromJSON(json) {
    return BetaAppLocalizationAttributesFromJSONTyped(json, false);
}
function BetaAppLocalizationAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        feedbackEmail: !(0, runtime_1.exists)(json, "feedbackEmail") ? undefined : json["feedbackEmail"],
        marketingUrl: !(0, runtime_1.exists)(json, "marketingUrl") ? undefined : json["marketingUrl"],
        privacyPolicyUrl: !(0, runtime_1.exists)(json, "privacyPolicyUrl") ? undefined : json["privacyPolicyUrl"],
        tvOsPrivacyPolicy: !(0, runtime_1.exists)(json, "tvOsPrivacyPolicy") ? undefined : json["tvOsPrivacyPolicy"],
        description: !(0, runtime_1.exists)(json, "description") ? undefined : json["description"],
        locale: !(0, runtime_1.exists)(json, "locale") ? undefined : json["locale"]
    };
}
function BetaAppLocalizationAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        feedbackEmail: value.feedbackEmail,
        marketingUrl: value.marketingUrl,
        privacyPolicyUrl: value.privacyPolicyUrl,
        tvOsPrivacyPolicy: value.tvOsPrivacyPolicy,
        description: value.description,
        locale: value.locale
    };
}
