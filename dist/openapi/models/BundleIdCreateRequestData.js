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
exports.BundleIdCreateRequestDataTypeEnum = void 0;
exports.instanceOfBundleIdCreateRequestData = instanceOfBundleIdCreateRequestData;
exports.BundleIdCreateRequestDataFromJSON = BundleIdCreateRequestDataFromJSON;
exports.BundleIdCreateRequestDataFromJSONTyped = BundleIdCreateRequestDataFromJSONTyped;
exports.BundleIdCreateRequestDataToJSON = BundleIdCreateRequestDataToJSON;
const BundleIdCreateRequestDataAttributes_1 = require("./BundleIdCreateRequestDataAttributes");
/**
 * @export
 */
exports.BundleIdCreateRequestDataTypeEnum = {
    BundleIds: "bundleIds"
};
/**
 * Check if a given object implements the BundleIdCreateRequestData interface.
 */
function instanceOfBundleIdCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    return isInstance;
}
function BundleIdCreateRequestDataFromJSON(json) {
    return BundleIdCreateRequestDataFromJSONTyped(json, false);
}
function BundleIdCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, BundleIdCreateRequestDataAttributes_1.BundleIdCreateRequestDataAttributesFromJSON)(json["attributes"])
    };
}
function BundleIdCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, BundleIdCreateRequestDataAttributes_1.BundleIdCreateRequestDataAttributesToJSON)(value.attributes)
    };
}
