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
exports.instanceOfAlternativeDistributionPackageCreateRequestDataRelationships = instanceOfAlternativeDistributionPackageCreateRequestDataRelationships;
exports.AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON = AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON;
exports.AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped = AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped;
exports.AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON = AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON;
const AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion_1 = require("./AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion");
/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequestDataRelationships interface.
 */
function instanceOfAlternativeDistributionPackageCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "appStoreVersion" in value;
    return isInstance;
}
function AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json) {
    return AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appStoreVersion: (0, AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion_1.AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSON)(json["appStoreVersion"])
    };
}
function AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appStoreVersion: (0, AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion_1.AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSON)(value.appStoreVersion)
    };
}
