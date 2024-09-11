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
exports.instanceOfAppCategoryResponse = instanceOfAppCategoryResponse;
exports.AppCategoryResponseFromJSON = AppCategoryResponseFromJSON;
exports.AppCategoryResponseFromJSONTyped = AppCategoryResponseFromJSONTyped;
exports.AppCategoryResponseToJSON = AppCategoryResponseToJSON;
const runtime_1 = require("../runtime");
const AppCategory_1 = require("./AppCategory");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppCategoryResponse interface.
 */
function instanceOfAppCategoryResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppCategoryResponseFromJSON(json) {
    return AppCategoryResponseFromJSONTyped(json, false);
}
function AppCategoryResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppCategory_1.AppCategoryFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppCategory_1.AppCategoryFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AppCategoryResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppCategory_1.AppCategoryToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(AppCategory_1.AppCategoryToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
