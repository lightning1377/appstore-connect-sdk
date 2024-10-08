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
exports.instanceOfBuildResponse = instanceOfBuildResponse;
exports.BuildResponseFromJSON = BuildResponseFromJSON;
exports.BuildResponseFromJSONTyped = BuildResponseFromJSONTyped;
exports.BuildResponseToJSON = BuildResponseToJSON;
const runtime_1 = require("../runtime");
const Build_1 = require("./Build");
const BuildsResponseIncludedInner_1 = require("./BuildsResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the BuildResponse interface.
 */
function instanceOfBuildResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function BuildResponseFromJSON(json) {
    return BuildResponseFromJSONTyped(json, false);
}
function BuildResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, Build_1.BuildFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(BuildsResponseIncludedInner_1.BuildsResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function BuildResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, Build_1.BuildToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(BuildsResponseIncludedInner_1.BuildsResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
