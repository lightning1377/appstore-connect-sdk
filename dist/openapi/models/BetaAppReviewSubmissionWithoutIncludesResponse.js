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
exports.instanceOfBetaAppReviewSubmissionWithoutIncludesResponse = instanceOfBetaAppReviewSubmissionWithoutIncludesResponse;
exports.BetaAppReviewSubmissionWithoutIncludesResponseFromJSON = BetaAppReviewSubmissionWithoutIncludesResponseFromJSON;
exports.BetaAppReviewSubmissionWithoutIncludesResponseFromJSONTyped = BetaAppReviewSubmissionWithoutIncludesResponseFromJSONTyped;
exports.BetaAppReviewSubmissionWithoutIncludesResponseToJSON = BetaAppReviewSubmissionWithoutIncludesResponseToJSON;
const BetaAppReviewSubmission_1 = require("./BetaAppReviewSubmission");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the BetaAppReviewSubmissionWithoutIncludesResponse interface.
 */
function instanceOfBetaAppReviewSubmissionWithoutIncludesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function BetaAppReviewSubmissionWithoutIncludesResponseFromJSON(json) {
    return BetaAppReviewSubmissionWithoutIncludesResponseFromJSONTyped(json, false);
}
function BetaAppReviewSubmissionWithoutIncludesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BetaAppReviewSubmission_1.BetaAppReviewSubmissionFromJSON)(json["data"]),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function BetaAppReviewSubmissionWithoutIncludesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BetaAppReviewSubmission_1.BetaAppReviewSubmissionToJSON)(value.data),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
