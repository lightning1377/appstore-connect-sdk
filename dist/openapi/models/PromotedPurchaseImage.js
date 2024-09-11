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
exports.PromotedPurchaseImageTypeEnum = void 0;
exports.instanceOfPromotedPurchaseImage = instanceOfPromotedPurchaseImage;
exports.PromotedPurchaseImageFromJSON = PromotedPurchaseImageFromJSON;
exports.PromotedPurchaseImageFromJSONTyped = PromotedPurchaseImageFromJSONTyped;
exports.PromotedPurchaseImageToJSON = PromotedPurchaseImageToJSON;
const runtime_1 = require("../runtime");
const PromotedPurchaseImageAttributes_1 = require("./PromotedPurchaseImageAttributes");
const PromotedPurchaseImageRelationships_1 = require("./PromotedPurchaseImageRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.PromotedPurchaseImageTypeEnum = {
    PromotedPurchaseImages: "promotedPurchaseImages"
};
/**
 * Check if a given object implements the PromotedPurchaseImage interface.
 */
function instanceOfPromotedPurchaseImage(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function PromotedPurchaseImageFromJSON(json) {
    return PromotedPurchaseImageFromJSONTyped(json, false);
}
function PromotedPurchaseImageFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, PromotedPurchaseImageAttributes_1.PromotedPurchaseImageAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, PromotedPurchaseImageRelationships_1.PromotedPurchaseImageRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function PromotedPurchaseImageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, PromotedPurchaseImageAttributes_1.PromotedPurchaseImageAttributesToJSON)(value.attributes),
        relationships: (0, PromotedPurchaseImageRelationships_1.PromotedPurchaseImageRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
