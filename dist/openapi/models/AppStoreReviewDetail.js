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
exports.AppStoreReviewDetailTypeEnum = void 0;
exports.instanceOfAppStoreReviewDetail = instanceOfAppStoreReviewDetail;
exports.AppStoreReviewDetailFromJSON = AppStoreReviewDetailFromJSON;
exports.AppStoreReviewDetailFromJSONTyped = AppStoreReviewDetailFromJSONTyped;
exports.AppStoreReviewDetailToJSON = AppStoreReviewDetailToJSON;
const runtime_1 = require("../runtime");
const AppStoreReviewDetailAttributes_1 = require("./AppStoreReviewDetailAttributes");
const AppStoreReviewDetailRelationships_1 = require("./AppStoreReviewDetailRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.AppStoreReviewDetailTypeEnum = {
    AppStoreReviewDetails: "appStoreReviewDetails"
};
/**
 * Check if a given object implements the AppStoreReviewDetail interface.
 */
function instanceOfAppStoreReviewDetail(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppStoreReviewDetailFromJSON(json) {
    return AppStoreReviewDetailFromJSONTyped(json, false);
}
function AppStoreReviewDetailFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, AppStoreReviewDetailAttributes_1.AppStoreReviewDetailAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, AppStoreReviewDetailRelationships_1.AppStoreReviewDetailRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function AppStoreReviewDetailToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, AppStoreReviewDetailAttributes_1.AppStoreReviewDetailAttributesToJSON)(value.attributes),
        relationships: (0, AppStoreReviewDetailRelationships_1.AppStoreReviewDetailRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
