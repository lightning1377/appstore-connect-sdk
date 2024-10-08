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
exports.SandboxTesterV2UpdateRequestDataAttributesSubscriptionRenewalRateEnum = void 0;
exports.instanceOfSandboxTesterV2UpdateRequestDataAttributes = instanceOfSandboxTesterV2UpdateRequestDataAttributes;
exports.SandboxTesterV2UpdateRequestDataAttributesFromJSON = SandboxTesterV2UpdateRequestDataAttributesFromJSON;
exports.SandboxTesterV2UpdateRequestDataAttributesFromJSONTyped = SandboxTesterV2UpdateRequestDataAttributesFromJSONTyped;
exports.SandboxTesterV2UpdateRequestDataAttributesToJSON = SandboxTesterV2UpdateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
const TerritoryCode_1 = require("./TerritoryCode");
/**
 * @export
 */
exports.SandboxTesterV2UpdateRequestDataAttributesSubscriptionRenewalRateEnum = {
    OneHour: "MONTHLY_RENEWAL_EVERY_ONE_HOUR",
    ThirtyMinutes: "MONTHLY_RENEWAL_EVERY_THIRTY_MINUTES",
    FifteenMinutes: "MONTHLY_RENEWAL_EVERY_FIFTEEN_MINUTES",
    FiveMinutes: "MONTHLY_RENEWAL_EVERY_FIVE_MINUTES",
    ThreeMinutes: "MONTHLY_RENEWAL_EVERY_THREE_MINUTES"
};
/**
 * Check if a given object implements the SandboxTesterV2UpdateRequestDataAttributes interface.
 */
function instanceOfSandboxTesterV2UpdateRequestDataAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function SandboxTesterV2UpdateRequestDataAttributesFromJSON(json) {
    return SandboxTesterV2UpdateRequestDataAttributesFromJSONTyped(json, false);
}
function SandboxTesterV2UpdateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        territory: !(0, runtime_1.exists)(json, "territory") ? undefined : (0, TerritoryCode_1.TerritoryCodeFromJSON)(json["territory"]),
        interruptPurchases: !(0, runtime_1.exists)(json, "interruptPurchases") ? undefined : json["interruptPurchases"],
        subscriptionRenewalRate: !(0, runtime_1.exists)(json, "subscriptionRenewalRate") ? undefined : json["subscriptionRenewalRate"]
    };
}
function SandboxTesterV2UpdateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        territory: (0, TerritoryCode_1.TerritoryCodeToJSON)(value.territory),
        interruptPurchases: value.interruptPurchases,
        subscriptionRenewalRate: value.subscriptionRenewalRate
    };
}
