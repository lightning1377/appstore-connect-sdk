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
exports.ReviewSubmissionCreateRequestDataTypeEnum = void 0;
exports.instanceOfReviewSubmissionCreateRequestData = instanceOfReviewSubmissionCreateRequestData;
exports.ReviewSubmissionCreateRequestDataFromJSON = ReviewSubmissionCreateRequestDataFromJSON;
exports.ReviewSubmissionCreateRequestDataFromJSONTyped = ReviewSubmissionCreateRequestDataFromJSONTyped;
exports.ReviewSubmissionCreateRequestDataToJSON = ReviewSubmissionCreateRequestDataToJSON;
const AnalyticsReportRequestCreateRequestDataRelationships_1 = require("./AnalyticsReportRequestCreateRequestDataRelationships");
const ReviewSubmissionCreateRequestDataAttributes_1 = require("./ReviewSubmissionCreateRequestDataAttributes");
/**
 * @export
 */
exports.ReviewSubmissionCreateRequestDataTypeEnum = {
    ReviewSubmissions: "reviewSubmissions"
};
/**
 * Check if a given object implements the ReviewSubmissionCreateRequestData interface.
 */
function instanceOfReviewSubmissionCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function ReviewSubmissionCreateRequestDataFromJSON(json) {
    return ReviewSubmissionCreateRequestDataFromJSONTyped(json, false);
}
function ReviewSubmissionCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, ReviewSubmissionCreateRequestDataAttributes_1.ReviewSubmissionCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, AnalyticsReportRequestCreateRequestDataRelationships_1.AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function ReviewSubmissionCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, ReviewSubmissionCreateRequestDataAttributes_1.ReviewSubmissionCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AnalyticsReportRequestCreateRequestDataRelationships_1.AnalyticsReportRequestCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
