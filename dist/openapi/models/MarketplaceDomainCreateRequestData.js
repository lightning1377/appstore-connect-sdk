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
exports.MarketplaceDomainCreateRequestDataTypeEnum = void 0;
exports.instanceOfMarketplaceDomainCreateRequestData = instanceOfMarketplaceDomainCreateRequestData;
exports.MarketplaceDomainCreateRequestDataFromJSON = MarketplaceDomainCreateRequestDataFromJSON;
exports.MarketplaceDomainCreateRequestDataFromJSONTyped = MarketplaceDomainCreateRequestDataFromJSONTyped;
exports.MarketplaceDomainCreateRequestDataToJSON = MarketplaceDomainCreateRequestDataToJSON;
const AlternativeDistributionDomainCreateRequestDataAttributes_1 = require("./AlternativeDistributionDomainCreateRequestDataAttributes");
/**
 * @export
 */
exports.MarketplaceDomainCreateRequestDataTypeEnum = {
    MarketplaceDomains: "marketplaceDomains"
};
/**
 * Check if a given object implements the MarketplaceDomainCreateRequestData interface.
 */
function instanceOfMarketplaceDomainCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    return isInstance;
}
function MarketplaceDomainCreateRequestDataFromJSON(json) {
    return MarketplaceDomainCreateRequestDataFromJSONTyped(json, false);
}
function MarketplaceDomainCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AlternativeDistributionDomainCreateRequestDataAttributes_1.AlternativeDistributionDomainCreateRequestDataAttributesFromJSON)(json["attributes"])
    };
}
function MarketplaceDomainCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, AlternativeDistributionDomainCreateRequestDataAttributes_1.AlternativeDistributionDomainCreateRequestDataAttributesToJSON)(value.attributes)
    };
}
