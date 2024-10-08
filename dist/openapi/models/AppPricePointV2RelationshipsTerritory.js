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
exports.instanceOfAppPricePointV2RelationshipsTerritory = instanceOfAppPricePointV2RelationshipsTerritory;
exports.AppPricePointV2RelationshipsTerritoryFromJSON = AppPricePointV2RelationshipsTerritoryFromJSON;
exports.AppPricePointV2RelationshipsTerritoryFromJSONTyped = AppPricePointV2RelationshipsTerritoryFromJSONTyped;
exports.AppPricePointV2RelationshipsTerritoryToJSON = AppPricePointV2RelationshipsTerritoryToJSON;
const runtime_1 = require("../runtime");
const AppCategoryRelationshipsSubcategoriesLinks_1 = require("./AppCategoryRelationshipsSubcategoriesLinks");
const AppPricePointV2RelationshipsTerritoryData_1 = require("./AppPricePointV2RelationshipsTerritoryData");
/**
 * Check if a given object implements the AppPricePointV2RelationshipsTerritory interface.
 */
function instanceOfAppPricePointV2RelationshipsTerritory(value) {
    let isInstance = true;
    return isInstance;
}
function AppPricePointV2RelationshipsTerritoryFromJSON(json) {
    return AppPricePointV2RelationshipsTerritoryFromJSONTyped(json, false);
}
function AppPricePointV2RelationshipsTerritoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppCategoryRelationshipsSubcategoriesLinks_1.AppCategoryRelationshipsSubcategoriesLinksFromJSON)(json['links']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, AppPricePointV2RelationshipsTerritoryData_1.AppPricePointV2RelationshipsTerritoryDataFromJSON)(json['data']),
    };
}
function AppPricePointV2RelationshipsTerritoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppCategoryRelationshipsSubcategoriesLinks_1.AppCategoryRelationshipsSubcategoriesLinksToJSON)(value.links),
        'data': (0, AppPricePointV2RelationshipsTerritoryData_1.AppPricePointV2RelationshipsTerritoryDataToJSON)(value.data),
    };
}
