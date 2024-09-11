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
exports.instanceOfBuildBundleRelationshipsBuildBundleFileSizes = instanceOfBuildBundleRelationshipsBuildBundleFileSizes;
exports.BuildBundleRelationshipsBuildBundleFileSizesFromJSON = BuildBundleRelationshipsBuildBundleFileSizesFromJSON;
exports.BuildBundleRelationshipsBuildBundleFileSizesFromJSONTyped = BuildBundleRelationshipsBuildBundleFileSizesFromJSONTyped;
exports.BuildBundleRelationshipsBuildBundleFileSizesToJSON = BuildBundleRelationshipsBuildBundleFileSizesToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const BuildBundleRelationshipsBuildBundleFileSizesDataInner_1 = require("./BuildBundleRelationshipsBuildBundleFileSizesDataInner");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the BuildBundleRelationshipsBuildBundleFileSizes interface.
 */
function instanceOfBuildBundleRelationshipsBuildBundleFileSizes(value) {
    let isInstance = true;
    return isInstance;
}
function BuildBundleRelationshipsBuildBundleFileSizesFromJSON(json) {
    return BuildBundleRelationshipsBuildBundleFileSizesFromJSONTyped(json, false);
}
function BuildBundleRelationshipsBuildBundleFileSizesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : json["data"].map(BuildBundleRelationshipsBuildBundleFileSizesDataInner_1.BuildBundleRelationshipsBuildBundleFileSizesDataInnerFromJSON)
    };
}
function BuildBundleRelationshipsBuildBundleFileSizesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
        data: value.data === undefined ? undefined : value.data.map(BuildBundleRelationshipsBuildBundleFileSizesDataInner_1.BuildBundleRelationshipsBuildBundleFileSizesDataInnerToJSON)
    };
}
