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
exports.CiProductAttributesProductTypeEnum = void 0;
exports.instanceOfCiProductAttributes = instanceOfCiProductAttributes;
exports.CiProductAttributesFromJSON = CiProductAttributesFromJSON;
exports.CiProductAttributesFromJSONTyped = CiProductAttributesFromJSONTyped;
exports.CiProductAttributesToJSON = CiProductAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.CiProductAttributesProductTypeEnum = {
    App: "APP",
    Framework: "FRAMEWORK"
};
/**
 * Check if a given object implements the CiProductAttributes interface.
 */
function instanceOfCiProductAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function CiProductAttributesFromJSON(json) {
    return CiProductAttributesFromJSONTyped(json, false);
}
function CiProductAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, "name") ? undefined : json["name"],
        createdDate: !(0, runtime_1.exists)(json, "createdDate") ? undefined : new Date(json["createdDate"]),
        productType: !(0, runtime_1.exists)(json, "productType") ? undefined : json["productType"]
    };
}
function CiProductAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        createdDate: value.createdDate === undefined ? undefined : value.createdDate.toISOString(),
        productType: value.productType
    };
}
