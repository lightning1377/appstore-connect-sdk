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
exports.instanceOfBetaAppClipInvocationLocalizationCreateRequestDataRelationships = instanceOfBetaAppClipInvocationLocalizationCreateRequestDataRelationships;
exports.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSON = BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSON;
exports.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSONTyped = BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSONTyped;
exports.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsToJSON = BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsToJSON;
const BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation_1 = require("./BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation");
/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationCreateRequestDataRelationships interface.
 */
function instanceOfBetaAppClipInvocationLocalizationCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "betaAppClipInvocation" in value;
    return isInstance;
}
function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSON(json) {
    return BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        betaAppClipInvocation: (0, BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation_1.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSON)(json["betaAppClipInvocation"])
    };
}
function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        betaAppClipInvocation: (0, BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation_1.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationToJSON)(value.betaAppClipInvocation)
    };
}
