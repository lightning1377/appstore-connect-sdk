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
exports.BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum = void 0;
exports.instanceOfBuildRelationshipsBetaAppReviewSubmissionData = instanceOfBuildRelationshipsBetaAppReviewSubmissionData;
exports.BuildRelationshipsBetaAppReviewSubmissionDataFromJSON = BuildRelationshipsBetaAppReviewSubmissionDataFromJSON;
exports.BuildRelationshipsBetaAppReviewSubmissionDataFromJSONTyped = BuildRelationshipsBetaAppReviewSubmissionDataFromJSONTyped;
exports.BuildRelationshipsBetaAppReviewSubmissionDataToJSON = BuildRelationshipsBetaAppReviewSubmissionDataToJSON;
/**
 * @export
 */
exports.BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum = {
    BetaAppReviewSubmissions: "betaAppReviewSubmissions"
};
/**
 * Check if a given object implements the BuildRelationshipsBetaAppReviewSubmissionData interface.
 */
function instanceOfBuildRelationshipsBetaAppReviewSubmissionData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function BuildRelationshipsBetaAppReviewSubmissionDataFromJSON(json) {
    return BuildRelationshipsBetaAppReviewSubmissionDataFromJSONTyped(json, false);
}
function BuildRelationshipsBetaAppReviewSubmissionDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}
function BuildRelationshipsBetaAppReviewSubmissionDataToJSON(value) {
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
