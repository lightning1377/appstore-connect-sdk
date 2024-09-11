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
exports.instanceOfInAppPurchaseContentAttributes = instanceOfInAppPurchaseContentAttributes;
exports.InAppPurchaseContentAttributesFromJSON = InAppPurchaseContentAttributesFromJSON;
exports.InAppPurchaseContentAttributesFromJSONTyped = InAppPurchaseContentAttributesFromJSONTyped;
exports.InAppPurchaseContentAttributesToJSON = InAppPurchaseContentAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the InAppPurchaseContentAttributes interface.
 */
function instanceOfInAppPurchaseContentAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function InAppPurchaseContentAttributesFromJSON(json) {
    return InAppPurchaseContentAttributesFromJSONTyped(json, false);
}
function InAppPurchaseContentAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        fileName: !(0, runtime_1.exists)(json, "fileName") ? undefined : json["fileName"],
        fileSize: !(0, runtime_1.exists)(json, "fileSize") ? undefined : json["fileSize"],
        url: !(0, runtime_1.exists)(json, "url") ? undefined : json["url"],
        lastModifiedDate: !(0, runtime_1.exists)(json, "lastModifiedDate") ? undefined : new Date(json["lastModifiedDate"])
    };
}
function InAppPurchaseContentAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        fileName: value.fileName,
        fileSize: value.fileSize,
        url: value.url,
        lastModifiedDate: value.lastModifiedDate === undefined ? undefined : value.lastModifiedDate.toISOString()
    };
}
