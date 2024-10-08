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
exports.instanceOfBuildBetaDetailResponse = instanceOfBuildBetaDetailResponse;
exports.BuildBetaDetailResponseFromJSON = BuildBetaDetailResponseFromJSON;
exports.BuildBetaDetailResponseFromJSONTyped = BuildBetaDetailResponseFromJSONTyped;
exports.BuildBetaDetailResponseToJSON = BuildBetaDetailResponseToJSON;
const runtime_1 = require("../runtime");
const Build_1 = require("./Build");
const BuildBetaDetail_1 = require("./BuildBetaDetail");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the BuildBetaDetailResponse interface.
 */
function instanceOfBuildBetaDetailResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function BuildBetaDetailResponseFromJSON(json) {
    return BuildBetaDetailResponseFromJSONTyped(json, false);
}
function BuildBetaDetailResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BuildBetaDetail_1.BuildBetaDetailFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(Build_1.BuildFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function BuildBetaDetailResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BuildBetaDetail_1.BuildBetaDetailToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(Build_1.BuildToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
