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
exports.instanceOfBuildBundleRelationships = instanceOfBuildBundleRelationships;
exports.BuildBundleRelationshipsFromJSON = BuildBundleRelationshipsFromJSON;
exports.BuildBundleRelationshipsFromJSONTyped = BuildBundleRelationshipsFromJSONTyped;
exports.BuildBundleRelationshipsToJSON = BuildBundleRelationshipsToJSON;
const runtime_1 = require("../runtime");
const BuildBundleRelationshipsAppClipDomainCacheStatus_1 = require("./BuildBundleRelationshipsAppClipDomainCacheStatus");
const BuildBundleRelationshipsBetaAppClipInvocations_1 = require("./BuildBundleRelationshipsBetaAppClipInvocations");
const BuildBundleRelationshipsBuildBundleFileSizes_1 = require("./BuildBundleRelationshipsBuildBundleFileSizes");
/**
 * Check if a given object implements the BuildBundleRelationships interface.
 */
function instanceOfBuildBundleRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function BuildBundleRelationshipsFromJSON(json) {
    return BuildBundleRelationshipsFromJSONTyped(json, false);
}
function BuildBundleRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appClipDomainCacheStatus: !(0, runtime_1.exists)(json, "appClipDomainCacheStatus") ? undefined : (0, BuildBundleRelationshipsAppClipDomainCacheStatus_1.BuildBundleRelationshipsAppClipDomainCacheStatusFromJSON)(json["appClipDomainCacheStatus"]),
        appClipDomainDebugStatus: !(0, runtime_1.exists)(json, "appClipDomainDebugStatus") ? undefined : (0, BuildBundleRelationshipsAppClipDomainCacheStatus_1.BuildBundleRelationshipsAppClipDomainCacheStatusFromJSON)(json["appClipDomainDebugStatus"]),
        betaAppClipInvocations: !(0, runtime_1.exists)(json, "betaAppClipInvocations") ? undefined : (0, BuildBundleRelationshipsBetaAppClipInvocations_1.BuildBundleRelationshipsBetaAppClipInvocationsFromJSON)(json["betaAppClipInvocations"]),
        buildBundleFileSizes: !(0, runtime_1.exists)(json, "buildBundleFileSizes") ? undefined : (0, BuildBundleRelationshipsBuildBundleFileSizes_1.BuildBundleRelationshipsBuildBundleFileSizesFromJSON)(json["buildBundleFileSizes"])
    };
}
function BuildBundleRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appClipDomainCacheStatus: (0, BuildBundleRelationshipsAppClipDomainCacheStatus_1.BuildBundleRelationshipsAppClipDomainCacheStatusToJSON)(value.appClipDomainCacheStatus),
        appClipDomainDebugStatus: (0, BuildBundleRelationshipsAppClipDomainCacheStatus_1.BuildBundleRelationshipsAppClipDomainCacheStatusToJSON)(value.appClipDomainDebugStatus),
        betaAppClipInvocations: (0, BuildBundleRelationshipsBetaAppClipInvocations_1.BuildBundleRelationshipsBetaAppClipInvocationsToJSON)(value.betaAppClipInvocations),
        buildBundleFileSizes: (0, BuildBundleRelationshipsBuildBundleFileSizes_1.BuildBundleRelationshipsBuildBundleFileSizesToJSON)(value.buildBundleFileSizes)
    };
}
