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
exports.instanceOfAppStoreReviewDetailResponse = instanceOfAppStoreReviewDetailResponse;
exports.AppStoreReviewDetailResponseFromJSON = AppStoreReviewDetailResponseFromJSON;
exports.AppStoreReviewDetailResponseFromJSONTyped = AppStoreReviewDetailResponseFromJSONTyped;
exports.AppStoreReviewDetailResponseToJSON = AppStoreReviewDetailResponseToJSON;
const runtime_1 = require("../runtime");
const AppStoreReviewDetail_1 = require("./AppStoreReviewDetail");
const AppStoreReviewDetailResponseIncludedInner_1 = require("./AppStoreReviewDetailResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppStoreReviewDetailResponse interface.
 */
function instanceOfAppStoreReviewDetailResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppStoreReviewDetailResponseFromJSON(json) {
    return AppStoreReviewDetailResponseFromJSONTyped(json, false);
}
function AppStoreReviewDetailResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppStoreReviewDetail_1.AppStoreReviewDetailFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppStoreReviewDetailResponseIncludedInner_1.AppStoreReviewDetailResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AppStoreReviewDetailResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppStoreReviewDetail_1.AppStoreReviewDetailToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(AppStoreReviewDetailResponseIncludedInner_1.AppStoreReviewDetailResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
