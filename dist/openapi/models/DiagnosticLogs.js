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
exports.instanceOfDiagnosticLogs = instanceOfDiagnosticLogs;
exports.DiagnosticLogsFromJSON = DiagnosticLogsFromJSON;
exports.DiagnosticLogsFromJSONTyped = DiagnosticLogsFromJSONTyped;
exports.DiagnosticLogsToJSON = DiagnosticLogsToJSON;
const runtime_1 = require("../runtime");
const DiagnosticLogsProductDataInner_1 = require("./DiagnosticLogsProductDataInner");
/**
 * Check if a given object implements the DiagnosticLogs interface.
 */
function instanceOfDiagnosticLogs(value) {
    let isInstance = true;
    return isInstance;
}
function DiagnosticLogsFromJSON(json) {
    return DiagnosticLogsFromJSONTyped(json, false);
}
function DiagnosticLogsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        productData: !(0, runtime_1.exists)(json, "productData") ? undefined : json["productData"].map(DiagnosticLogsProductDataInner_1.DiagnosticLogsProductDataInnerFromJSON),
        version: !(0, runtime_1.exists)(json, "version") ? undefined : json["version"]
    };
}
function DiagnosticLogsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        productData: value.productData === undefined ? undefined : value.productData.map(DiagnosticLogsProductDataInner_1.DiagnosticLogsProductDataInnerToJSON),
        version: value.version
    };
}
