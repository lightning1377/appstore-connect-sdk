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
exports.SubscriptionPromotionalOfferTypeEnum = void 0;
exports.instanceOfSubscriptionPromotionalOffer = instanceOfSubscriptionPromotionalOffer;
exports.SubscriptionPromotionalOfferFromJSON = SubscriptionPromotionalOfferFromJSON;
exports.SubscriptionPromotionalOfferFromJSONTyped = SubscriptionPromotionalOfferFromJSONTyped;
exports.SubscriptionPromotionalOfferToJSON = SubscriptionPromotionalOfferToJSON;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
const SubscriptionPromotionalOfferAttributes_1 = require("./SubscriptionPromotionalOfferAttributes");
const SubscriptionPromotionalOfferRelationships_1 = require("./SubscriptionPromotionalOfferRelationships");
/**
 * @export
 */
exports.SubscriptionPromotionalOfferTypeEnum = {
    SubscriptionPromotionalOffers: "subscriptionPromotionalOffers"
};
/**
 * Check if a given object implements the SubscriptionPromotionalOffer interface.
 */
function instanceOfSubscriptionPromotionalOffer(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function SubscriptionPromotionalOfferFromJSON(json) {
    return SubscriptionPromotionalOfferFromJSONTyped(json, false);
}
function SubscriptionPromotionalOfferFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, SubscriptionPromotionalOfferAttributes_1.SubscriptionPromotionalOfferAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, SubscriptionPromotionalOfferRelationships_1.SubscriptionPromotionalOfferRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function SubscriptionPromotionalOfferToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, SubscriptionPromotionalOfferAttributes_1.SubscriptionPromotionalOfferAttributesToJSON)(value.attributes),
        relationships: (0, SubscriptionPromotionalOfferRelationships_1.SubscriptionPromotionalOfferRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
