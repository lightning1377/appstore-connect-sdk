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
exports.instanceOfBetaBuildLocalizationAttributes = instanceOfBetaBuildLocalizationAttributes;
exports.BetaBuildLocalizationAttributesFromJSON = BetaBuildLocalizationAttributesFromJSON;
exports.BetaBuildLocalizationAttributesFromJSONTyped = BetaBuildLocalizationAttributesFromJSONTyped;
exports.BetaBuildLocalizationAttributesToJSON = BetaBuildLocalizationAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BetaBuildLocalizationAttributes interface.
 */
function instanceOfBetaBuildLocalizationAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function BetaBuildLocalizationAttributesFromJSON(json) {
    return BetaBuildLocalizationAttributesFromJSONTyped(json, false);
}
function BetaBuildLocalizationAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        whatsNew: !(0, runtime_1.exists)(json, "whatsNew") ? undefined : json["whatsNew"],
        locale: !(0, runtime_1.exists)(json, "locale") ? undefined : json["locale"]
    };
}
function BetaBuildLocalizationAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        whatsNew: value.whatsNew,
        locale: value.locale
    };
}
