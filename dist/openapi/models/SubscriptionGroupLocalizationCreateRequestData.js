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
exports.SubscriptionGroupLocalizationCreateRequestDataTypeEnum = void 0;
exports.instanceOfSubscriptionGroupLocalizationCreateRequestData = instanceOfSubscriptionGroupLocalizationCreateRequestData;
exports.SubscriptionGroupLocalizationCreateRequestDataFromJSON = SubscriptionGroupLocalizationCreateRequestDataFromJSON;
exports.SubscriptionGroupLocalizationCreateRequestDataFromJSONTyped = SubscriptionGroupLocalizationCreateRequestDataFromJSONTyped;
exports.SubscriptionGroupLocalizationCreateRequestDataToJSON = SubscriptionGroupLocalizationCreateRequestDataToJSON;
const SubscriptionGroupLocalizationCreateRequestDataAttributes_1 = require("./SubscriptionGroupLocalizationCreateRequestDataAttributes");
const SubscriptionGroupLocalizationCreateRequestDataRelationships_1 = require("./SubscriptionGroupLocalizationCreateRequestDataRelationships");
/**
 * @export
 */
exports.SubscriptionGroupLocalizationCreateRequestDataTypeEnum = {
    SubscriptionGroupLocalizations: "subscriptionGroupLocalizations"
};
/**
 * Check if a given object implements the SubscriptionGroupLocalizationCreateRequestData interface.
 */
function instanceOfSubscriptionGroupLocalizationCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function SubscriptionGroupLocalizationCreateRequestDataFromJSON(json) {
    return SubscriptionGroupLocalizationCreateRequestDataFromJSONTyped(json, false);
}
function SubscriptionGroupLocalizationCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, SubscriptionGroupLocalizationCreateRequestDataAttributes_1.SubscriptionGroupLocalizationCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, SubscriptionGroupLocalizationCreateRequestDataRelationships_1.SubscriptionGroupLocalizationCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function SubscriptionGroupLocalizationCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, SubscriptionGroupLocalizationCreateRequestDataAttributes_1.SubscriptionGroupLocalizationCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, SubscriptionGroupLocalizationCreateRequestDataRelationships_1.SubscriptionGroupLocalizationCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
