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
exports.instanceOfSubscriptionIntroductoryOfferAttributes = instanceOfSubscriptionIntroductoryOfferAttributes;
exports.SubscriptionIntroductoryOfferAttributesFromJSON = SubscriptionIntroductoryOfferAttributesFromJSON;
exports.SubscriptionIntroductoryOfferAttributesFromJSONTyped = SubscriptionIntroductoryOfferAttributesFromJSONTyped;
exports.SubscriptionIntroductoryOfferAttributesToJSON = SubscriptionIntroductoryOfferAttributesToJSON;
const runtime_1 = require("../runtime");
const SubscriptionOfferDuration_1 = require("./SubscriptionOfferDuration");
const SubscriptionOfferMode_1 = require("./SubscriptionOfferMode");
/**
 * Check if a given object implements the SubscriptionIntroductoryOfferAttributes interface.
 */
function instanceOfSubscriptionIntroductoryOfferAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function SubscriptionIntroductoryOfferAttributesFromJSON(json) {
    return SubscriptionIntroductoryOfferAttributesFromJSONTyped(json, false);
}
function SubscriptionIntroductoryOfferAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        startDate: !(0, runtime_1.exists)(json, "startDate") ? undefined : new Date(json["startDate"]),
        endDate: !(0, runtime_1.exists)(json, "endDate") ? undefined : new Date(json["endDate"]),
        duration: !(0, runtime_1.exists)(json, "duration") ? undefined : (0, SubscriptionOfferDuration_1.SubscriptionOfferDurationFromJSON)(json["duration"]),
        offerMode: !(0, runtime_1.exists)(json, "offerMode") ? undefined : (0, SubscriptionOfferMode_1.SubscriptionOfferModeFromJSON)(json["offerMode"]),
        numberOfPeriods: !(0, runtime_1.exists)(json, "numberOfPeriods") ? undefined : json["numberOfPeriods"]
    };
}
function SubscriptionIntroductoryOfferAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        startDate: value.startDate === undefined ? undefined : value.startDate.toISOString().substr(0, 10),
        endDate: value.endDate === undefined ? undefined : value.endDate.toISOString().substr(0, 10),
        duration: (0, SubscriptionOfferDuration_1.SubscriptionOfferDurationToJSON)(value.duration),
        offerMode: (0, SubscriptionOfferMode_1.SubscriptionOfferModeToJSON)(value.offerMode),
        numberOfPeriods: value.numberOfPeriods
    };
}
