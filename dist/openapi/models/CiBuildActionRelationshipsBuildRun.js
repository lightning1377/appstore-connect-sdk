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
exports.instanceOfCiBuildActionRelationshipsBuildRun = instanceOfCiBuildActionRelationshipsBuildRun;
exports.CiBuildActionRelationshipsBuildRunFromJSON = CiBuildActionRelationshipsBuildRunFromJSON;
exports.CiBuildActionRelationshipsBuildRunFromJSONTyped = CiBuildActionRelationshipsBuildRunFromJSONTyped;
exports.CiBuildActionRelationshipsBuildRunToJSON = CiBuildActionRelationshipsBuildRunToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const CiBuildActionRelationshipsBuildRunData_1 = require("./CiBuildActionRelationshipsBuildRunData");
/**
 * Check if a given object implements the CiBuildActionRelationshipsBuildRun interface.
 */
function instanceOfCiBuildActionRelationshipsBuildRun(value) {
    let isInstance = true;
    return isInstance;
}
function CiBuildActionRelationshipsBuildRunFromJSON(json) {
    return CiBuildActionRelationshipsBuildRunFromJSONTyped(json, false);
}
function CiBuildActionRelationshipsBuildRunFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, CiBuildActionRelationshipsBuildRunData_1.CiBuildActionRelationshipsBuildRunDataFromJSON)(json["data"])
    };
}
function CiBuildActionRelationshipsBuildRunToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        data: (0, CiBuildActionRelationshipsBuildRunData_1.CiBuildActionRelationshipsBuildRunDataToJSON)(value.data)
    };
}
