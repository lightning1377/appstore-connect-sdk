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
exports.SubscriptionCreateRequestDataAttributesSubscriptionPeriodEnum = void 0;
exports.instanceOfSubscriptionCreateRequestDataAttributes = instanceOfSubscriptionCreateRequestDataAttributes;
exports.SubscriptionCreateRequestDataAttributesFromJSON = SubscriptionCreateRequestDataAttributesFromJSON;
exports.SubscriptionCreateRequestDataAttributesFromJSONTyped = SubscriptionCreateRequestDataAttributesFromJSONTyped;
exports.SubscriptionCreateRequestDataAttributesToJSON = SubscriptionCreateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.SubscriptionCreateRequestDataAttributesSubscriptionPeriodEnum = {
    OneWeek: "ONE_WEEK",
    OneMonth: "ONE_MONTH",
    TwoMonths: "TWO_MONTHS",
    ThreeMonths: "THREE_MONTHS",
    SixMonths: "SIX_MONTHS",
    OneYear: "ONE_YEAR"
};
/**
 * Check if a given object implements the SubscriptionCreateRequestDataAttributes interface.
 */
function instanceOfSubscriptionCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "productId" in value;
    return isInstance;
}
function SubscriptionCreateRequestDataAttributesFromJSON(json) {
    return SubscriptionCreateRequestDataAttributesFromJSONTyped(json, false);
}
function SubscriptionCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: json["name"],
        productId: json["productId"],
        familySharable: !(0, runtime_1.exists)(json, "familySharable") ? undefined : json["familySharable"],
        subscriptionPeriod: !(0, runtime_1.exists)(json, "subscriptionPeriod") ? undefined : json["subscriptionPeriod"],
        reviewNote: !(0, runtime_1.exists)(json, "reviewNote") ? undefined : json["reviewNote"],
        groupLevel: !(0, runtime_1.exists)(json, "groupLevel") ? undefined : json["groupLevel"]
    };
}
function SubscriptionCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        productId: value.productId,
        familySharable: value.familySharable,
        subscriptionPeriod: value.subscriptionPeriod,
        reviewNote: value.reviewNote,
        groupLevel: value.groupLevel
    };
}
