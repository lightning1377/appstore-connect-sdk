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
exports.instanceOfAppPriceTierRelationships = instanceOfAppPriceTierRelationships;
exports.AppPriceTierRelationshipsFromJSON = AppPriceTierRelationshipsFromJSON;
exports.AppPriceTierRelationshipsFromJSONTyped = AppPriceTierRelationshipsFromJSONTyped;
exports.AppPriceTierRelationshipsToJSON = AppPriceTierRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppPriceTierRelationshipsPricePoints_1 = require("./AppPriceTierRelationshipsPricePoints");
/**
 * Check if a given object implements the AppPriceTierRelationships interface.
 */
function instanceOfAppPriceTierRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppPriceTierRelationshipsFromJSON(json) {
    return AppPriceTierRelationshipsFromJSONTyped(json, false);
}
function AppPriceTierRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pricePoints': !(0, runtime_1.exists)(json, 'pricePoints') ? undefined : (0, AppPriceTierRelationshipsPricePoints_1.AppPriceTierRelationshipsPricePointsFromJSON)(json['pricePoints']),
    };
}
function AppPriceTierRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pricePoints': (0, AppPriceTierRelationshipsPricePoints_1.AppPriceTierRelationshipsPricePointsToJSON)(value.pricePoints),
    };
}
