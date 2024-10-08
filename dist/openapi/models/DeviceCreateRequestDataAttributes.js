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
exports.instanceOfDeviceCreateRequestDataAttributes = instanceOfDeviceCreateRequestDataAttributes;
exports.DeviceCreateRequestDataAttributesFromJSON = DeviceCreateRequestDataAttributesFromJSON;
exports.DeviceCreateRequestDataAttributesFromJSONTyped = DeviceCreateRequestDataAttributesFromJSONTyped;
exports.DeviceCreateRequestDataAttributesToJSON = DeviceCreateRequestDataAttributesToJSON;
const BundleIdPlatform_1 = require("./BundleIdPlatform");
/**
 * Check if a given object implements the DeviceCreateRequestDataAttributes interface.
 */
function instanceOfDeviceCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "platform" in value;
    isInstance = isInstance && "udid" in value;
    return isInstance;
}
function DeviceCreateRequestDataAttributesFromJSON(json) {
    return DeviceCreateRequestDataAttributesFromJSONTyped(json, false);
}
function DeviceCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: json["name"],
        platform: (0, BundleIdPlatform_1.BundleIdPlatformFromJSON)(json["platform"]),
        udid: json["udid"]
    };
}
function DeviceCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        platform: (0, BundleIdPlatform_1.BundleIdPlatformToJSON)(value.platform),
        udid: value.udid
    };
}
