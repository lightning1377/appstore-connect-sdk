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
exports.instanceOfAppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization = instanceOfAppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization;
exports.AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSON = AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSON;
exports.AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSONTyped = AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSONTyped;
exports.AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationToJSON = AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationToJSON;
const runtime_1 = require("../runtime");
const AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner_1 = require("./AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner");
/**
 * Check if a given object implements the AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization interface.
 */
function instanceOfAppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization(value) {
    let isInstance = true;
    return isInstance;
}
function AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSON(json) {
    return AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSONTyped(json, false);
}
function AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner_1.AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSON)(json["data"])
    };
}
function AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner_1.AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerToJSON)(value.data)
    };
}
