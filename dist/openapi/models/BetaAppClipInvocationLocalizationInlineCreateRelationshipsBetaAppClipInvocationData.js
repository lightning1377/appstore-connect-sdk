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
exports.BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataTypeEnum = void 0;
exports.instanceOfBetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData = instanceOfBetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData;
exports.BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSON = BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSON;
exports.BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSONTyped = BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSONTyped;
exports.BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataToJSON = BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataToJSON;
/**
 * @export
 */
exports.BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataTypeEnum = {
    BetaAppClipInvocations: "betaAppClipInvocations"
};
/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData interface.
 */
function instanceOfBetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSON(json) {
    return BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSONTyped(json, false);
}
function BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}
function BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id
    };
}
