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
exports.SubscriptionGroupLocalizationAttributesStateEnum = void 0;
exports.instanceOfSubscriptionGroupLocalizationAttributes = instanceOfSubscriptionGroupLocalizationAttributes;
exports.SubscriptionGroupLocalizationAttributesFromJSON = SubscriptionGroupLocalizationAttributesFromJSON;
exports.SubscriptionGroupLocalizationAttributesFromJSONTyped = SubscriptionGroupLocalizationAttributesFromJSONTyped;
exports.SubscriptionGroupLocalizationAttributesToJSON = SubscriptionGroupLocalizationAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.SubscriptionGroupLocalizationAttributesStateEnum = {
    PrepareForSubmission: "PREPARE_FOR_SUBMISSION",
    WaitingForReview: "WAITING_FOR_REVIEW",
    Approved: "APPROVED",
    Rejected: "REJECTED"
};
/**
 * Check if a given object implements the SubscriptionGroupLocalizationAttributes interface.
 */
function instanceOfSubscriptionGroupLocalizationAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function SubscriptionGroupLocalizationAttributesFromJSON(json) {
    return SubscriptionGroupLocalizationAttributesFromJSONTyped(json, false);
}
function SubscriptionGroupLocalizationAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, "name") ? undefined : json["name"],
        customAppName: !(0, runtime_1.exists)(json, "customAppName") ? undefined : json["customAppName"],
        locale: !(0, runtime_1.exists)(json, "locale") ? undefined : json["locale"],
        state: !(0, runtime_1.exists)(json, "state") ? undefined : json["state"]
    };
}
function SubscriptionGroupLocalizationAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        customAppName: value.customAppName,
        locale: value.locale,
        state: value.state
    };
}
