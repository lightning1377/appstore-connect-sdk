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
exports.instanceOfAnalyticsReportSegmentResponse = instanceOfAnalyticsReportSegmentResponse;
exports.AnalyticsReportSegmentResponseFromJSON = AnalyticsReportSegmentResponseFromJSON;
exports.AnalyticsReportSegmentResponseFromJSONTyped = AnalyticsReportSegmentResponseFromJSONTyped;
exports.AnalyticsReportSegmentResponseToJSON = AnalyticsReportSegmentResponseToJSON;
const AnalyticsReportSegment_1 = require("./AnalyticsReportSegment");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AnalyticsReportSegmentResponse interface.
 */
function instanceOfAnalyticsReportSegmentResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AnalyticsReportSegmentResponseFromJSON(json) {
    return AnalyticsReportSegmentResponseFromJSONTyped(json, false);
}
function AnalyticsReportSegmentResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AnalyticsReportSegment_1.AnalyticsReportSegmentFromJSON)(json["data"]),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AnalyticsReportSegmentResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AnalyticsReportSegment_1.AnalyticsReportSegmentToJSON)(value.data),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
