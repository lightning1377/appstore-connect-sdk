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
exports.instanceOfScmGitReferenceResponse = instanceOfScmGitReferenceResponse;
exports.ScmGitReferenceResponseFromJSON = ScmGitReferenceResponseFromJSON;
exports.ScmGitReferenceResponseFromJSONTyped = ScmGitReferenceResponseFromJSONTyped;
exports.ScmGitReferenceResponseToJSON = ScmGitReferenceResponseToJSON;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const ScmGitReference_1 = require("./ScmGitReference");
const ScmRepository_1 = require("./ScmRepository");
/**
 * Check if a given object implements the ScmGitReferenceResponse interface.
 */
function instanceOfScmGitReferenceResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function ScmGitReferenceResponseFromJSON(json) {
    return ScmGitReferenceResponseFromJSONTyped(json, false);
}
function ScmGitReferenceResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, ScmGitReference_1.ScmGitReferenceFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(ScmRepository_1.ScmRepositoryFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function ScmGitReferenceResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, ScmGitReference_1.ScmGitReferenceToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(ScmRepository_1.ScmRepositoryToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
