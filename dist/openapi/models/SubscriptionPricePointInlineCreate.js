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
exports.SubscriptionPricePointInlineCreateTypeEnum = void 0;
exports.instanceOfSubscriptionPricePointInlineCreate = instanceOfSubscriptionPricePointInlineCreate;
exports.SubscriptionPricePointInlineCreateFromJSON = SubscriptionPricePointInlineCreateFromJSON;
exports.SubscriptionPricePointInlineCreateFromJSONTyped = SubscriptionPricePointInlineCreateFromJSONTyped;
exports.SubscriptionPricePointInlineCreateToJSON = SubscriptionPricePointInlineCreateToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.SubscriptionPricePointInlineCreateTypeEnum = {
    SubscriptionPricePoints: "subscriptionPricePoints"
};
/**
 * Check if a given object implements the SubscriptionPricePointInlineCreate interface.
 */
function instanceOfSubscriptionPricePointInlineCreate(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
function SubscriptionPricePointInlineCreateFromJSON(json) {
    return SubscriptionPricePointInlineCreateFromJSONTyped(json, false);
}
function SubscriptionPricePointInlineCreateFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: !(0, runtime_1.exists)(json, "id") ? undefined : json["id"]
    };
}
function SubscriptionPricePointInlineCreateToJSON(value) {
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
