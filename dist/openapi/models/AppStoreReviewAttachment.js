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
exports.AppStoreReviewAttachmentTypeEnum = void 0;
exports.instanceOfAppStoreReviewAttachment = instanceOfAppStoreReviewAttachment;
exports.AppStoreReviewAttachmentFromJSON = AppStoreReviewAttachmentFromJSON;
exports.AppStoreReviewAttachmentFromJSONTyped = AppStoreReviewAttachmentFromJSONTyped;
exports.AppStoreReviewAttachmentToJSON = AppStoreReviewAttachmentToJSON;
const runtime_1 = require("../runtime");
const AppStoreReviewAttachmentAttributes_1 = require("./AppStoreReviewAttachmentAttributes");
const AppStoreReviewAttachmentRelationships_1 = require("./AppStoreReviewAttachmentRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.AppStoreReviewAttachmentTypeEnum = {
    AppStoreReviewAttachments: "appStoreReviewAttachments"
};
/**
 * Check if a given object implements the AppStoreReviewAttachment interface.
 */
function instanceOfAppStoreReviewAttachment(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppStoreReviewAttachmentFromJSON(json) {
    return AppStoreReviewAttachmentFromJSONTyped(json, false);
}
function AppStoreReviewAttachmentFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, AppStoreReviewAttachmentAttributes_1.AppStoreReviewAttachmentAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, AppStoreReviewAttachmentRelationships_1.AppStoreReviewAttachmentRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function AppStoreReviewAttachmentToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, AppStoreReviewAttachmentAttributes_1.AppStoreReviewAttachmentAttributesToJSON)(value.attributes),
        relationships: (0, AppStoreReviewAttachmentRelationships_1.AppStoreReviewAttachmentRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
