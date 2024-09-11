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
exports.AlternativeDistributionDomainCreateRequestDataTypeEnum = void 0;
exports.instanceOfAlternativeDistributionDomainCreateRequestData = instanceOfAlternativeDistributionDomainCreateRequestData;
exports.AlternativeDistributionDomainCreateRequestDataFromJSON = AlternativeDistributionDomainCreateRequestDataFromJSON;
exports.AlternativeDistributionDomainCreateRequestDataFromJSONTyped = AlternativeDistributionDomainCreateRequestDataFromJSONTyped;
exports.AlternativeDistributionDomainCreateRequestDataToJSON = AlternativeDistributionDomainCreateRequestDataToJSON;
const AlternativeDistributionDomainCreateRequestDataAttributes_1 = require("./AlternativeDistributionDomainCreateRequestDataAttributes");
/**
 * @export
 */
exports.AlternativeDistributionDomainCreateRequestDataTypeEnum = {
    AlternativeDistributionDomains: "alternativeDistributionDomains"
};
/**
 * Check if a given object implements the AlternativeDistributionDomainCreateRequestData interface.
 */
function instanceOfAlternativeDistributionDomainCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    return isInstance;
}
function AlternativeDistributionDomainCreateRequestDataFromJSON(json) {
    return AlternativeDistributionDomainCreateRequestDataFromJSONTyped(json, false);
}
function AlternativeDistributionDomainCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AlternativeDistributionDomainCreateRequestDataAttributes_1.AlternativeDistributionDomainCreateRequestDataAttributesFromJSON)(json["attributes"])
    };
}
function AlternativeDistributionDomainCreateRequestDataToJSON(value) {
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
