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
exports.instanceOfSubscriptionPromotionalOfferInlineCreateAttributes = instanceOfSubscriptionPromotionalOfferInlineCreateAttributes;
exports.SubscriptionPromotionalOfferInlineCreateAttributesFromJSON = SubscriptionPromotionalOfferInlineCreateAttributesFromJSON;
exports.SubscriptionPromotionalOfferInlineCreateAttributesFromJSONTyped = SubscriptionPromotionalOfferInlineCreateAttributesFromJSONTyped;
exports.SubscriptionPromotionalOfferInlineCreateAttributesToJSON = SubscriptionPromotionalOfferInlineCreateAttributesToJSON;
const SubscriptionOfferDuration_1 = require("./SubscriptionOfferDuration");
const SubscriptionOfferMode_1 = require("./SubscriptionOfferMode");
/**
 * Check if a given object implements the SubscriptionPromotionalOfferInlineCreateAttributes interface.
 */
function instanceOfSubscriptionPromotionalOfferInlineCreateAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "offerCode" in value;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "offerMode" in value;
    isInstance = isInstance && "numberOfPeriods" in value;
    return isInstance;
}
function SubscriptionPromotionalOfferInlineCreateAttributesFromJSON(json) {
    return SubscriptionPromotionalOfferInlineCreateAttributesFromJSONTyped(json, false);
}
function SubscriptionPromotionalOfferInlineCreateAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: json["name"],
        offerCode: json["offerCode"],
        duration: (0, SubscriptionOfferDuration_1.SubscriptionOfferDurationFromJSON)(json["duration"]),
        offerMode: (0, SubscriptionOfferMode_1.SubscriptionOfferModeFromJSON)(json["offerMode"]),
        numberOfPeriods: json["numberOfPeriods"]
    };
}
function SubscriptionPromotionalOfferInlineCreateAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        offerCode: value.offerCode,
        duration: (0, SubscriptionOfferDuration_1.SubscriptionOfferDurationToJSON)(value.duration),
        offerMode: (0, SubscriptionOfferMode_1.SubscriptionOfferModeToJSON)(value.offerMode),
        numberOfPeriods: value.numberOfPeriods
    };
}
