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
exports.instanceOfMarketplaceDomainCreateRequest = instanceOfMarketplaceDomainCreateRequest;
exports.MarketplaceDomainCreateRequestFromJSON = MarketplaceDomainCreateRequestFromJSON;
exports.MarketplaceDomainCreateRequestFromJSONTyped = MarketplaceDomainCreateRequestFromJSONTyped;
exports.MarketplaceDomainCreateRequestToJSON = MarketplaceDomainCreateRequestToJSON;
const MarketplaceDomainCreateRequestData_1 = require("./MarketplaceDomainCreateRequestData");
/**
 * Check if a given object implements the MarketplaceDomainCreateRequest interface.
 */
function instanceOfMarketplaceDomainCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function MarketplaceDomainCreateRequestFromJSON(json) {
    return MarketplaceDomainCreateRequestFromJSONTyped(json, false);
}
function MarketplaceDomainCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, MarketplaceDomainCreateRequestData_1.MarketplaceDomainCreateRequestDataFromJSON)(json["data"])
    };
}
function MarketplaceDomainCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, MarketplaceDomainCreateRequestData_1.MarketplaceDomainCreateRequestDataToJSON)(value.data)
    };
}
