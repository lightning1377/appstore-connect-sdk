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
exports.instanceOfBetaAppClipInvocationLocalizationUpdateRequestDataAttributes = instanceOfBetaAppClipInvocationLocalizationUpdateRequestDataAttributes;
exports.BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSON = BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSON;
exports.BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSONTyped = BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSONTyped;
exports.BetaAppClipInvocationLocalizationUpdateRequestDataAttributesToJSON = BetaAppClipInvocationLocalizationUpdateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationUpdateRequestDataAttributes interface.
 */
function instanceOfBetaAppClipInvocationLocalizationUpdateRequestDataAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSON(json) {
    return BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}
function BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        title: !(0, runtime_1.exists)(json, "title") ? undefined : json["title"]
    };
}
function BetaAppClipInvocationLocalizationUpdateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        title: value.title
    };
}
