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
exports.instanceOfDiagnosticLogCallStackNode = instanceOfDiagnosticLogCallStackNode;
exports.DiagnosticLogCallStackNodeFromJSON = DiagnosticLogCallStackNodeFromJSON;
exports.DiagnosticLogCallStackNodeFromJSONTyped = DiagnosticLogCallStackNodeFromJSONTyped;
exports.DiagnosticLogCallStackNodeToJSON = DiagnosticLogCallStackNodeToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the DiagnosticLogCallStackNode interface.
 */
function instanceOfDiagnosticLogCallStackNode(value) {
    let isInstance = true;
    return isInstance;
}
function DiagnosticLogCallStackNodeFromJSON(json) {
    return DiagnosticLogCallStackNodeFromJSONTyped(json, false);
}
function DiagnosticLogCallStackNodeFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        sampleCount: !(0, runtime_1.exists)(json, "sampleCount") ? undefined : json["sampleCount"],
        isBlameFrame: !(0, runtime_1.exists)(json, "isBlameFrame") ? undefined : json["isBlameFrame"],
        symbolName: !(0, runtime_1.exists)(json, "symbolName") ? undefined : json["symbolName"],
        insightsCategory: !(0, runtime_1.exists)(json, "insightsCategory") ? undefined : json["insightsCategory"],
        offsetIntoSymbol: !(0, runtime_1.exists)(json, "offsetIntoSymbol") ? undefined : json["offsetIntoSymbol"],
        binaryName: !(0, runtime_1.exists)(json, "binaryName") ? undefined : json["binaryName"],
        fileName: !(0, runtime_1.exists)(json, "fileName") ? undefined : json["fileName"],
        binaryUUID: !(0, runtime_1.exists)(json, "binaryUUID") ? undefined : json["binaryUUID"],
        lineNumber: !(0, runtime_1.exists)(json, "lineNumber") ? undefined : json["lineNumber"],
        address: !(0, runtime_1.exists)(json, "address") ? undefined : json["address"],
        offsetIntoBinaryTextSegment: !(0, runtime_1.exists)(json, "offsetIntoBinaryTextSegment") ? undefined : json["offsetIntoBinaryTextSegment"],
        rawFrame: !(0, runtime_1.exists)(json, "rawFrame") ? undefined : json["rawFrame"],
        subFrames: !(0, runtime_1.exists)(json, "subFrames") ? undefined : json["subFrames"].map(DiagnosticLogCallStackNodeFromJSON)
    };
}
function DiagnosticLogCallStackNodeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        sampleCount: value.sampleCount,
        isBlameFrame: value.isBlameFrame,
        symbolName: value.symbolName,
        insightsCategory: value.insightsCategory,
        offsetIntoSymbol: value.offsetIntoSymbol,
        binaryName: value.binaryName,
        fileName: value.fileName,
        binaryUUID: value.binaryUUID,
        lineNumber: value.lineNumber,
        address: value.address,
        offsetIntoBinaryTextSegment: value.offsetIntoBinaryTextSegment,
        rawFrame: value.rawFrame,
        subFrames: value.subFrames === undefined ? undefined : value.subFrames.map(DiagnosticLogCallStackNodeToJSON)
    };
}
