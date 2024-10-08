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
exports.instanceOfAppStoreVersionExperimentCreateRequestDataAttributes = instanceOfAppStoreVersionExperimentCreateRequestDataAttributes;
exports.AppStoreVersionExperimentCreateRequestDataAttributesFromJSON = AppStoreVersionExperimentCreateRequestDataAttributesFromJSON;
exports.AppStoreVersionExperimentCreateRequestDataAttributesFromJSONTyped = AppStoreVersionExperimentCreateRequestDataAttributesFromJSONTyped;
exports.AppStoreVersionExperimentCreateRequestDataAttributesToJSON = AppStoreVersionExperimentCreateRequestDataAttributesToJSON;
/**
 * Check if a given object implements the AppStoreVersionExperimentCreateRequestDataAttributes interface.
 */
function instanceOfAppStoreVersionExperimentCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "trafficProportion" in value;
    return isInstance;
}
function AppStoreVersionExperimentCreateRequestDataAttributesFromJSON(json) {
    return AppStoreVersionExperimentCreateRequestDataAttributesFromJSONTyped(json, false);
}
function AppStoreVersionExperimentCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: json["name"],
        trafficProportion: json["trafficProportion"]
    };
}
function AppStoreVersionExperimentCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        trafficProportion: value.trafficProportion
    };
}
