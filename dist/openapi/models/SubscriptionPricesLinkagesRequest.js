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
exports.instanceOfSubscriptionPricesLinkagesRequest = instanceOfSubscriptionPricesLinkagesRequest;
exports.SubscriptionPricesLinkagesRequestFromJSON = SubscriptionPricesLinkagesRequestFromJSON;
exports.SubscriptionPricesLinkagesRequestFromJSONTyped = SubscriptionPricesLinkagesRequestFromJSONTyped;
exports.SubscriptionPricesLinkagesRequestToJSON = SubscriptionPricesLinkagesRequestToJSON;
const SubscriptionRelationshipsPricesDataInner_1 = require("./SubscriptionRelationshipsPricesDataInner");
/**
 * Check if a given object implements the SubscriptionPricesLinkagesRequest interface.
 */
function instanceOfSubscriptionPricesLinkagesRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function SubscriptionPricesLinkagesRequestFromJSON(json) {
    return SubscriptionPricesLinkagesRequestFromJSONTyped(json, false);
}
function SubscriptionPricesLinkagesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(SubscriptionRelationshipsPricesDataInner_1.SubscriptionRelationshipsPricesDataInnerFromJSON)
    };
}
function SubscriptionPricesLinkagesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(SubscriptionRelationshipsPricesDataInner_1.SubscriptionRelationshipsPricesDataInnerToJSON)
    };
}
