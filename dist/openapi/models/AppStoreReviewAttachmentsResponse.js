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
exports.instanceOfAppStoreReviewAttachmentsResponse = instanceOfAppStoreReviewAttachmentsResponse;
exports.AppStoreReviewAttachmentsResponseFromJSON = AppStoreReviewAttachmentsResponseFromJSON;
exports.AppStoreReviewAttachmentsResponseFromJSONTyped = AppStoreReviewAttachmentsResponseFromJSONTyped;
exports.AppStoreReviewAttachmentsResponseToJSON = AppStoreReviewAttachmentsResponseToJSON;
const runtime_1 = require("../runtime");
const AppStoreReviewAttachment_1 = require("./AppStoreReviewAttachment");
const AppStoreReviewDetail_1 = require("./AppStoreReviewDetail");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppStoreReviewAttachmentsResponse interface.
 */
function instanceOfAppStoreReviewAttachmentsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppStoreReviewAttachmentsResponseFromJSON(json) {
    return AppStoreReviewAttachmentsResponseFromJSONTyped(json, false);
}
function AppStoreReviewAttachmentsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(AppStoreReviewAttachment_1.AppStoreReviewAttachmentFromJSON),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppStoreReviewDetail_1.AppStoreReviewDetailFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function AppStoreReviewAttachmentsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(AppStoreReviewAttachment_1.AppStoreReviewAttachmentToJSON),
        included: value.included === undefined ? undefined : value.included.map(AppStoreReviewDetail_1.AppStoreReviewDetailToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
