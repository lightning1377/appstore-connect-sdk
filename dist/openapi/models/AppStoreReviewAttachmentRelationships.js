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
exports.instanceOfAppStoreReviewAttachmentRelationships = instanceOfAppStoreReviewAttachmentRelationships;
exports.AppStoreReviewAttachmentRelationshipsFromJSON = AppStoreReviewAttachmentRelationshipsFromJSON;
exports.AppStoreReviewAttachmentRelationshipsFromJSONTyped = AppStoreReviewAttachmentRelationshipsFromJSONTyped;
exports.AppStoreReviewAttachmentRelationshipsToJSON = AppStoreReviewAttachmentRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail_1 = require("./AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail");
/**
 * Check if a given object implements the AppStoreReviewAttachmentRelationships interface.
 */
function instanceOfAppStoreReviewAttachmentRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppStoreReviewAttachmentRelationshipsFromJSON(json) {
    return AppStoreReviewAttachmentRelationshipsFromJSONTyped(json, false);
}
function AppStoreReviewAttachmentRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appStoreReviewDetail: !(0, runtime_1.exists)(json, "appStoreReviewDetail") ? undefined : (0, AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail_1.AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailFromJSON)(json["appStoreReviewDetail"])
    };
}
function AppStoreReviewAttachmentRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appStoreReviewDetail: (0, AppStoreReviewAttachmentRelationshipsAppStoreReviewDetail_1.AppStoreReviewAttachmentRelationshipsAppStoreReviewDetailToJSON)(value.appStoreReviewDetail)
    };
}
