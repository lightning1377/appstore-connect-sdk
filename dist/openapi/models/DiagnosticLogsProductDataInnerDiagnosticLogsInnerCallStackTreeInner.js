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
exports.instanceOfDiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner = instanceOfDiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner;
exports.DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSON = DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSON;
exports.DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSONTyped = DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSONTyped;
exports.DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerToJSON = DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerToJSON;
const runtime_1 = require("../runtime");
const DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner_1 = require("./DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner");
/**
 * Check if a given object implements the DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner interface.
 */
function instanceOfDiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInner(value) {
    let isInstance = true;
    return isInstance;
}
function DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSON(json) {
    return DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSONTyped(json, false);
}
function DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        callStackPerThread: !(0, runtime_1.exists)(json, "callStackPerThread") ? undefined : json["callStackPerThread"],
        callStacks: !(0, runtime_1.exists)(json, "callStacks") ? undefined : json["callStacks"].map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner_1.DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInnerFromJSON)
    };
}
function DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        callStackPerThread: value.callStackPerThread,
        callStacks: value.callStacks === undefined ? undefined : value.callStacks.map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInner_1.DiagnosticLogsProductDataInnerDiagnosticLogsInnerCallStackTreeInnerCallStacksInnerToJSON)
    };
}
