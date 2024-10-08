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
exports.instanceOfAlternativeDistributionPackageVersionRelationshipsVariants = instanceOfAlternativeDistributionPackageVersionRelationshipsVariants;
exports.AlternativeDistributionPackageVersionRelationshipsVariantsFromJSON = AlternativeDistributionPackageVersionRelationshipsVariantsFromJSON;
exports.AlternativeDistributionPackageVersionRelationshipsVariantsFromJSONTyped = AlternativeDistributionPackageVersionRelationshipsVariantsFromJSONTyped;
exports.AlternativeDistributionPackageVersionRelationshipsVariantsToJSON = AlternativeDistributionPackageVersionRelationshipsVariantsToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsDataInner_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsDataInner");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AlternativeDistributionPackageVersionRelationshipsVariants interface.
 */
function instanceOfAlternativeDistributionPackageVersionRelationshipsVariants(value) {
    let isInstance = true;
    return isInstance;
}
function AlternativeDistributionPackageVersionRelationshipsVariantsFromJSON(json) {
    return AlternativeDistributionPackageVersionRelationshipsVariantsFromJSONTyped(json, false);
}
function AlternativeDistributionPackageVersionRelationshipsVariantsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : json["data"].map(AlternativeDistributionPackageVersionRelationshipsVariantsDataInner_1.AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerFromJSON)
    };
}
function AlternativeDistributionPackageVersionRelationshipsVariantsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
        data: value.data === undefined ? undefined : value.data.map(AlternativeDistributionPackageVersionRelationshipsVariantsDataInner_1.AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerToJSON)
    };
}
