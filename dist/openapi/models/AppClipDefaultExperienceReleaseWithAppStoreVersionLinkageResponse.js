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
exports.instanceOfAppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse = instanceOfAppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse;
exports.AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponseFromJSON = AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponseFromJSON;
exports.AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponseFromJSONTyped = AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponseFromJSONTyped;
exports.AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponseToJSON = AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponseToJSON;
const AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData_1 = require("./AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse interface.
 */
function instanceOfAppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponseFromJSON(json) {
    return AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponseFromJSONTyped(json, false);
}
function AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData_1.AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON)(json["data"]),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData_1.AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON)(value.data),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
