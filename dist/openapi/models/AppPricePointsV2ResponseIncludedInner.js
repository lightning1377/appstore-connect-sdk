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
exports.AppPricePointsV2ResponseIncludedInnerFromJSON = AppPricePointsV2ResponseIncludedInnerFromJSON;
exports.AppPricePointsV2ResponseIncludedInnerFromJSONTyped = AppPricePointsV2ResponseIncludedInnerFromJSONTyped;
exports.AppPricePointsV2ResponseIncludedInnerToJSON = AppPricePointsV2ResponseIncludedInnerToJSON;
const App_1 = require("./App");
const AppPriceTier_1 = require("./AppPriceTier");
const Territory_1 = require("./Territory");
function AppPricePointsV2ResponseIncludedInnerFromJSON(json) {
    return AppPricePointsV2ResponseIncludedInnerFromJSONTyped(json, false);
}
function AppPricePointsV2ResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign({}, (0, App_1.AppFromJSONTyped)(json, true)), (0, AppPriceTier_1.AppPriceTierFromJSONTyped)(json, true)), (0, Territory_1.TerritoryFromJSONTyped)(json, true));
}
function AppPricePointsV2ResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, App_1.instanceOfApp)(value)) {
        return (0, App_1.AppToJSON)(value);
    }
    if ((0, AppPriceTier_1.instanceOfAppPriceTier)(value)) {
        return (0, AppPriceTier_1.AppPriceTierToJSON)(value);
    }
    if ((0, Territory_1.instanceOfTerritory)(value)) {
        return (0, Territory_1.TerritoryToJSON)(value);
    }
    return {};
}
