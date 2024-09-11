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
exports.AppAvailabilityTypeEnum = void 0;
exports.instanceOfAppAvailability = instanceOfAppAvailability;
exports.AppAvailabilityFromJSON = AppAvailabilityFromJSON;
exports.AppAvailabilityFromJSONTyped = AppAvailabilityFromJSONTyped;
exports.AppAvailabilityToJSON = AppAvailabilityToJSON;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationships_1 = require("./AppAvailabilityRelationships");
const AppAvailabilityV2Attributes_1 = require("./AppAvailabilityV2Attributes");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.AppAvailabilityTypeEnum = {
    AppAvailabilities: "appAvailabilities"
};
/**
 * Check if a given object implements the AppAvailability interface.
 */
function instanceOfAppAvailability(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppAvailabilityFromJSON(json) {
    return AppAvailabilityFromJSONTyped(json, false);
}
function AppAvailabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, AppAvailabilityV2Attributes_1.AppAvailabilityV2AttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, AppAvailabilityRelationships_1.AppAvailabilityRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function AppAvailabilityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, AppAvailabilityV2Attributes_1.AppAvailabilityV2AttributesToJSON)(value.attributes),
        relationships: (0, AppAvailabilityRelationships_1.AppAvailabilityRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
