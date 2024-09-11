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
exports.AppClipDefaultExperienceTypeEnum = void 0;
exports.instanceOfAppClipDefaultExperience = instanceOfAppClipDefaultExperience;
exports.AppClipDefaultExperienceFromJSON = AppClipDefaultExperienceFromJSON;
exports.AppClipDefaultExperienceFromJSONTyped = AppClipDefaultExperienceFromJSONTyped;
exports.AppClipDefaultExperienceToJSON = AppClipDefaultExperienceToJSON;
const runtime_1 = require("../runtime");
const AppClipDefaultExperienceAttributes_1 = require("./AppClipDefaultExperienceAttributes");
const AppClipDefaultExperienceRelationships_1 = require("./AppClipDefaultExperienceRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.AppClipDefaultExperienceTypeEnum = {
    AppClipDefaultExperiences: "appClipDefaultExperiences"
};
/**
 * Check if a given object implements the AppClipDefaultExperience interface.
 */
function instanceOfAppClipDefaultExperience(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppClipDefaultExperienceFromJSON(json) {
    return AppClipDefaultExperienceFromJSONTyped(json, false);
}
function AppClipDefaultExperienceFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, AppClipDefaultExperienceAttributes_1.AppClipDefaultExperienceAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, AppClipDefaultExperienceRelationships_1.AppClipDefaultExperienceRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function AppClipDefaultExperienceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, AppClipDefaultExperienceAttributes_1.AppClipDefaultExperienceAttributesToJSON)(value.attributes),
        relationships: (0, AppClipDefaultExperienceRelationships_1.AppClipDefaultExperienceRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
