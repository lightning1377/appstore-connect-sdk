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
exports.instanceOfAppClipAppStoreReviewDetailResponse = instanceOfAppClipAppStoreReviewDetailResponse;
exports.AppClipAppStoreReviewDetailResponseFromJSON = AppClipAppStoreReviewDetailResponseFromJSON;
exports.AppClipAppStoreReviewDetailResponseFromJSONTyped = AppClipAppStoreReviewDetailResponseFromJSONTyped;
exports.AppClipAppStoreReviewDetailResponseToJSON = AppClipAppStoreReviewDetailResponseToJSON;
const runtime_1 = require("../runtime");
const AppClipAppStoreReviewDetail_1 = require("./AppClipAppStoreReviewDetail");
const AppClipDefaultExperience_1 = require("./AppClipDefaultExperience");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppClipAppStoreReviewDetailResponse interface.
 */
function instanceOfAppClipAppStoreReviewDetailResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppClipAppStoreReviewDetailResponseFromJSON(json) {
    return AppClipAppStoreReviewDetailResponseFromJSONTyped(json, false);
}
function AppClipAppStoreReviewDetailResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppClipAppStoreReviewDetail_1.AppClipAppStoreReviewDetailFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppClipDefaultExperience_1.AppClipDefaultExperienceFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AppClipAppStoreReviewDetailResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppClipAppStoreReviewDetail_1.AppClipAppStoreReviewDetailToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(AppClipDefaultExperience_1.AppClipDefaultExperienceToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
