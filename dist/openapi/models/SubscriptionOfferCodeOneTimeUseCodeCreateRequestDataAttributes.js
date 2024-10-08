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
exports.instanceOfSubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributes = instanceOfSubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributes;
exports.SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributesFromJSON = SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributesFromJSON;
exports.SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributesFromJSONTyped = SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributesFromJSONTyped;
exports.SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributesToJSON = SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributesToJSON;
/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributes interface.
 */
function instanceOfSubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "numberOfCodes" in value;
    isInstance = isInstance && "expirationDate" in value;
    return isInstance;
}
function SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributesFromJSON(json) {
    return SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributesFromJSONTyped(json, false);
}
function SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        numberOfCodes: json["numberOfCodes"],
        expirationDate: new Date(json["expirationDate"])
    };
}
function SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        numberOfCodes: value.numberOfCodes,
        expirationDate: value.expirationDate.toISOString().substr(0, 10)
    };
}
