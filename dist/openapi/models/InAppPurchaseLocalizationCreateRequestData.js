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
exports.InAppPurchaseLocalizationCreateRequestDataTypeEnum = void 0;
exports.instanceOfInAppPurchaseLocalizationCreateRequestData = instanceOfInAppPurchaseLocalizationCreateRequestData;
exports.InAppPurchaseLocalizationCreateRequestDataFromJSON = InAppPurchaseLocalizationCreateRequestDataFromJSON;
exports.InAppPurchaseLocalizationCreateRequestDataFromJSONTyped = InAppPurchaseLocalizationCreateRequestDataFromJSONTyped;
exports.InAppPurchaseLocalizationCreateRequestDataToJSON = InAppPurchaseLocalizationCreateRequestDataToJSON;
const InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships_1 = require("./InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships");
const InAppPurchaseLocalizationCreateRequestDataAttributes_1 = require("./InAppPurchaseLocalizationCreateRequestDataAttributes");
/**
 * @export
 */
exports.InAppPurchaseLocalizationCreateRequestDataTypeEnum = {
    InAppPurchaseLocalizations: "inAppPurchaseLocalizations"
};
/**
 * Check if a given object implements the InAppPurchaseLocalizationCreateRequestData interface.
 */
function instanceOfInAppPurchaseLocalizationCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function InAppPurchaseLocalizationCreateRequestDataFromJSON(json) {
    return InAppPurchaseLocalizationCreateRequestDataFromJSONTyped(json, false);
}
function InAppPurchaseLocalizationCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, InAppPurchaseLocalizationCreateRequestDataAttributes_1.InAppPurchaseLocalizationCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships_1.InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function InAppPurchaseLocalizationCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, InAppPurchaseLocalizationCreateRequestDataAttributes_1.InAppPurchaseLocalizationCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships_1.InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
