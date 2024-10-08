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
exports.PromotedPurchaseRelationshipsSubscriptionDataTypeEnum = void 0;
exports.instanceOfPromotedPurchaseRelationshipsSubscriptionData = instanceOfPromotedPurchaseRelationshipsSubscriptionData;
exports.PromotedPurchaseRelationshipsSubscriptionDataFromJSON = PromotedPurchaseRelationshipsSubscriptionDataFromJSON;
exports.PromotedPurchaseRelationshipsSubscriptionDataFromJSONTyped = PromotedPurchaseRelationshipsSubscriptionDataFromJSONTyped;
exports.PromotedPurchaseRelationshipsSubscriptionDataToJSON = PromotedPurchaseRelationshipsSubscriptionDataToJSON;
/**
 * @export
 */
exports.PromotedPurchaseRelationshipsSubscriptionDataTypeEnum = {
    Subscriptions: "subscriptions"
};
/**
 * Check if a given object implements the PromotedPurchaseRelationshipsSubscriptionData interface.
 */
function instanceOfPromotedPurchaseRelationshipsSubscriptionData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function PromotedPurchaseRelationshipsSubscriptionDataFromJSON(json) {
    return PromotedPurchaseRelationshipsSubscriptionDataFromJSONTyped(json, false);
}
function PromotedPurchaseRelationshipsSubscriptionDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}
function PromotedPurchaseRelationshipsSubscriptionDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id
    };
}
