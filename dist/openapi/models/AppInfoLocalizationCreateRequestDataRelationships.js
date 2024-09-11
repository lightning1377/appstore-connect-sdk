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
exports.instanceOfAppInfoLocalizationCreateRequestDataRelationships = instanceOfAppInfoLocalizationCreateRequestDataRelationships;
exports.AppInfoLocalizationCreateRequestDataRelationshipsFromJSON = AppInfoLocalizationCreateRequestDataRelationshipsFromJSON;
exports.AppInfoLocalizationCreateRequestDataRelationshipsFromJSONTyped = AppInfoLocalizationCreateRequestDataRelationshipsFromJSONTyped;
exports.AppInfoLocalizationCreateRequestDataRelationshipsToJSON = AppInfoLocalizationCreateRequestDataRelationshipsToJSON;
const AppInfoLocalizationCreateRequestDataRelationshipsAppInfo_1 = require("./AppInfoLocalizationCreateRequestDataRelationshipsAppInfo");
/**
 * Check if a given object implements the AppInfoLocalizationCreateRequestDataRelationships interface.
 */
function instanceOfAppInfoLocalizationCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "appInfo" in value;
    return isInstance;
}
function AppInfoLocalizationCreateRequestDataRelationshipsFromJSON(json) {
    return AppInfoLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function AppInfoLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appInfo: (0, AppInfoLocalizationCreateRequestDataRelationshipsAppInfo_1.AppInfoLocalizationCreateRequestDataRelationshipsAppInfoFromJSON)(json["appInfo"])
    };
}
function AppInfoLocalizationCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appInfo: (0, AppInfoLocalizationCreateRequestDataRelationshipsAppInfo_1.AppInfoLocalizationCreateRequestDataRelationshipsAppInfoToJSON)(value.appInfo)
    };
}
