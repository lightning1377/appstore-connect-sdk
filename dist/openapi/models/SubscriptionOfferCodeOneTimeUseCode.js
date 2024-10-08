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
exports.SubscriptionOfferCodeOneTimeUseCodeTypeEnum = void 0;
exports.instanceOfSubscriptionOfferCodeOneTimeUseCode = instanceOfSubscriptionOfferCodeOneTimeUseCode;
exports.SubscriptionOfferCodeOneTimeUseCodeFromJSON = SubscriptionOfferCodeOneTimeUseCodeFromJSON;
exports.SubscriptionOfferCodeOneTimeUseCodeFromJSONTyped = SubscriptionOfferCodeOneTimeUseCodeFromJSONTyped;
exports.SubscriptionOfferCodeOneTimeUseCodeToJSON = SubscriptionOfferCodeOneTimeUseCodeToJSON;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
const SubscriptionOfferCodeCustomCodeRelationships_1 = require("./SubscriptionOfferCodeCustomCodeRelationships");
const SubscriptionOfferCodeOneTimeUseCodeAttributes_1 = require("./SubscriptionOfferCodeOneTimeUseCodeAttributes");
/**
 * @export
 */
exports.SubscriptionOfferCodeOneTimeUseCodeTypeEnum = {
    SubscriptionOfferCodeOneTimeUseCodes: "subscriptionOfferCodeOneTimeUseCodes"
};
/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCode interface.
 */
function instanceOfSubscriptionOfferCodeOneTimeUseCode(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function SubscriptionOfferCodeOneTimeUseCodeFromJSON(json) {
    return SubscriptionOfferCodeOneTimeUseCodeFromJSONTyped(json, false);
}
function SubscriptionOfferCodeOneTimeUseCodeFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, SubscriptionOfferCodeOneTimeUseCodeAttributes_1.SubscriptionOfferCodeOneTimeUseCodeAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, SubscriptionOfferCodeCustomCodeRelationships_1.SubscriptionOfferCodeCustomCodeRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function SubscriptionOfferCodeOneTimeUseCodeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, SubscriptionOfferCodeOneTimeUseCodeAttributes_1.SubscriptionOfferCodeOneTimeUseCodeAttributesToJSON)(value.attributes),
        relationships: (0, SubscriptionOfferCodeCustomCodeRelationships_1.SubscriptionOfferCodeCustomCodeRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
