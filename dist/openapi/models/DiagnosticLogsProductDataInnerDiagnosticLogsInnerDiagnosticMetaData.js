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
exports.instanceOfDiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData = instanceOfDiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData;
exports.DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSON = DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSON;
exports.DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSONTyped = DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSONTyped;
exports.DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataToJSON = DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData interface.
 */
function instanceOfDiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaData(value) {
    let isInstance = true;
    return isInstance;
}
function DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSON(json) {
    return DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSONTyped(json, false);
}
function DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        bundleId: !(0, runtime_1.exists)(json, "bundleId") ? undefined : json["bundleId"],
        event: !(0, runtime_1.exists)(json, "event") ? undefined : json["event"],
        osVersion: !(0, runtime_1.exists)(json, "osVersion") ? undefined : json["osVersion"],
        appVersion: !(0, runtime_1.exists)(json, "appVersion") ? undefined : json["appVersion"],
        writesCaused: !(0, runtime_1.exists)(json, "writesCaused") ? undefined : json["writesCaused"],
        deviceType: !(0, runtime_1.exists)(json, "deviceType") ? undefined : json["deviceType"],
        platformArchitecture: !(0, runtime_1.exists)(json, "platformArchitecture") ? undefined : json["platformArchitecture"],
        eventDetail: !(0, runtime_1.exists)(json, "eventDetail") ? undefined : json["eventDetail"],
        buildVersion: !(0, runtime_1.exists)(json, "buildVersion") ? undefined : json["buildVersion"]
    };
}
function DiagnosticLogsProductDataInnerDiagnosticLogsInnerDiagnosticMetaDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        bundleId: value.bundleId,
        event: value.event,
        osVersion: value.osVersion,
        appVersion: value.appVersion,
        writesCaused: value.writesCaused,
        deviceType: value.deviceType,
        platformArchitecture: value.platformArchitecture,
        eventDetail: value.eventDetail,
        buildVersion: value.buildVersion
    };
}
