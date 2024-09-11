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
exports.instanceOfSubscriptionUpdateRequestDataRelationshipsPrices = instanceOfSubscriptionUpdateRequestDataRelationshipsPrices;
exports.SubscriptionUpdateRequestDataRelationshipsPricesFromJSON = SubscriptionUpdateRequestDataRelationshipsPricesFromJSON;
exports.SubscriptionUpdateRequestDataRelationshipsPricesFromJSONTyped = SubscriptionUpdateRequestDataRelationshipsPricesFromJSONTyped;
exports.SubscriptionUpdateRequestDataRelationshipsPricesToJSON = SubscriptionUpdateRequestDataRelationshipsPricesToJSON;
const runtime_1 = require("../runtime");
const SubscriptionRelationshipsPricesDataInner_1 = require("./SubscriptionRelationshipsPricesDataInner");
/**
 * Check if a given object implements the SubscriptionUpdateRequestDataRelationshipsPrices interface.
 */
function instanceOfSubscriptionUpdateRequestDataRelationshipsPrices(value) {
    let isInstance = true;
    return isInstance;
}
function SubscriptionUpdateRequestDataRelationshipsPricesFromJSON(json) {
    return SubscriptionUpdateRequestDataRelationshipsPricesFromJSONTyped(json, false);
}
function SubscriptionUpdateRequestDataRelationshipsPricesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !(0, runtime_1.exists)(json, "data") ? undefined : json["data"].map(SubscriptionRelationshipsPricesDataInner_1.SubscriptionRelationshipsPricesDataInnerFromJSON)
    };
}
function SubscriptionUpdateRequestDataRelationshipsPricesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data === undefined ? undefined : value.data.map(SubscriptionRelationshipsPricesDataInner_1.SubscriptionRelationshipsPricesDataInnerToJSON)
    };
}
