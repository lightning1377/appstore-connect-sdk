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
exports.AppCustomProductPagesResponseIncludedInnerFromJSON = AppCustomProductPagesResponseIncludedInnerFromJSON;
exports.AppCustomProductPagesResponseIncludedInnerFromJSONTyped = AppCustomProductPagesResponseIncludedInnerFromJSONTyped;
exports.AppCustomProductPagesResponseIncludedInnerToJSON = AppCustomProductPagesResponseIncludedInnerToJSON;
const App_1 = require("./App");
const AppCustomProductPageVersion_1 = require("./AppCustomProductPageVersion");
function AppCustomProductPagesResponseIncludedInnerFromJSON(json) {
    return AppCustomProductPagesResponseIncludedInnerFromJSONTyped(json, false);
}
function AppCustomProductPagesResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, App_1.AppFromJSONTyped)(json, true)), (0, AppCustomProductPageVersion_1.AppCustomProductPageVersionFromJSONTyped)(json, true));
}
function AppCustomProductPagesResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, App_1.instanceOfApp)(value)) {
        return (0, App_1.AppToJSON)(value);
    }
    if ((0, AppCustomProductPageVersion_1.instanceOfAppCustomProductPageVersion)(value)) {
        return (0, AppCustomProductPageVersion_1.AppCustomProductPageVersionToJSON)(value);
    }
    return {};
}
