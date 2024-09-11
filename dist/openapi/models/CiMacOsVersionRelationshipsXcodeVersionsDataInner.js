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
exports.CiMacOsVersionRelationshipsXcodeVersionsDataInnerTypeEnum = void 0;
exports.instanceOfCiMacOsVersionRelationshipsXcodeVersionsDataInner = instanceOfCiMacOsVersionRelationshipsXcodeVersionsDataInner;
exports.CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON = CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON;
exports.CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSONTyped = CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSONTyped;
exports.CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON = CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON;
/**
 * @export
 */
exports.CiMacOsVersionRelationshipsXcodeVersionsDataInnerTypeEnum = {
    CiXcodeVersions: "ciXcodeVersions"
};
/**
 * Check if a given object implements the CiMacOsVersionRelationshipsXcodeVersionsDataInner interface.
 */
function instanceOfCiMacOsVersionRelationshipsXcodeVersionsDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON(json) {
    return CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSONTyped(json, false);
}
function CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}
function CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON(value) {
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
