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
exports.instanceOfScmRepositoryAttributes = instanceOfScmRepositoryAttributes;
exports.ScmRepositoryAttributesFromJSON = ScmRepositoryAttributesFromJSON;
exports.ScmRepositoryAttributesFromJSONTyped = ScmRepositoryAttributesFromJSONTyped;
exports.ScmRepositoryAttributesToJSON = ScmRepositoryAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ScmRepositoryAttributes interface.
 */
function instanceOfScmRepositoryAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function ScmRepositoryAttributesFromJSON(json) {
    return ScmRepositoryAttributesFromJSONTyped(json, false);
}
function ScmRepositoryAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        lastAccessedDate: !(0, runtime_1.exists)(json, "lastAccessedDate") ? undefined : new Date(json["lastAccessedDate"]),
        httpCloneUrl: !(0, runtime_1.exists)(json, "httpCloneUrl") ? undefined : json["httpCloneUrl"],
        sshCloneUrl: !(0, runtime_1.exists)(json, "sshCloneUrl") ? undefined : json["sshCloneUrl"],
        ownerName: !(0, runtime_1.exists)(json, "ownerName") ? undefined : json["ownerName"],
        repositoryName: !(0, runtime_1.exists)(json, "repositoryName") ? undefined : json["repositoryName"]
    };
}
function ScmRepositoryAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        lastAccessedDate: value.lastAccessedDate === undefined ? undefined : value.lastAccessedDate.toISOString(),
        httpCloneUrl: value.httpCloneUrl,
        sshCloneUrl: value.sshCloneUrl,
        ownerName: value.ownerName,
        repositoryName: value.repositoryName
    };
}
