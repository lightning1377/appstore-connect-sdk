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
exports.instanceOfInAppPurchaseLocalizationResponse = instanceOfInAppPurchaseLocalizationResponse;
exports.InAppPurchaseLocalizationResponseFromJSON = InAppPurchaseLocalizationResponseFromJSON;
exports.InAppPurchaseLocalizationResponseFromJSONTyped = InAppPurchaseLocalizationResponseFromJSONTyped;
exports.InAppPurchaseLocalizationResponseToJSON = InAppPurchaseLocalizationResponseToJSON;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const InAppPurchaseLocalization_1 = require("./InAppPurchaseLocalization");
const InAppPurchaseV2_1 = require("./InAppPurchaseV2");
/**
 * Check if a given object implements the InAppPurchaseLocalizationResponse interface.
 */
function instanceOfInAppPurchaseLocalizationResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function InAppPurchaseLocalizationResponseFromJSON(json) {
    return InAppPurchaseLocalizationResponseFromJSONTyped(json, false);
}
function InAppPurchaseLocalizationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, InAppPurchaseLocalization_1.InAppPurchaseLocalizationFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(InAppPurchaseV2_1.InAppPurchaseV2FromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function InAppPurchaseLocalizationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, InAppPurchaseLocalization_1.InAppPurchaseLocalizationToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(InAppPurchaseV2_1.InAppPurchaseV2ToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
