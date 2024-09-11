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
exports.instanceOfFileLocation = instanceOfFileLocation;
exports.FileLocationFromJSON = FileLocationFromJSON;
exports.FileLocationFromJSONTyped = FileLocationFromJSONTyped;
exports.FileLocationToJSON = FileLocationToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the FileLocation interface.
 */
function instanceOfFileLocation(value) {
    let isInstance = true;
    return isInstance;
}
function FileLocationFromJSON(json) {
    return FileLocationFromJSONTyped(json, false);
}
function FileLocationFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        path: !(0, runtime_1.exists)(json, "path") ? undefined : json["path"],
        lineNumber: !(0, runtime_1.exists)(json, "lineNumber") ? undefined : json["lineNumber"]
    };
}
function FileLocationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        path: value.path,
        lineNumber: value.lineNumber
    };
}
