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
exports.instanceOfAlternativeDistributionPackageVersionsResponse = instanceOfAlternativeDistributionPackageVersionsResponse;
exports.AlternativeDistributionPackageVersionsResponseFromJSON = AlternativeDistributionPackageVersionsResponseFromJSON;
exports.AlternativeDistributionPackageVersionsResponseFromJSONTyped = AlternativeDistributionPackageVersionsResponseFromJSONTyped;
exports.AlternativeDistributionPackageVersionsResponseToJSON = AlternativeDistributionPackageVersionsResponseToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersion_1 = require("./AlternativeDistributionPackageVersion");
const AlternativeDistributionPackageVersionsResponseIncludedInner_1 = require("./AlternativeDistributionPackageVersionsResponseIncludedInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AlternativeDistributionPackageVersionsResponse interface.
 */
function instanceOfAlternativeDistributionPackageVersionsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AlternativeDistributionPackageVersionsResponseFromJSON(json) {
    return AlternativeDistributionPackageVersionsResponseFromJSONTyped(json, false);
}
function AlternativeDistributionPackageVersionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(AlternativeDistributionPackageVersion_1.AlternativeDistributionPackageVersionFromJSON),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AlternativeDistributionPackageVersionsResponseIncludedInner_1.AlternativeDistributionPackageVersionsResponseIncludedInnerFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function AlternativeDistributionPackageVersionsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(AlternativeDistributionPackageVersion_1.AlternativeDistributionPackageVersionToJSON),
        included: value.included === undefined ? undefined : value.included.map(AlternativeDistributionPackageVersionsResponseIncludedInner_1.AlternativeDistributionPackageVersionsResponseIncludedInnerToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
