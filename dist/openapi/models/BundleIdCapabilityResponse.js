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
exports.instanceOfBundleIdCapabilityResponse = instanceOfBundleIdCapabilityResponse;
exports.BundleIdCapabilityResponseFromJSON = BundleIdCapabilityResponseFromJSON;
exports.BundleIdCapabilityResponseFromJSONTyped = BundleIdCapabilityResponseFromJSONTyped;
exports.BundleIdCapabilityResponseToJSON = BundleIdCapabilityResponseToJSON;
const BundleIdCapability_1 = require("./BundleIdCapability");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the BundleIdCapabilityResponse interface.
 */
function instanceOfBundleIdCapabilityResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function BundleIdCapabilityResponseFromJSON(json) {
    return BundleIdCapabilityResponseFromJSONTyped(json, false);
}
function BundleIdCapabilityResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BundleIdCapability_1.BundleIdCapabilityFromJSON)(json["data"]),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function BundleIdCapabilityResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BundleIdCapability_1.BundleIdCapabilityToJSON)(value.data),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
