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
exports.AnalyticsReportRequestTypeEnum = void 0;
exports.instanceOfAnalyticsReportRequest = instanceOfAnalyticsReportRequest;
exports.AnalyticsReportRequestFromJSON = AnalyticsReportRequestFromJSON;
exports.AnalyticsReportRequestFromJSONTyped = AnalyticsReportRequestFromJSONTyped;
exports.AnalyticsReportRequestToJSON = AnalyticsReportRequestToJSON;
const runtime_1 = require("../runtime");
const AnalyticsReportRequestAttributes_1 = require("./AnalyticsReportRequestAttributes");
const AnalyticsReportRequestRelationships_1 = require("./AnalyticsReportRequestRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.AnalyticsReportRequestTypeEnum = {
    AnalyticsReportRequests: "analyticsReportRequests"
};
/**
 * Check if a given object implements the AnalyticsReportRequest interface.
 */
function instanceOfAnalyticsReportRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AnalyticsReportRequestFromJSON(json) {
    return AnalyticsReportRequestFromJSONTyped(json, false);
}
function AnalyticsReportRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, AnalyticsReportRequestAttributes_1.AnalyticsReportRequestAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, AnalyticsReportRequestRelationships_1.AnalyticsReportRequestRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function AnalyticsReportRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, AnalyticsReportRequestAttributes_1.AnalyticsReportRequestAttributesToJSON)(value.attributes),
        relationships: (0, AnalyticsReportRequestRelationships_1.AnalyticsReportRequestRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
