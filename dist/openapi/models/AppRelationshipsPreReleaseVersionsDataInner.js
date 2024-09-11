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
exports.AppRelationshipsPreReleaseVersionsDataInnerTypeEnum = void 0;
exports.instanceOfAppRelationshipsPreReleaseVersionsDataInner = instanceOfAppRelationshipsPreReleaseVersionsDataInner;
exports.AppRelationshipsPreReleaseVersionsDataInnerFromJSON = AppRelationshipsPreReleaseVersionsDataInnerFromJSON;
exports.AppRelationshipsPreReleaseVersionsDataInnerFromJSONTyped = AppRelationshipsPreReleaseVersionsDataInnerFromJSONTyped;
exports.AppRelationshipsPreReleaseVersionsDataInnerToJSON = AppRelationshipsPreReleaseVersionsDataInnerToJSON;
/**
 * @export
 */
exports.AppRelationshipsPreReleaseVersionsDataInnerTypeEnum = {
    PreReleaseVersions: "preReleaseVersions"
};
/**
 * Check if a given object implements the AppRelationshipsPreReleaseVersionsDataInner interface.
 */
function instanceOfAppRelationshipsPreReleaseVersionsDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppRelationshipsPreReleaseVersionsDataInnerFromJSON(json) {
    return AppRelationshipsPreReleaseVersionsDataInnerFromJSONTyped(json, false);
}
function AppRelationshipsPreReleaseVersionsDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}
function AppRelationshipsPreReleaseVersionsDataInnerToJSON(value) {
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
