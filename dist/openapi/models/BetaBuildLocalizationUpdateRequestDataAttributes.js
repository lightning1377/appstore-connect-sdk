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
exports.instanceOfBetaBuildLocalizationUpdateRequestDataAttributes = instanceOfBetaBuildLocalizationUpdateRequestDataAttributes;
exports.BetaBuildLocalizationUpdateRequestDataAttributesFromJSON = BetaBuildLocalizationUpdateRequestDataAttributesFromJSON;
exports.BetaBuildLocalizationUpdateRequestDataAttributesFromJSONTyped = BetaBuildLocalizationUpdateRequestDataAttributesFromJSONTyped;
exports.BetaBuildLocalizationUpdateRequestDataAttributesToJSON = BetaBuildLocalizationUpdateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BetaBuildLocalizationUpdateRequestDataAttributes interface.
 */
function instanceOfBetaBuildLocalizationUpdateRequestDataAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function BetaBuildLocalizationUpdateRequestDataAttributesFromJSON(json) {
    return BetaBuildLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}
function BetaBuildLocalizationUpdateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        whatsNew: !(0, runtime_1.exists)(json, "whatsNew") ? undefined : json["whatsNew"]
    };
}
function BetaBuildLocalizationUpdateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        whatsNew: value.whatsNew
    };
}
