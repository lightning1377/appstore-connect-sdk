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
exports.AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataTypeEnum = void 0;
exports.instanceOfAlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData = instanceOfAlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData;
exports.AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON = AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON;
exports.AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSONTyped = AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSONTyped;
exports.AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON = AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON;
/**
 * @export
 */
exports.AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataTypeEnum = {
    AppStoreVersions: "appStoreVersions"
};
/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData interface.
 */
function instanceOfAlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON(json) {
    return AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSONTyped(json, false);
}
function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}
function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id
    };
}
