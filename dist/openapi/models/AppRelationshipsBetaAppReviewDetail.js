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
exports.instanceOfAppRelationshipsBetaAppReviewDetail = instanceOfAppRelationshipsBetaAppReviewDetail;
exports.AppRelationshipsBetaAppReviewDetailFromJSON = AppRelationshipsBetaAppReviewDetailFromJSON;
exports.AppRelationshipsBetaAppReviewDetailFromJSONTyped = AppRelationshipsBetaAppReviewDetailFromJSONTyped;
exports.AppRelationshipsBetaAppReviewDetailToJSON = AppRelationshipsBetaAppReviewDetailToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const AppRelationshipsBetaAppReviewDetailData_1 = require("./AppRelationshipsBetaAppReviewDetailData");
/**
 * Check if a given object implements the AppRelationshipsBetaAppReviewDetail interface.
 */
function instanceOfAppRelationshipsBetaAppReviewDetail(value) {
    let isInstance = true;
    return isInstance;
}
function AppRelationshipsBetaAppReviewDetailFromJSON(json) {
    return AppRelationshipsBetaAppReviewDetailFromJSONTyped(json, false);
}
function AppRelationshipsBetaAppReviewDetailFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, AppRelationshipsBetaAppReviewDetailData_1.AppRelationshipsBetaAppReviewDetailDataFromJSON)(json["data"])
    };
}
function AppRelationshipsBetaAppReviewDetailToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        data: (0, AppRelationshipsBetaAppReviewDetailData_1.AppRelationshipsBetaAppReviewDetailDataToJSON)(value.data)
    };
}
