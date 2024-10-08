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
exports.instanceOfAppCategoryRelationships = instanceOfAppCategoryRelationships;
exports.AppCategoryRelationshipsFromJSON = AppCategoryRelationshipsFromJSON;
exports.AppCategoryRelationshipsFromJSONTyped = AppCategoryRelationshipsFromJSONTyped;
exports.AppCategoryRelationshipsToJSON = AppCategoryRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppCategoryRelationshipsParent_1 = require("./AppCategoryRelationshipsParent");
const AppCategoryRelationshipsSubcategories_1 = require("./AppCategoryRelationshipsSubcategories");
/**
 * Check if a given object implements the AppCategoryRelationships interface.
 */
function instanceOfAppCategoryRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppCategoryRelationshipsFromJSON(json) {
    return AppCategoryRelationshipsFromJSONTyped(json, false);
}
function AppCategoryRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        subcategories: !(0, runtime_1.exists)(json, "subcategories") ? undefined : (0, AppCategoryRelationshipsSubcategories_1.AppCategoryRelationshipsSubcategoriesFromJSON)(json["subcategories"]),
        parent: !(0, runtime_1.exists)(json, "parent") ? undefined : (0, AppCategoryRelationshipsParent_1.AppCategoryRelationshipsParentFromJSON)(json["parent"])
    };
}
function AppCategoryRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        subcategories: (0, AppCategoryRelationshipsSubcategories_1.AppCategoryRelationshipsSubcategoriesToJSON)(value.subcategories),
        parent: (0, AppCategoryRelationshipsParent_1.AppCategoryRelationshipsParentToJSON)(value.parent)
    };
}
