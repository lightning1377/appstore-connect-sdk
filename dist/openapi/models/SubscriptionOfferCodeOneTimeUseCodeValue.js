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
exports.SubscriptionOfferCodeOneTimeUseCodeValueTypeEnum = void 0;
exports.instanceOfSubscriptionOfferCodeOneTimeUseCodeValue = instanceOfSubscriptionOfferCodeOneTimeUseCodeValue;
exports.SubscriptionOfferCodeOneTimeUseCodeValueFromJSON = SubscriptionOfferCodeOneTimeUseCodeValueFromJSON;
exports.SubscriptionOfferCodeOneTimeUseCodeValueFromJSONTyped = SubscriptionOfferCodeOneTimeUseCodeValueFromJSONTyped;
exports.SubscriptionOfferCodeOneTimeUseCodeValueToJSON = SubscriptionOfferCodeOneTimeUseCodeValueToJSON;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.SubscriptionOfferCodeOneTimeUseCodeValueTypeEnum = {
    SubscriptionOfferCodeOneTimeUseCodeValues: "subscriptionOfferCodeOneTimeUseCodeValues"
};
/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodeValue interface.
 */
function instanceOfSubscriptionOfferCodeOneTimeUseCodeValue(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function SubscriptionOfferCodeOneTimeUseCodeValueFromJSON(json) {
    return SubscriptionOfferCodeOneTimeUseCodeValueFromJSONTyped(json, false);
}
function SubscriptionOfferCodeOneTimeUseCodeValueFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function SubscriptionOfferCodeOneTimeUseCodeValueToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
