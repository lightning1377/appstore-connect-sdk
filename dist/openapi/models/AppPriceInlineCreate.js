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
exports.AppPriceInlineCreateTypeEnum = void 0;
exports.instanceOfAppPriceInlineCreate = instanceOfAppPriceInlineCreate;
exports.AppPriceInlineCreateFromJSON = AppPriceInlineCreateFromJSON;
exports.AppPriceInlineCreateFromJSONTyped = AppPriceInlineCreateFromJSONTyped;
exports.AppPriceInlineCreateToJSON = AppPriceInlineCreateToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.AppPriceInlineCreateTypeEnum = {
    AppPrices: 'appPrices'
};
/**
 * Check if a given object implements the AppPriceInlineCreate interface.
 */
function instanceOfAppPriceInlineCreate(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
function AppPriceInlineCreateFromJSON(json) {
    return AppPriceInlineCreateFromJSONTyped(json, false);
}
function AppPriceInlineCreateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
    };
}
function AppPriceInlineCreateToJSON(value) {
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
