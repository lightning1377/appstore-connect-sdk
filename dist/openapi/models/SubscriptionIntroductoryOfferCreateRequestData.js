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
exports.SubscriptionIntroductoryOfferCreateRequestDataTypeEnum = void 0;
exports.instanceOfSubscriptionIntroductoryOfferCreateRequestData = instanceOfSubscriptionIntroductoryOfferCreateRequestData;
exports.SubscriptionIntroductoryOfferCreateRequestDataFromJSON = SubscriptionIntroductoryOfferCreateRequestDataFromJSON;
exports.SubscriptionIntroductoryOfferCreateRequestDataFromJSONTyped = SubscriptionIntroductoryOfferCreateRequestDataFromJSONTyped;
exports.SubscriptionIntroductoryOfferCreateRequestDataToJSON = SubscriptionIntroductoryOfferCreateRequestDataToJSON;
const SubscriptionIntroductoryOfferCreateRequestDataRelationships_1 = require("./SubscriptionIntroductoryOfferCreateRequestDataRelationships");
const SubscriptionIntroductoryOfferInlineCreateAttributes_1 = require("./SubscriptionIntroductoryOfferInlineCreateAttributes");
/**
 * @export
 */
exports.SubscriptionIntroductoryOfferCreateRequestDataTypeEnum = {
    SubscriptionIntroductoryOffers: "subscriptionIntroductoryOffers"
};
/**
 * Check if a given object implements the SubscriptionIntroductoryOfferCreateRequestData interface.
 */
function instanceOfSubscriptionIntroductoryOfferCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function SubscriptionIntroductoryOfferCreateRequestDataFromJSON(json) {
    return SubscriptionIntroductoryOfferCreateRequestDataFromJSONTyped(json, false);
}
function SubscriptionIntroductoryOfferCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, SubscriptionIntroductoryOfferInlineCreateAttributes_1.SubscriptionIntroductoryOfferInlineCreateAttributesFromJSON)(json["attributes"]),
        relationships: (0, SubscriptionIntroductoryOfferCreateRequestDataRelationships_1.SubscriptionIntroductoryOfferCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function SubscriptionIntroductoryOfferCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, SubscriptionIntroductoryOfferInlineCreateAttributes_1.SubscriptionIntroductoryOfferInlineCreateAttributesToJSON)(value.attributes),
        relationships: (0, SubscriptionIntroductoryOfferCreateRequestDataRelationships_1.SubscriptionIntroductoryOfferCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
