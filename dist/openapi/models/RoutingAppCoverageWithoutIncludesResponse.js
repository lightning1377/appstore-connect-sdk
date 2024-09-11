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
exports.instanceOfRoutingAppCoverageWithoutIncludesResponse = instanceOfRoutingAppCoverageWithoutIncludesResponse;
exports.RoutingAppCoverageWithoutIncludesResponseFromJSON = RoutingAppCoverageWithoutIncludesResponseFromJSON;
exports.RoutingAppCoverageWithoutIncludesResponseFromJSONTyped = RoutingAppCoverageWithoutIncludesResponseFromJSONTyped;
exports.RoutingAppCoverageWithoutIncludesResponseToJSON = RoutingAppCoverageWithoutIncludesResponseToJSON;
const DocumentLinks_1 = require("./DocumentLinks");
const RoutingAppCoverage_1 = require("./RoutingAppCoverage");
/**
 * Check if a given object implements the RoutingAppCoverageWithoutIncludesResponse interface.
 */
function instanceOfRoutingAppCoverageWithoutIncludesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function RoutingAppCoverageWithoutIncludesResponseFromJSON(json) {
    return RoutingAppCoverageWithoutIncludesResponseFromJSONTyped(json, false);
}
function RoutingAppCoverageWithoutIncludesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, RoutingAppCoverage_1.RoutingAppCoverageFromJSON)(json["data"]),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function RoutingAppCoverageWithoutIncludesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, RoutingAppCoverage_1.RoutingAppCoverageToJSON)(value.data),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
