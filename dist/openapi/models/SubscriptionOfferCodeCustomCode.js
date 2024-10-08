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
exports.SubscriptionOfferCodeCustomCodeTypeEnum = void 0;
exports.instanceOfSubscriptionOfferCodeCustomCode = instanceOfSubscriptionOfferCodeCustomCode;
exports.SubscriptionOfferCodeCustomCodeFromJSON = SubscriptionOfferCodeCustomCodeFromJSON;
exports.SubscriptionOfferCodeCustomCodeFromJSONTyped = SubscriptionOfferCodeCustomCodeFromJSONTyped;
exports.SubscriptionOfferCodeCustomCodeToJSON = SubscriptionOfferCodeCustomCodeToJSON;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
const SubscriptionOfferCodeCustomCodeAttributes_1 = require("./SubscriptionOfferCodeCustomCodeAttributes");
const SubscriptionOfferCodeCustomCodeRelationships_1 = require("./SubscriptionOfferCodeCustomCodeRelationships");
/**
 * @export
 */
exports.SubscriptionOfferCodeCustomCodeTypeEnum = {
    SubscriptionOfferCodeCustomCodes: "subscriptionOfferCodeCustomCodes"
};
/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCode interface.
 */
function instanceOfSubscriptionOfferCodeCustomCode(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function SubscriptionOfferCodeCustomCodeFromJSON(json) {
    return SubscriptionOfferCodeCustomCodeFromJSONTyped(json, false);
}
function SubscriptionOfferCodeCustomCodeFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, SubscriptionOfferCodeCustomCodeAttributes_1.SubscriptionOfferCodeCustomCodeAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, SubscriptionOfferCodeCustomCodeRelationships_1.SubscriptionOfferCodeCustomCodeRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function SubscriptionOfferCodeCustomCodeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, SubscriptionOfferCodeCustomCodeAttributes_1.SubscriptionOfferCodeCustomCodeAttributesToJSON)(value.attributes),
        relationships: (0, SubscriptionOfferCodeCustomCodeRelationships_1.SubscriptionOfferCodeCustomCodeRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
