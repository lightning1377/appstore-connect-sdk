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
exports.InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum = void 0;
exports.instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequestData = instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequestData;
exports.InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSON = InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSON;
exports.InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped = InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped;
exports.InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSON = InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSON;
const runtime_1 = require("../runtime");
const AppClipAdvancedExperienceImageUpdateRequestDataAttributes_1 = require("./AppClipAdvancedExperienceImageUpdateRequestDataAttributes");
/**
 * @export
 */
exports.InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum = {
    InAppPurchaseAppStoreReviewScreenshots: "inAppPurchaseAppStoreReviewScreenshots"
};
/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotUpdateRequestData interface.
 */
function instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSON(json) {
    return InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped(json, false);
}
function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, AppClipAdvancedExperienceImageUpdateRequestDataAttributes_1.AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON)(json["attributes"])
    };
}
function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, AppClipAdvancedExperienceImageUpdateRequestDataAttributes_1.AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON)(value.attributes)
    };
}
