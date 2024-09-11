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
exports.BetaAppClipInvocationUpdateRequestDataTypeEnum = void 0;
exports.instanceOfBetaAppClipInvocationUpdateRequestData = instanceOfBetaAppClipInvocationUpdateRequestData;
exports.BetaAppClipInvocationUpdateRequestDataFromJSON = BetaAppClipInvocationUpdateRequestDataFromJSON;
exports.BetaAppClipInvocationUpdateRequestDataFromJSONTyped = BetaAppClipInvocationUpdateRequestDataFromJSONTyped;
exports.BetaAppClipInvocationUpdateRequestDataToJSON = BetaAppClipInvocationUpdateRequestDataToJSON;
const runtime_1 = require("../runtime");
const BetaAppClipInvocationAttributes_1 = require("./BetaAppClipInvocationAttributes");
/**
 * @export
 */
exports.BetaAppClipInvocationUpdateRequestDataTypeEnum = {
    BetaAppClipInvocations: "betaAppClipInvocations"
};
/**
 * Check if a given object implements the BetaAppClipInvocationUpdateRequestData interface.
 */
function instanceOfBetaAppClipInvocationUpdateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function BetaAppClipInvocationUpdateRequestDataFromJSON(json) {
    return BetaAppClipInvocationUpdateRequestDataFromJSONTyped(json, false);
}
function BetaAppClipInvocationUpdateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, BetaAppClipInvocationAttributes_1.BetaAppClipInvocationAttributesFromJSON)(json["attributes"])
    };
}
function BetaAppClipInvocationUpdateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, BetaAppClipInvocationAttributes_1.BetaAppClipInvocationAttributesToJSON)(value.attributes)
    };
}
