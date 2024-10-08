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
exports.instanceOfBuildRelationshipsIcons = instanceOfBuildRelationshipsIcons;
exports.BuildRelationshipsIconsFromJSON = BuildRelationshipsIconsFromJSON;
exports.BuildRelationshipsIconsFromJSONTyped = BuildRelationshipsIconsFromJSONTyped;
exports.BuildRelationshipsIconsToJSON = BuildRelationshipsIconsToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const BuildRelationshipsIconsDataInner_1 = require("./BuildRelationshipsIconsDataInner");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the BuildRelationshipsIcons interface.
 */
function instanceOfBuildRelationshipsIcons(value) {
    let isInstance = true;
    return isInstance;
}
function BuildRelationshipsIconsFromJSON(json) {
    return BuildRelationshipsIconsFromJSONTyped(json, false);
}
function BuildRelationshipsIconsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : json["data"].map(BuildRelationshipsIconsDataInner_1.BuildRelationshipsIconsDataInnerFromJSON)
    };
}
function BuildRelationshipsIconsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
        data: value.data === undefined ? undefined : value.data.map(BuildRelationshipsIconsDataInner_1.BuildRelationshipsIconsDataInnerToJSON)
    };
}
