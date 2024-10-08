"use strict";
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfAppCustomProductPageCreateRequestDataRelationshipsApp = instanceOfAppCustomProductPageCreateRequestDataRelationshipsApp;
exports.AppCustomProductPageCreateRequestDataRelationshipsAppFromJSON = AppCustomProductPageCreateRequestDataRelationshipsAppFromJSON;
exports.AppCustomProductPageCreateRequestDataRelationshipsAppFromJSONTyped = AppCustomProductPageCreateRequestDataRelationshipsAppFromJSONTyped;
exports.AppCustomProductPageCreateRequestDataRelationshipsAppToJSON = AppCustomProductPageCreateRequestDataRelationshipsAppToJSON;
const AppClipRelationshipsAppData_1 = require("./AppClipRelationshipsAppData");
/**
 * Check if a given object implements the AppCustomProductPageCreateRequestDataRelationshipsApp interface.
 */
function instanceOfAppCustomProductPageCreateRequestDataRelationshipsApp(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppCustomProductPageCreateRequestDataRelationshipsAppFromJSON(json) {
    return AppCustomProductPageCreateRequestDataRelationshipsAppFromJSONTyped(json, false);
}
function AppCustomProductPageCreateRequestDataRelationshipsAppFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, AppClipRelationshipsAppData_1.AppClipRelationshipsAppDataFromJSON)(json['data']),
    };
}
function AppCustomProductPageCreateRequestDataRelationshipsAppToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, AppClipRelationshipsAppData_1.AppClipRelationshipsAppDataToJSON)(value.data),
    };
}
