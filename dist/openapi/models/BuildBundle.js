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
exports.BuildBundleTypeEnum = void 0;
exports.instanceOfBuildBundle = instanceOfBuildBundle;
exports.BuildBundleFromJSON = BuildBundleFromJSON;
exports.BuildBundleFromJSONTyped = BuildBundleFromJSONTyped;
exports.BuildBundleToJSON = BuildBundleToJSON;
const runtime_1 = require("../runtime");
const BuildBundleAttributes_1 = require("./BuildBundleAttributes");
const BuildBundleRelationships_1 = require("./BuildBundleRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.BuildBundleTypeEnum = {
    BuildBundles: "buildBundles"
};
/**
 * Check if a given object implements the BuildBundle interface.
 */
function instanceOfBuildBundle(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function BuildBundleFromJSON(json) {
    return BuildBundleFromJSONTyped(json, false);
}
function BuildBundleFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, BuildBundleAttributes_1.BuildBundleAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, BuildBundleRelationships_1.BuildBundleRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function BuildBundleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, BuildBundleAttributes_1.BuildBundleAttributesToJSON)(value.attributes),
        relationships: (0, BuildBundleRelationships_1.BuildBundleRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
