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
exports.instanceOfAppClipRelationships = instanceOfAppClipRelationships;
exports.AppClipRelationshipsFromJSON = AppClipRelationshipsFromJSON;
exports.AppClipRelationshipsFromJSONTyped = AppClipRelationshipsFromJSONTyped;
exports.AppClipRelationshipsToJSON = AppClipRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsApp_1 = require("./AppAvailabilityRelationshipsApp");
const AppClipRelationshipsAppClipDefaultExperiences_1 = require("./AppClipRelationshipsAppClipDefaultExperiences");
/**
 * Check if a given object implements the AppClipRelationships interface.
 */
function instanceOfAppClipRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppClipRelationshipsFromJSON(json) {
    return AppClipRelationshipsFromJSONTyped(json, false);
}
function AppClipRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        app: !(0, runtime_1.exists)(json, "app") ? undefined : (0, AppAvailabilityRelationshipsApp_1.AppAvailabilityRelationshipsAppFromJSON)(json["app"]),
        appClipDefaultExperiences: !(0, runtime_1.exists)(json, "appClipDefaultExperiences") ? undefined : (0, AppClipRelationshipsAppClipDefaultExperiences_1.AppClipRelationshipsAppClipDefaultExperiencesFromJSON)(json["appClipDefaultExperiences"])
    };
}
function AppClipRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        app: (0, AppAvailabilityRelationshipsApp_1.AppAvailabilityRelationshipsAppToJSON)(value.app),
        appClipDefaultExperiences: (0, AppClipRelationshipsAppClipDefaultExperiences_1.AppClipRelationshipsAppClipDefaultExperiencesToJSON)(value.appClipDefaultExperiences)
    };
}
