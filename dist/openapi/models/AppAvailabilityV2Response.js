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
exports.instanceOfAppAvailabilityV2Response = instanceOfAppAvailabilityV2Response;
exports.AppAvailabilityV2ResponseFromJSON = AppAvailabilityV2ResponseFromJSON;
exports.AppAvailabilityV2ResponseFromJSONTyped = AppAvailabilityV2ResponseFromJSONTyped;
exports.AppAvailabilityV2ResponseToJSON = AppAvailabilityV2ResponseToJSON;
const runtime_1 = require("../runtime");
const AppAvailabilityV2_1 = require("./AppAvailabilityV2");
const DocumentLinks_1 = require("./DocumentLinks");
const TerritoryAvailability_1 = require("./TerritoryAvailability");
/**
 * Check if a given object implements the AppAvailabilityV2Response interface.
 */
function instanceOfAppAvailabilityV2Response(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppAvailabilityV2ResponseFromJSON(json) {
    return AppAvailabilityV2ResponseFromJSONTyped(json, false);
}
function AppAvailabilityV2ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppAvailabilityV2_1.AppAvailabilityV2FromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(TerritoryAvailability_1.TerritoryAvailabilityFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AppAvailabilityV2ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppAvailabilityV2_1.AppAvailabilityV2ToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(TerritoryAvailability_1.TerritoryAvailabilityToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
