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
exports.instanceOfSubscriptionOfferCodeOneTimeUseCodeAttributes = instanceOfSubscriptionOfferCodeOneTimeUseCodeAttributes;
exports.SubscriptionOfferCodeOneTimeUseCodeAttributesFromJSON = SubscriptionOfferCodeOneTimeUseCodeAttributesFromJSON;
exports.SubscriptionOfferCodeOneTimeUseCodeAttributesFromJSONTyped = SubscriptionOfferCodeOneTimeUseCodeAttributesFromJSONTyped;
exports.SubscriptionOfferCodeOneTimeUseCodeAttributesToJSON = SubscriptionOfferCodeOneTimeUseCodeAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodeAttributes interface.
 */
function instanceOfSubscriptionOfferCodeOneTimeUseCodeAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function SubscriptionOfferCodeOneTimeUseCodeAttributesFromJSON(json) {
    return SubscriptionOfferCodeOneTimeUseCodeAttributesFromJSONTyped(json, false);
}
function SubscriptionOfferCodeOneTimeUseCodeAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        numberOfCodes: !(0, runtime_1.exists)(json, "numberOfCodes") ? undefined : json["numberOfCodes"],
        createdDate: !(0, runtime_1.exists)(json, "createdDate") ? undefined : new Date(json["createdDate"]),
        expirationDate: !(0, runtime_1.exists)(json, "expirationDate") ? undefined : new Date(json["expirationDate"]),
        active: !(0, runtime_1.exists)(json, "active") ? undefined : json["active"]
    };
}
function SubscriptionOfferCodeOneTimeUseCodeAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        numberOfCodes: value.numberOfCodes,
        createdDate: value.createdDate === undefined ? undefined : value.createdDate.toISOString(),
        expirationDate: value.expirationDate === undefined ? undefined : value.expirationDate.toISOString().substr(0, 10),
        active: value.active
    };
}
