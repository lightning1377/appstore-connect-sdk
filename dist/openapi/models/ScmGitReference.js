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
exports.ScmGitReferenceTypeEnum = void 0;
exports.instanceOfScmGitReference = instanceOfScmGitReference;
exports.ScmGitReferenceFromJSON = ScmGitReferenceFromJSON;
exports.ScmGitReferenceFromJSONTyped = ScmGitReferenceFromJSONTyped;
exports.ScmGitReferenceToJSON = ScmGitReferenceToJSON;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
const ScmGitReferenceAttributes_1 = require("./ScmGitReferenceAttributes");
const ScmGitReferenceRelationships_1 = require("./ScmGitReferenceRelationships");
/**
 * @export
 */
exports.ScmGitReferenceTypeEnum = {
    ScmGitReferences: "scmGitReferences"
};
/**
 * Check if a given object implements the ScmGitReference interface.
 */
function instanceOfScmGitReference(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function ScmGitReferenceFromJSON(json) {
    return ScmGitReferenceFromJSONTyped(json, false);
}
function ScmGitReferenceFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, ScmGitReferenceAttributes_1.ScmGitReferenceAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, ScmGitReferenceRelationships_1.ScmGitReferenceRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function ScmGitReferenceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, ScmGitReferenceAttributes_1.ScmGitReferenceAttributesToJSON)(value.attributes),
        relationships: (0, ScmGitReferenceRelationships_1.ScmGitReferenceRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
