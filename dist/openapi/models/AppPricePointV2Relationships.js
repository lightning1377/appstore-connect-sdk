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
exports.instanceOfAppPricePointV2Relationships = instanceOfAppPricePointV2Relationships;
exports.AppPricePointV2RelationshipsFromJSON = AppPricePointV2RelationshipsFromJSON;
exports.AppPricePointV2RelationshipsFromJSONTyped = AppPricePointV2RelationshipsFromJSONTyped;
exports.AppPricePointV2RelationshipsToJSON = AppPricePointV2RelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppClipRelationshipsApp_1 = require("./AppClipRelationshipsApp");
const AppPricePointV2RelationshipsPriceTier_1 = require("./AppPricePointV2RelationshipsPriceTier");
const AppPricePointV2RelationshipsTerritory_1 = require("./AppPricePointV2RelationshipsTerritory");
/**
 * Check if a given object implements the AppPricePointV2Relationships interface.
 */
function instanceOfAppPricePointV2Relationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppPricePointV2RelationshipsFromJSON(json) {
    return AppPricePointV2RelationshipsFromJSONTyped(json, false);
}
function AppPricePointV2RelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'app': !(0, runtime_1.exists)(json, 'app') ? undefined : (0, AppClipRelationshipsApp_1.AppClipRelationshipsAppFromJSON)(json['app']),
        'priceTier': !(0, runtime_1.exists)(json, 'priceTier') ? undefined : (0, AppPricePointV2RelationshipsPriceTier_1.AppPricePointV2RelationshipsPriceTierFromJSON)(json['priceTier']),
        'territory': !(0, runtime_1.exists)(json, 'territory') ? undefined : (0, AppPricePointV2RelationshipsTerritory_1.AppPricePointV2RelationshipsTerritoryFromJSON)(json['territory']),
    };
}
function AppPricePointV2RelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'app': (0, AppClipRelationshipsApp_1.AppClipRelationshipsAppToJSON)(value.app),
        'priceTier': (0, AppPricePointV2RelationshipsPriceTier_1.AppPricePointV2RelationshipsPriceTierToJSON)(value.priceTier),
        'territory': (0, AppPricePointV2RelationshipsTerritory_1.AppPricePointV2RelationshipsTerritoryToJSON)(value.territory),
    };
}
