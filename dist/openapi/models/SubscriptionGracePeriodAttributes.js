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
exports.SubscriptionGracePeriodAttributesRenewalTypeEnum = void 0;
exports.instanceOfSubscriptionGracePeriodAttributes = instanceOfSubscriptionGracePeriodAttributes;
exports.SubscriptionGracePeriodAttributesFromJSON = SubscriptionGracePeriodAttributesFromJSON;
exports.SubscriptionGracePeriodAttributesFromJSONTyped = SubscriptionGracePeriodAttributesFromJSONTyped;
exports.SubscriptionGracePeriodAttributesToJSON = SubscriptionGracePeriodAttributesToJSON;
const runtime_1 = require("../runtime");
const SubscriptionGracePeriodDuration_1 = require("./SubscriptionGracePeriodDuration");
/**
 * @export
 */
exports.SubscriptionGracePeriodAttributesRenewalTypeEnum = {
    AllRenewals: "ALL_RENEWALS",
    PaidToPaidOnly: "PAID_TO_PAID_ONLY"
};
/**
 * Check if a given object implements the SubscriptionGracePeriodAttributes interface.
 */
function instanceOfSubscriptionGracePeriodAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function SubscriptionGracePeriodAttributesFromJSON(json) {
    return SubscriptionGracePeriodAttributesFromJSONTyped(json, false);
}
function SubscriptionGracePeriodAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        optIn: !(0, runtime_1.exists)(json, "optIn") ? undefined : json["optIn"],
        sandboxOptIn: !(0, runtime_1.exists)(json, "sandboxOptIn") ? undefined : json["sandboxOptIn"],
        duration: !(0, runtime_1.exists)(json, "duration") ? undefined : (0, SubscriptionGracePeriodDuration_1.SubscriptionGracePeriodDurationFromJSON)(json["duration"]),
        renewalType: !(0, runtime_1.exists)(json, "renewalType") ? undefined : json["renewalType"]
    };
}
function SubscriptionGracePeriodAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        optIn: value.optIn,
        sandboxOptIn: value.sandboxOptIn,
        duration: (0, SubscriptionGracePeriodDuration_1.SubscriptionGracePeriodDurationToJSON)(value.duration),
        renewalType: value.renewalType
    };
}
