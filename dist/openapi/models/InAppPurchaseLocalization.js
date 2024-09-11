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
exports.InAppPurchaseLocalizationTypeEnum = void 0;
exports.instanceOfInAppPurchaseLocalization = instanceOfInAppPurchaseLocalization;
exports.InAppPurchaseLocalizationFromJSON = InAppPurchaseLocalizationFromJSON;
exports.InAppPurchaseLocalizationFromJSONTyped = InAppPurchaseLocalizationFromJSONTyped;
exports.InAppPurchaseLocalizationToJSON = InAppPurchaseLocalizationToJSON;
const runtime_1 = require("../runtime");
const InAppPurchaseAppStoreReviewScreenshotRelationships_1 = require("./InAppPurchaseAppStoreReviewScreenshotRelationships");
const InAppPurchaseLocalizationAttributes_1 = require("./InAppPurchaseLocalizationAttributes");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.InAppPurchaseLocalizationTypeEnum = {
    InAppPurchaseLocalizations: "inAppPurchaseLocalizations"
};
/**
 * Check if a given object implements the InAppPurchaseLocalization interface.
 */
function instanceOfInAppPurchaseLocalization(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function InAppPurchaseLocalizationFromJSON(json) {
    return InAppPurchaseLocalizationFromJSONTyped(json, false);
}
function InAppPurchaseLocalizationFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, InAppPurchaseLocalizationAttributes_1.InAppPurchaseLocalizationAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, InAppPurchaseAppStoreReviewScreenshotRelationships_1.InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function InAppPurchaseLocalizationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, InAppPurchaseLocalizationAttributes_1.InAppPurchaseLocalizationAttributesToJSON)(value.attributes),
        relationships: (0, InAppPurchaseAppStoreReviewScreenshotRelationships_1.InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
