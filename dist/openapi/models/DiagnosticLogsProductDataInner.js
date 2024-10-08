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
exports.instanceOfDiagnosticLogsProductDataInner = instanceOfDiagnosticLogsProductDataInner;
exports.DiagnosticLogsProductDataInnerFromJSON = DiagnosticLogsProductDataInnerFromJSON;
exports.DiagnosticLogsProductDataInnerFromJSONTyped = DiagnosticLogsProductDataInnerFromJSONTyped;
exports.DiagnosticLogsProductDataInnerToJSON = DiagnosticLogsProductDataInnerToJSON;
const runtime_1 = require("../runtime");
const DiagnosticLogsProductDataInnerDiagnosticInsightsInner_1 = require("./DiagnosticLogsProductDataInnerDiagnosticInsightsInner");
const DiagnosticLogsProductDataInnerDiagnosticLogsInner_1 = require("./DiagnosticLogsProductDataInnerDiagnosticLogsInner");
/**
 * Check if a given object implements the DiagnosticLogsProductDataInner interface.
 */
function instanceOfDiagnosticLogsProductDataInner(value) {
    let isInstance = true;
    return isInstance;
}
function DiagnosticLogsProductDataInnerFromJSON(json) {
    return DiagnosticLogsProductDataInnerFromJSONTyped(json, false);
}
function DiagnosticLogsProductDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signatureId: !(0, runtime_1.exists)(json, "signatureId") ? undefined : json["signatureId"],
        diagnosticInsights: !(0, runtime_1.exists)(json, "diagnosticInsights") ? undefined : json["diagnosticInsights"].map(DiagnosticLogsProductDataInnerDiagnosticInsightsInner_1.DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSON),
        diagnosticLogs: !(0, runtime_1.exists)(json, "diagnosticLogs") ? undefined : json["diagnosticLogs"].map(DiagnosticLogsProductDataInnerDiagnosticLogsInner_1.DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSON)
    };
}
function DiagnosticLogsProductDataInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        signatureId: value.signatureId,
        diagnosticInsights: value.diagnosticInsights === undefined ? undefined : value.diagnosticInsights.map(DiagnosticLogsProductDataInnerDiagnosticInsightsInner_1.DiagnosticLogsProductDataInnerDiagnosticInsightsInnerToJSON),
        diagnosticLogs: value.diagnosticLogs === undefined ? undefined : value.diagnosticLogs.map(DiagnosticLogsProductDataInnerDiagnosticLogsInner_1.DiagnosticLogsProductDataInnerDiagnosticLogsInnerToJSON)
    };
}
