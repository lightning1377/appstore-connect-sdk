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
exports.instanceOfCiBranchPatternsPatternsInner = instanceOfCiBranchPatternsPatternsInner;
exports.CiBranchPatternsPatternsInnerFromJSON = CiBranchPatternsPatternsInnerFromJSON;
exports.CiBranchPatternsPatternsInnerFromJSONTyped = CiBranchPatternsPatternsInnerFromJSONTyped;
exports.CiBranchPatternsPatternsInnerToJSON = CiBranchPatternsPatternsInnerToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CiBranchPatternsPatternsInner interface.
 */
function instanceOfCiBranchPatternsPatternsInner(value) {
    let isInstance = true;
    return isInstance;
}
function CiBranchPatternsPatternsInnerFromJSON(json) {
    return CiBranchPatternsPatternsInnerFromJSONTyped(json, false);
}
function CiBranchPatternsPatternsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        pattern: !(0, runtime_1.exists)(json, "pattern") ? undefined : json["pattern"],
        isPrefix: !(0, runtime_1.exists)(json, "isPrefix") ? undefined : json["isPrefix"]
    };
}
function CiBranchPatternsPatternsInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        pattern: value.pattern,
        isPrefix: value.isPrefix
    };
}
