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
exports.AppPriceTierRelationshipsPricePointsDataInnerTypeEnum = void 0;
exports.instanceOfAppPriceTierRelationshipsPricePointsDataInner = instanceOfAppPriceTierRelationshipsPricePointsDataInner;
exports.AppPriceTierRelationshipsPricePointsDataInnerFromJSON = AppPriceTierRelationshipsPricePointsDataInnerFromJSON;
exports.AppPriceTierRelationshipsPricePointsDataInnerFromJSONTyped = AppPriceTierRelationshipsPricePointsDataInnerFromJSONTyped;
exports.AppPriceTierRelationshipsPricePointsDataInnerToJSON = AppPriceTierRelationshipsPricePointsDataInnerToJSON;
/**
 * @export
 */
exports.AppPriceTierRelationshipsPricePointsDataInnerTypeEnum = {
    AppPricePoints: 'appPricePoints'
};
/**
 * Check if a given object implements the AppPriceTierRelationshipsPricePointsDataInner interface.
 */
function instanceOfAppPriceTierRelationshipsPricePointsDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppPriceTierRelationshipsPricePointsDataInnerFromJSON(json) {
    return AppPriceTierRelationshipsPricePointsDataInnerFromJSONTyped(json, false);
}
function AppPriceTierRelationshipsPricePointsDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
function AppPriceTierRelationshipsPricePointsDataInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
    };
}
