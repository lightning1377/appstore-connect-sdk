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
exports.instanceOfScmGitReferenceAttributes = instanceOfScmGitReferenceAttributes;
exports.ScmGitReferenceAttributesFromJSON = ScmGitReferenceAttributesFromJSON;
exports.ScmGitReferenceAttributesFromJSONTyped = ScmGitReferenceAttributesFromJSONTyped;
exports.ScmGitReferenceAttributesToJSON = ScmGitReferenceAttributesToJSON;
const runtime_1 = require("../runtime");
const CiGitRefKind_1 = require("./CiGitRefKind");
/**
 * Check if a given object implements the ScmGitReferenceAttributes interface.
 */
function instanceOfScmGitReferenceAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function ScmGitReferenceAttributesFromJSON(json) {
    return ScmGitReferenceAttributesFromJSONTyped(json, false);
}
function ScmGitReferenceAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, "name") ? undefined : json["name"],
        canonicalName: !(0, runtime_1.exists)(json, "canonicalName") ? undefined : json["canonicalName"],
        isDeleted: !(0, runtime_1.exists)(json, "isDeleted") ? undefined : json["isDeleted"],
        kind: !(0, runtime_1.exists)(json, "kind") ? undefined : (0, CiGitRefKind_1.CiGitRefKindFromJSON)(json["kind"])
    };
}
function ScmGitReferenceAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        canonicalName: value.canonicalName,
        isDeleted: value.isDeleted,
        kind: (0, CiGitRefKind_1.CiGitRefKindToJSON)(value.kind)
    };
}
