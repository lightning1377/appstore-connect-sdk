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
exports.CiTestStatus = void 0;
exports.CiTestStatusFromJSON = CiTestStatusFromJSON;
exports.CiTestStatusFromJSONTyped = CiTestStatusFromJSONTyped;
exports.CiTestStatusToJSON = CiTestStatusToJSON;
/**
 *
 * @export
 */
exports.CiTestStatus = {
    Success: "SUCCESS",
    Failure: "FAILURE",
    Mixed: "MIXED",
    Skipped: "SKIPPED",
    ExpectedFailure: "EXPECTED_FAILURE"
};
function CiTestStatusFromJSON(json) {
    return CiTestStatusFromJSONTyped(json, false);
}
function CiTestStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function CiTestStatusToJSON(value) {
    return value;
}
