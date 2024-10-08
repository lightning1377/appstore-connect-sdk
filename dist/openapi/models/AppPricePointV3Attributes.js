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
exports.instanceOfAppPricePointV3Attributes = instanceOfAppPricePointV3Attributes;
exports.AppPricePointV3AttributesFromJSON = AppPricePointV3AttributesFromJSON;
exports.AppPricePointV3AttributesFromJSONTyped = AppPricePointV3AttributesFromJSONTyped;
exports.AppPricePointV3AttributesToJSON = AppPricePointV3AttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AppPricePointV3Attributes interface.
 */
function instanceOfAppPricePointV3Attributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppPricePointV3AttributesFromJSON(json) {
    return AppPricePointV3AttributesFromJSONTyped(json, false);
}
function AppPricePointV3AttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        customerPrice: !(0, runtime_1.exists)(json, "customerPrice") ? undefined : json["customerPrice"],
        proceeds: !(0, runtime_1.exists)(json, "proceeds") ? undefined : json["proceeds"]
    };
}
function AppPricePointV3AttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        customerPrice: value.customerPrice,
        proceeds: value.proceeds
    };
}
