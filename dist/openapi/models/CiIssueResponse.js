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
exports.instanceOfCiIssueResponse = instanceOfCiIssueResponse;
exports.CiIssueResponseFromJSON = CiIssueResponseFromJSON;
exports.CiIssueResponseFromJSONTyped = CiIssueResponseFromJSONTyped;
exports.CiIssueResponseToJSON = CiIssueResponseToJSON;
const CiIssue_1 = require("./CiIssue");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the CiIssueResponse interface.
 */
function instanceOfCiIssueResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function CiIssueResponseFromJSON(json) {
    return CiIssueResponseFromJSONTyped(json, false);
}
function CiIssueResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, CiIssue_1.CiIssueFromJSON)(json["data"]),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function CiIssueResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, CiIssue_1.CiIssueToJSON)(value.data),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
