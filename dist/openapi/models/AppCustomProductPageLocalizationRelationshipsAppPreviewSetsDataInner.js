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
exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerTypeEnum = void 0;
exports.instanceOfAppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner = instanceOfAppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner;
exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON = AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON;
exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped = AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped;
exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON = AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON;
/**
 * @export
 */
exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerTypeEnum = {
    AppPreviewSets: "appPreviewSets"
};
/**
 * Check if a given object implements the AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner interface.
 */
function instanceOfAppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON(json) {
    return AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped(json, false);
}
function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}
function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id
    };
}
