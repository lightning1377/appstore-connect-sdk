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
exports.instanceOfBetaAppReviewSubmissionRelationships = instanceOfBetaAppReviewSubmissionRelationships;
exports.BetaAppReviewSubmissionRelationshipsFromJSON = BetaAppReviewSubmissionRelationshipsFromJSON;
exports.BetaAppReviewSubmissionRelationshipsFromJSONTyped = BetaAppReviewSubmissionRelationshipsFromJSONTyped;
exports.BetaAppReviewSubmissionRelationshipsToJSON = BetaAppReviewSubmissionRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppStoreVersionRelationshipsBuild_1 = require("./AppStoreVersionRelationshipsBuild");
/**
 * Check if a given object implements the BetaAppReviewSubmissionRelationships interface.
 */
function instanceOfBetaAppReviewSubmissionRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function BetaAppReviewSubmissionRelationshipsFromJSON(json) {
    return BetaAppReviewSubmissionRelationshipsFromJSONTyped(json, false);
}
function BetaAppReviewSubmissionRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        build: !(0, runtime_1.exists)(json, "build") ? undefined : (0, AppStoreVersionRelationshipsBuild_1.AppStoreVersionRelationshipsBuildFromJSON)(json["build"])
    };
}
function BetaAppReviewSubmissionRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        build: (0, AppStoreVersionRelationshipsBuild_1.AppStoreVersionRelationshipsBuildToJSON)(value.build)
    };
}
