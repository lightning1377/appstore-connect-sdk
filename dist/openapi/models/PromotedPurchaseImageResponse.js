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
exports.instanceOfPromotedPurchaseImageResponse = instanceOfPromotedPurchaseImageResponse;
exports.PromotedPurchaseImageResponseFromJSON = PromotedPurchaseImageResponseFromJSON;
exports.PromotedPurchaseImageResponseFromJSONTyped = PromotedPurchaseImageResponseFromJSONTyped;
exports.PromotedPurchaseImageResponseToJSON = PromotedPurchaseImageResponseToJSON;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const PromotedPurchase_1 = require("./PromotedPurchase");
const PromotedPurchaseImage_1 = require("./PromotedPurchaseImage");
/**
 * Check if a given object implements the PromotedPurchaseImageResponse interface.
 */
function instanceOfPromotedPurchaseImageResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function PromotedPurchaseImageResponseFromJSON(json) {
    return PromotedPurchaseImageResponseFromJSONTyped(json, false);
}
function PromotedPurchaseImageResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, PromotedPurchaseImage_1.PromotedPurchaseImageFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(PromotedPurchase_1.PromotedPurchaseFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function PromotedPurchaseImageResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, PromotedPurchaseImage_1.PromotedPurchaseImageToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(PromotedPurchase_1.PromotedPurchaseToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
