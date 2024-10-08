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
exports.instanceOfSubscriptionPromotionalOfferAttributes = instanceOfSubscriptionPromotionalOfferAttributes;
exports.SubscriptionPromotionalOfferAttributesFromJSON = SubscriptionPromotionalOfferAttributesFromJSON;
exports.SubscriptionPromotionalOfferAttributesFromJSONTyped = SubscriptionPromotionalOfferAttributesFromJSONTyped;
exports.SubscriptionPromotionalOfferAttributesToJSON = SubscriptionPromotionalOfferAttributesToJSON;
const runtime_1 = require("../runtime");
const SubscriptionOfferDuration_1 = require("./SubscriptionOfferDuration");
const SubscriptionOfferMode_1 = require("./SubscriptionOfferMode");
/**
 * Check if a given object implements the SubscriptionPromotionalOfferAttributes interface.
 */
function instanceOfSubscriptionPromotionalOfferAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function SubscriptionPromotionalOfferAttributesFromJSON(json) {
    return SubscriptionPromotionalOfferAttributesFromJSONTyped(json, false);
}
function SubscriptionPromotionalOfferAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, "name") ? undefined : json["name"],
        offerCode: !(0, runtime_1.exists)(json, "offerCode") ? undefined : json["offerCode"],
        duration: !(0, runtime_1.exists)(json, "duration") ? undefined : (0, SubscriptionOfferDuration_1.SubscriptionOfferDurationFromJSON)(json["duration"]),
        offerMode: !(0, runtime_1.exists)(json, "offerMode") ? undefined : (0, SubscriptionOfferMode_1.SubscriptionOfferModeFromJSON)(json["offerMode"]),
        numberOfPeriods: !(0, runtime_1.exists)(json, "numberOfPeriods") ? undefined : json["numberOfPeriods"]
    };
}
function SubscriptionPromotionalOfferAttributesToJSON(value) {
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
