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
exports.instanceOfCiTestResultResponse = instanceOfCiTestResultResponse;
exports.CiTestResultResponseFromJSON = CiTestResultResponseFromJSON;
exports.CiTestResultResponseFromJSONTyped = CiTestResultResponseFromJSONTyped;
exports.CiTestResultResponseToJSON = CiTestResultResponseToJSON;
const CiTestResult_1 = require("./CiTestResult");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the CiTestResultResponse interface.
 */
function instanceOfCiTestResultResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function CiTestResultResponseFromJSON(json) {
    return CiTestResultResponseFromJSONTyped(json, false);
}
function CiTestResultResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, CiTestResult_1.CiTestResultFromJSON)(json["data"]),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function CiTestResultResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, CiTestResult_1.CiTestResultToJSON)(value.data),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
