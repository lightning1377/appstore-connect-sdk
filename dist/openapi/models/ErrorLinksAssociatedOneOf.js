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
exports.instanceOfErrorLinksAssociatedOneOf = instanceOfErrorLinksAssociatedOneOf;
exports.ErrorLinksAssociatedOneOfFromJSON = ErrorLinksAssociatedOneOfFromJSON;
exports.ErrorLinksAssociatedOneOfFromJSONTyped = ErrorLinksAssociatedOneOfFromJSONTyped;
exports.ErrorLinksAssociatedOneOfToJSON = ErrorLinksAssociatedOneOfToJSON;
const runtime_1 = require("../runtime");
const ErrorLinksAssociatedOneOfMeta_1 = require("./ErrorLinksAssociatedOneOfMeta");
/**
 * Check if a given object implements the ErrorLinksAssociatedOneOf interface.
 */
function instanceOfErrorLinksAssociatedOneOf(value) {
    let isInstance = true;
    return isInstance;
}
function ErrorLinksAssociatedOneOfFromJSON(json) {
    return ErrorLinksAssociatedOneOfFromJSONTyped(json, false);
}
function ErrorLinksAssociatedOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        href: !(0, runtime_1.exists)(json, "href") ? undefined : json["href"],
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, ErrorLinksAssociatedOneOfMeta_1.ErrorLinksAssociatedOneOfMetaFromJSON)(json["meta"])
    };
}
function ErrorLinksAssociatedOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        href: value.href,
        meta: (0, ErrorLinksAssociatedOneOfMeta_1.ErrorLinksAssociatedOneOfMetaToJSON)(value.meta)
    };
}
