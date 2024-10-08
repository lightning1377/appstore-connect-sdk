"use strict";
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfAppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion = instanceOfAppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion;
exports.AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSON = AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSON;
exports.AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped = AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped;
exports.AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionToJSON = AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionToJSON;
const AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData_1 = require("./AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData");
/**
 * Check if a given object implements the AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion interface.
 */
function instanceOfAppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSON(json) {
    return AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped(json, false);
}
function AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData_1.AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSON)(json['data']),
    };
}
function AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData_1.AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataToJSON)(value.data),
    };
}
