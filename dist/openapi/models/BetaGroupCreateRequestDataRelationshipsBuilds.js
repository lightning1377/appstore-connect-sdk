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
exports.instanceOfBetaGroupCreateRequestDataRelationshipsBuilds = instanceOfBetaGroupCreateRequestDataRelationshipsBuilds;
exports.BetaGroupCreateRequestDataRelationshipsBuildsFromJSON = BetaGroupCreateRequestDataRelationshipsBuildsFromJSON;
exports.BetaGroupCreateRequestDataRelationshipsBuildsFromJSONTyped = BetaGroupCreateRequestDataRelationshipsBuildsFromJSONTyped;
exports.BetaGroupCreateRequestDataRelationshipsBuildsToJSON = BetaGroupCreateRequestDataRelationshipsBuildsToJSON;
const runtime_1 = require("../runtime");
const AppEncryptionDeclarationRelationshipsBuildsDataInner_1 = require("./AppEncryptionDeclarationRelationshipsBuildsDataInner");
/**
 * Check if a given object implements the BetaGroupCreateRequestDataRelationshipsBuilds interface.
 */
function instanceOfBetaGroupCreateRequestDataRelationshipsBuilds(value) {
    let isInstance = true;
    return isInstance;
}
function BetaGroupCreateRequestDataRelationshipsBuildsFromJSON(json) {
    return BetaGroupCreateRequestDataRelationshipsBuildsFromJSONTyped(json, false);
}
function BetaGroupCreateRequestDataRelationshipsBuildsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !(0, runtime_1.exists)(json, "data") ? undefined : json["data"].map(AppEncryptionDeclarationRelationshipsBuildsDataInner_1.AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON)
    };
}
function BetaGroupCreateRequestDataRelationshipsBuildsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data === undefined ? undefined : value.data.map(AppEncryptionDeclarationRelationshipsBuildsDataInner_1.AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON)
    };
}
