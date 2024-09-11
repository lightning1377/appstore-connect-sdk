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
exports.ErrorLinksAssociatedFromJSON = ErrorLinksAssociatedFromJSON;
exports.ErrorLinksAssociatedFromJSONTyped = ErrorLinksAssociatedFromJSONTyped;
exports.ErrorLinksAssociatedToJSON = ErrorLinksAssociatedToJSON;
const ErrorLinksAssociatedOneOf_1 = require("./ErrorLinksAssociatedOneOf");
function ErrorLinksAssociatedFromJSON(json) {
    return ErrorLinksAssociatedFromJSONTyped(json, false);
}
function ErrorLinksAssociatedFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, ErrorLinksAssociatedOneOf_1.ErrorLinksAssociatedOneOfFromJSONTyped)(json, true)), { err_str: JSON.stringify(json, true) });
}
function ErrorLinksAssociatedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, ErrorLinksAssociatedOneOf_1.instanceOfErrorLinksAssociatedOneOf)(value)) {
        return (0, ErrorLinksAssociatedOneOf_1.ErrorLinksAssociatedOneOfToJSON)(value);
    }
    if (typeof value == "string") {
        return JSON.parse(value);
    }
    return {};
}
