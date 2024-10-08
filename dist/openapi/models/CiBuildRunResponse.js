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
exports.instanceOfCiBuildRunResponse = instanceOfCiBuildRunResponse;
exports.CiBuildRunResponseFromJSON = CiBuildRunResponseFromJSON;
exports.CiBuildRunResponseFromJSONTyped = CiBuildRunResponseFromJSONTyped;
exports.CiBuildRunResponseToJSON = CiBuildRunResponseToJSON;
const runtime_1 = require("../runtime");
const CiBuildRun_1 = require("./CiBuildRun");
const CiBuildRunsResponseIncludedInner_1 = require("./CiBuildRunsResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the CiBuildRunResponse interface.
 */
function instanceOfCiBuildRunResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function CiBuildRunResponseFromJSON(json) {
    return CiBuildRunResponseFromJSONTyped(json, false);
}
function CiBuildRunResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, CiBuildRun_1.CiBuildRunFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(CiBuildRunsResponseIncludedInner_1.CiBuildRunsResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function CiBuildRunResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, CiBuildRun_1.CiBuildRunToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(CiBuildRunsResponseIncludedInner_1.CiBuildRunsResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
