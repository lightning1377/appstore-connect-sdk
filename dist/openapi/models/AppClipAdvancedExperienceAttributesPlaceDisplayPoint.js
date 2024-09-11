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
exports.AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum = void 0;
exports.instanceOfAppClipAdvancedExperienceAttributesPlaceDisplayPoint = instanceOfAppClipAdvancedExperienceAttributesPlaceDisplayPoint;
exports.AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSON = AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSON;
exports.AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSONTyped = AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSONTyped;
exports.AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSON = AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSON;
const runtime_1 = require("../runtime");
const AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates_1 = require("./AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates");
/**
 * @export
 */
exports.AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum = {
    Calculated: "CALCULATED",
    ManuallyPlaced: "MANUALLY_PLACED"
};
/**
 * Check if a given object implements the AppClipAdvancedExperienceAttributesPlaceDisplayPoint interface.
 */
function instanceOfAppClipAdvancedExperienceAttributesPlaceDisplayPoint(value) {
    let isInstance = true;
    return isInstance;
}
function AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSON(json) {
    return AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSONTyped(json, false);
}
function AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        coordinates: !(0, runtime_1.exists)(json, "coordinates") ? undefined : (0, AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates_1.AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesFromJSON)(json["coordinates"]),
        source: !(0, runtime_1.exists)(json, "source") ? undefined : json["source"]
    };
}
function AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        coordinates: (0, AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates_1.AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesToJSON)(value.coordinates),
        source: value.source
    };
}
