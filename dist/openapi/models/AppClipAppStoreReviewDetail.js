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
exports.AppClipAppStoreReviewDetailTypeEnum = void 0;
exports.instanceOfAppClipAppStoreReviewDetail = instanceOfAppClipAppStoreReviewDetail;
exports.AppClipAppStoreReviewDetailFromJSON = AppClipAppStoreReviewDetailFromJSON;
exports.AppClipAppStoreReviewDetailFromJSONTyped = AppClipAppStoreReviewDetailFromJSONTyped;
exports.AppClipAppStoreReviewDetailToJSON = AppClipAppStoreReviewDetailToJSON;
const runtime_1 = require("../runtime");
const AppClipAppStoreReviewDetailAttributes_1 = require("./AppClipAppStoreReviewDetailAttributes");
const AppClipAppStoreReviewDetailRelationships_1 = require("./AppClipAppStoreReviewDetailRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.AppClipAppStoreReviewDetailTypeEnum = {
    AppClipAppStoreReviewDetails: "appClipAppStoreReviewDetails"
};
/**
 * Check if a given object implements the AppClipAppStoreReviewDetail interface.
 */
function instanceOfAppClipAppStoreReviewDetail(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppClipAppStoreReviewDetailFromJSON(json) {
    return AppClipAppStoreReviewDetailFromJSONTyped(json, false);
}
function AppClipAppStoreReviewDetailFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, AppClipAppStoreReviewDetailAttributes_1.AppClipAppStoreReviewDetailAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, AppClipAppStoreReviewDetailRelationships_1.AppClipAppStoreReviewDetailRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function AppClipAppStoreReviewDetailToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, AppClipAppStoreReviewDetailAttributes_1.AppClipAppStoreReviewDetailAttributesToJSON)(value.attributes),
        relationships: (0, AppClipAppStoreReviewDetailRelationships_1.AppClipAppStoreReviewDetailRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
