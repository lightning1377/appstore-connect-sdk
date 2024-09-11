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
exports.AppPreviewTypeEnum = void 0;
exports.instanceOfAppPreview = instanceOfAppPreview;
exports.AppPreviewFromJSON = AppPreviewFromJSON;
exports.AppPreviewFromJSONTyped = AppPreviewFromJSONTyped;
exports.AppPreviewToJSON = AppPreviewToJSON;
const runtime_1 = require("../runtime");
const AppPreviewAttributes_1 = require("./AppPreviewAttributes");
const AppPreviewRelationships_1 = require("./AppPreviewRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.AppPreviewTypeEnum = {
    AppPreviews: "appPreviews"
};
/**
 * Check if a given object implements the AppPreview interface.
 */
function instanceOfAppPreview(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppPreviewFromJSON(json) {
    return AppPreviewFromJSONTyped(json, false);
}
function AppPreviewFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, AppPreviewAttributes_1.AppPreviewAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, AppPreviewRelationships_1.AppPreviewRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function AppPreviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, AppPreviewAttributes_1.AppPreviewAttributesToJSON)(value.attributes),
        relationships: (0, AppPreviewRelationships_1.AppPreviewRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
