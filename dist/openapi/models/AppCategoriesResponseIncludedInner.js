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
exports.AppCategoriesResponseIncludedInnerFromJSON = AppCategoriesResponseIncludedInnerFromJSON;
exports.AppCategoriesResponseIncludedInnerFromJSONTyped = AppCategoriesResponseIncludedInnerFromJSONTyped;
exports.AppCategoriesResponseIncludedInnerToJSON = AppCategoriesResponseIncludedInnerToJSON;
const AppCategory_1 = require("./AppCategory");
function AppCategoriesResponseIncludedInnerFromJSON(json) {
    return AppCategoriesResponseIncludedInnerFromJSONTyped(json, false);
}
function AppCategoriesResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign({}, (0, AppCategory_1.AppCategoryFromJSONTyped)(json, true));
}
function AppCategoriesResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, AppCategory_1.instanceOfAppCategory)(value)) {
        return (0, AppCategory_1.AppCategoryToJSON)(value);
    }
    return {};
}
