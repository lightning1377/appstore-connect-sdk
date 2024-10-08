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
exports.instanceOfAppStoreVersionRelationshipsAppStoreVersionPhasedRelease = instanceOfAppStoreVersionRelationshipsAppStoreVersionPhasedRelease;
exports.AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSON = AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSON;
exports.AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSONTyped = AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSONTyped;
exports.AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseToJSON = AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData_1 = require("./AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData");
/**
 * Check if a given object implements the AppStoreVersionRelationshipsAppStoreVersionPhasedRelease interface.
 */
function instanceOfAppStoreVersionRelationshipsAppStoreVersionPhasedRelease(value) {
    let isInstance = true;
    return isInstance;
}
function AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSON(json) {
    return AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSONTyped(json, false);
}
function AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData_1.AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataFromJSON)(json["data"])
    };
}
function AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        data: (0, AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData_1.AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataToJSON)(value.data)
    };
}
