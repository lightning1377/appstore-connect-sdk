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
exports.AppStoreVersionExperimentV2TypeEnum = void 0;
exports.instanceOfAppStoreVersionExperimentV2 = instanceOfAppStoreVersionExperimentV2;
exports.AppStoreVersionExperimentV2FromJSON = AppStoreVersionExperimentV2FromJSON;
exports.AppStoreVersionExperimentV2FromJSONTyped = AppStoreVersionExperimentV2FromJSONTyped;
exports.AppStoreVersionExperimentV2ToJSON = AppStoreVersionExperimentV2ToJSON;
const runtime_1 = require("../runtime");
const AppStoreVersionExperimentV2Attributes_1 = require("./AppStoreVersionExperimentV2Attributes");
const AppStoreVersionExperimentV2Relationships_1 = require("./AppStoreVersionExperimentV2Relationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.AppStoreVersionExperimentV2TypeEnum = {
    AppStoreVersionExperiments: "appStoreVersionExperiments"
};
/**
 * Check if a given object implements the AppStoreVersionExperimentV2 interface.
 */
function instanceOfAppStoreVersionExperimentV2(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppStoreVersionExperimentV2FromJSON(json) {
    return AppStoreVersionExperimentV2FromJSONTyped(json, false);
}
function AppStoreVersionExperimentV2FromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, AppStoreVersionExperimentV2Attributes_1.AppStoreVersionExperimentV2AttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, AppStoreVersionExperimentV2Relationships_1.AppStoreVersionExperimentV2RelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function AppStoreVersionExperimentV2ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, AppStoreVersionExperimentV2Attributes_1.AppStoreVersionExperimentV2AttributesToJSON)(value.attributes),
        relationships: (0, AppStoreVersionExperimentV2Relationships_1.AppStoreVersionExperimentV2RelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
