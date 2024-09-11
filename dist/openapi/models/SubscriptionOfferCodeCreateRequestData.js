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
exports.SubscriptionOfferCodeCreateRequestDataTypeEnum = void 0;
exports.instanceOfSubscriptionOfferCodeCreateRequestData = instanceOfSubscriptionOfferCodeCreateRequestData;
exports.SubscriptionOfferCodeCreateRequestDataFromJSON = SubscriptionOfferCodeCreateRequestDataFromJSON;
exports.SubscriptionOfferCodeCreateRequestDataFromJSONTyped = SubscriptionOfferCodeCreateRequestDataFromJSONTyped;
exports.SubscriptionOfferCodeCreateRequestDataToJSON = SubscriptionOfferCodeCreateRequestDataToJSON;
const SubscriptionOfferCodeCreateRequestDataAttributes_1 = require("./SubscriptionOfferCodeCreateRequestDataAttributes");
const SubscriptionOfferCodeCreateRequestDataRelationships_1 = require("./SubscriptionOfferCodeCreateRequestDataRelationships");
/**
 * @export
 */
exports.SubscriptionOfferCodeCreateRequestDataTypeEnum = {
    SubscriptionOfferCodes: "subscriptionOfferCodes"
};
/**
 * Check if a given object implements the SubscriptionOfferCodeCreateRequestData interface.
 */
function instanceOfSubscriptionOfferCodeCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function SubscriptionOfferCodeCreateRequestDataFromJSON(json) {
    return SubscriptionOfferCodeCreateRequestDataFromJSONTyped(json, false);
}
function SubscriptionOfferCodeCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, SubscriptionOfferCodeCreateRequestDataAttributes_1.SubscriptionOfferCodeCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, SubscriptionOfferCodeCreateRequestDataRelationships_1.SubscriptionOfferCodeCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function SubscriptionOfferCodeCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, SubscriptionOfferCodeCreateRequestDataAttributes_1.SubscriptionOfferCodeCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, SubscriptionOfferCodeCreateRequestDataRelationships_1.SubscriptionOfferCodeCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
