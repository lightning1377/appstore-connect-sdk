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
exports.instanceOfCiProductResponse = instanceOfCiProductResponse;
exports.CiProductResponseFromJSON = CiProductResponseFromJSON;
exports.CiProductResponseFromJSONTyped = CiProductResponseFromJSONTyped;
exports.CiProductResponseToJSON = CiProductResponseToJSON;
const runtime_1 = require("../runtime");
const CiProduct_1 = require("./CiProduct");
const CiProductsResponseIncludedInner_1 = require("./CiProductsResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the CiProductResponse interface.
 */
function instanceOfCiProductResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function CiProductResponseFromJSON(json) {
    return CiProductResponseFromJSONTyped(json, false);
}
function CiProductResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, CiProduct_1.CiProductFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(CiProductsResponseIncludedInner_1.CiProductsResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function CiProductResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, CiProduct_1.CiProductToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(CiProductsResponseIncludedInner_1.CiProductsResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
