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
exports.instanceOfAppClipAppStoreReviewDetailAttributes = instanceOfAppClipAppStoreReviewDetailAttributes;
exports.AppClipAppStoreReviewDetailAttributesFromJSON = AppClipAppStoreReviewDetailAttributesFromJSON;
exports.AppClipAppStoreReviewDetailAttributesFromJSONTyped = AppClipAppStoreReviewDetailAttributesFromJSONTyped;
exports.AppClipAppStoreReviewDetailAttributesToJSON = AppClipAppStoreReviewDetailAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AppClipAppStoreReviewDetailAttributes interface.
 */
function instanceOfAppClipAppStoreReviewDetailAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppClipAppStoreReviewDetailAttributesFromJSON(json) {
    return AppClipAppStoreReviewDetailAttributesFromJSONTyped(json, false);
}
function AppClipAppStoreReviewDetailAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        invocationUrls: !(0, runtime_1.exists)(json, "invocationUrls") ? undefined : json["invocationUrls"]
    };
}
function AppClipAppStoreReviewDetailAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        invocationUrls: value.invocationUrls
    };
}
