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
exports.AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum = void 0;
exports.instanceOfAppCustomProductPageVersionRelationshipsAppCustomProductPageData = instanceOfAppCustomProductPageVersionRelationshipsAppCustomProductPageData;
exports.AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSON = AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSON;
exports.AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSONTyped = AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSONTyped;
exports.AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSON = AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSON;
/**
 * @export
 */
exports.AppCustomProductPageVersionRelationshipsAppCustomProductPageDataTypeEnum = {
    AppCustomProductPages: "appCustomProductPages"
};
/**
 * Check if a given object implements the AppCustomProductPageVersionRelationshipsAppCustomProductPageData interface.
 */
function instanceOfAppCustomProductPageVersionRelationshipsAppCustomProductPageData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSON(json) {
    return AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSONTyped(json, false);
}
function AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}
function AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSON(value) {
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
