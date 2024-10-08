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
exports.instanceOfAppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest = instanceOfAppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest;
exports.AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequestFromJSON = AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequestFromJSON;
exports.AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequestFromJSONTyped = AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequestFromJSONTyped;
exports.AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequestToJSON = AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequestToJSON;
const AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData_1 = require("./AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData");
/**
 * Check if a given object implements the AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest interface.
 */
function instanceOfAppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequestFromJSON(json) {
    return AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequestFromJSONTyped(json, false);
}
function AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData_1.AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON)(json["data"])
    };
}
function AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData_1.AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON)(value.data)
    };
}
