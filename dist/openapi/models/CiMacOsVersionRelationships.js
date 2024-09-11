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
exports.instanceOfCiMacOsVersionRelationships = instanceOfCiMacOsVersionRelationships;
exports.CiMacOsVersionRelationshipsFromJSON = CiMacOsVersionRelationshipsFromJSON;
exports.CiMacOsVersionRelationshipsFromJSONTyped = CiMacOsVersionRelationshipsFromJSONTyped;
exports.CiMacOsVersionRelationshipsToJSON = CiMacOsVersionRelationshipsToJSON;
const runtime_1 = require("../runtime");
const CiMacOsVersionRelationshipsXcodeVersions_1 = require("./CiMacOsVersionRelationshipsXcodeVersions");
/**
 * Check if a given object implements the CiMacOsVersionRelationships interface.
 */
function instanceOfCiMacOsVersionRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function CiMacOsVersionRelationshipsFromJSON(json) {
    return CiMacOsVersionRelationshipsFromJSONTyped(json, false);
}
function CiMacOsVersionRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        xcodeVersions: !(0, runtime_1.exists)(json, "xcodeVersions") ? undefined : (0, CiMacOsVersionRelationshipsXcodeVersions_1.CiMacOsVersionRelationshipsXcodeVersionsFromJSON)(json["xcodeVersions"])
    };
}
function CiMacOsVersionRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        xcodeVersions: (0, CiMacOsVersionRelationshipsXcodeVersions_1.CiMacOsVersionRelationshipsXcodeVersionsToJSON)(value.xcodeVersions)
    };
}
