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
exports.instanceOfSubscriptionOfferCodeCustomCodeCreateRequestDataRelationships = instanceOfSubscriptionOfferCodeCustomCodeCreateRequestDataRelationships;
exports.SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsFromJSON = SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsFromJSON;
exports.SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsFromJSONTyped = SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsFromJSONTyped;
exports.SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsToJSON = SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsToJSON;
const SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode_1 = require("./SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode");
/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeCreateRequestDataRelationships interface.
 */
function instanceOfSubscriptionOfferCodeCustomCodeCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "offerCode" in value;
    return isInstance;
}
function SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsFromJSON(json) {
    return SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        offerCode: (0, SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode_1.SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCodeFromJSON)(json["offerCode"])
    };
}
function SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        offerCode: (0, SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode_1.SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCodeToJSON)(value.offerCode)
    };
}
