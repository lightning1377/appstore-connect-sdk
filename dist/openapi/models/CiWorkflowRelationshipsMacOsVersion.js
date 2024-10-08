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
exports.instanceOfCiWorkflowRelationshipsMacOsVersion = instanceOfCiWorkflowRelationshipsMacOsVersion;
exports.CiWorkflowRelationshipsMacOsVersionFromJSON = CiWorkflowRelationshipsMacOsVersionFromJSON;
exports.CiWorkflowRelationshipsMacOsVersionFromJSONTyped = CiWorkflowRelationshipsMacOsVersionFromJSONTyped;
exports.CiWorkflowRelationshipsMacOsVersionToJSON = CiWorkflowRelationshipsMacOsVersionToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const CiWorkflowRelationshipsMacOsVersionData_1 = require("./CiWorkflowRelationshipsMacOsVersionData");
/**
 * Check if a given object implements the CiWorkflowRelationshipsMacOsVersion interface.
 */
function instanceOfCiWorkflowRelationshipsMacOsVersion(value) {
    let isInstance = true;
    return isInstance;
}
function CiWorkflowRelationshipsMacOsVersionFromJSON(json) {
    return CiWorkflowRelationshipsMacOsVersionFromJSONTyped(json, false);
}
function CiWorkflowRelationshipsMacOsVersionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, CiWorkflowRelationshipsMacOsVersionData_1.CiWorkflowRelationshipsMacOsVersionDataFromJSON)(json["data"])
    };
}
function CiWorkflowRelationshipsMacOsVersionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        data: (0, CiWorkflowRelationshipsMacOsVersionData_1.CiWorkflowRelationshipsMacOsVersionDataToJSON)(value.data)
    };
}
