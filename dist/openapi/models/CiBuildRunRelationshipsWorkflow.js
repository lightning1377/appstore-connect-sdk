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
exports.instanceOfCiBuildRunRelationshipsWorkflow = instanceOfCiBuildRunRelationshipsWorkflow;
exports.CiBuildRunRelationshipsWorkflowFromJSON = CiBuildRunRelationshipsWorkflowFromJSON;
exports.CiBuildRunRelationshipsWorkflowFromJSONTyped = CiBuildRunRelationshipsWorkflowFromJSONTyped;
exports.CiBuildRunRelationshipsWorkflowToJSON = CiBuildRunRelationshipsWorkflowToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const CiBuildRunRelationshipsWorkflowData_1 = require("./CiBuildRunRelationshipsWorkflowData");
/**
 * Check if a given object implements the CiBuildRunRelationshipsWorkflow interface.
 */
function instanceOfCiBuildRunRelationshipsWorkflow(value) {
    let isInstance = true;
    return isInstance;
}
function CiBuildRunRelationshipsWorkflowFromJSON(json) {
    return CiBuildRunRelationshipsWorkflowFromJSONTyped(json, false);
}
function CiBuildRunRelationshipsWorkflowFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, CiBuildRunRelationshipsWorkflowData_1.CiBuildRunRelationshipsWorkflowDataFromJSON)(json["data"])
    };
}
function CiBuildRunRelationshipsWorkflowToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        data: (0, CiBuildRunRelationshipsWorkflowData_1.CiBuildRunRelationshipsWorkflowDataToJSON)(value.data)
    };
}
