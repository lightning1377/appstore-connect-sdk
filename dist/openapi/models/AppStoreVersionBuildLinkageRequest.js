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
exports.instanceOfAppStoreVersionBuildLinkageRequest = instanceOfAppStoreVersionBuildLinkageRequest;
exports.AppStoreVersionBuildLinkageRequestFromJSON = AppStoreVersionBuildLinkageRequestFromJSON;
exports.AppStoreVersionBuildLinkageRequestFromJSONTyped = AppStoreVersionBuildLinkageRequestFromJSONTyped;
exports.AppStoreVersionBuildLinkageRequestToJSON = AppStoreVersionBuildLinkageRequestToJSON;
const AppEncryptionDeclarationRelationshipsBuildsDataInner_1 = require("./AppEncryptionDeclarationRelationshipsBuildsDataInner");
/**
 * Check if a given object implements the AppStoreVersionBuildLinkageRequest interface.
 */
function instanceOfAppStoreVersionBuildLinkageRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppStoreVersionBuildLinkageRequestFromJSON(json) {
    return AppStoreVersionBuildLinkageRequestFromJSONTyped(json, false);
}
function AppStoreVersionBuildLinkageRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppEncryptionDeclarationRelationshipsBuildsDataInner_1.AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON)(json["data"])
    };
}
function AppStoreVersionBuildLinkageRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppEncryptionDeclarationRelationshipsBuildsDataInner_1.AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON)(value.data)
    };
}
