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
exports.instanceOfBundleIdCapabilityCreateRequestDataAttributes = instanceOfBundleIdCapabilityCreateRequestDataAttributes;
exports.BundleIdCapabilityCreateRequestDataAttributesFromJSON = BundleIdCapabilityCreateRequestDataAttributesFromJSON;
exports.BundleIdCapabilityCreateRequestDataAttributesFromJSONTyped = BundleIdCapabilityCreateRequestDataAttributesFromJSONTyped;
exports.BundleIdCapabilityCreateRequestDataAttributesToJSON = BundleIdCapabilityCreateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
const CapabilitySetting_1 = require("./CapabilitySetting");
const CapabilityType_1 = require("./CapabilityType");
/**
 * Check if a given object implements the BundleIdCapabilityCreateRequestDataAttributes interface.
 */
function instanceOfBundleIdCapabilityCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "capabilityType" in value;
    return isInstance;
}
function BundleIdCapabilityCreateRequestDataAttributesFromJSON(json) {
    return BundleIdCapabilityCreateRequestDataAttributesFromJSONTyped(json, false);
}
function BundleIdCapabilityCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        capabilityType: (0, CapabilityType_1.CapabilityTypeFromJSON)(json["capabilityType"]),
        settings: !(0, runtime_1.exists)(json, "settings") ? undefined : json["settings"].map(CapabilitySetting_1.CapabilitySettingFromJSON)
    };
}
function BundleIdCapabilityCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        capabilityType: (0, CapabilityType_1.CapabilityTypeToJSON)(value.capabilityType),
        settings: value.settings === undefined ? undefined : value.settings.map(CapabilitySetting_1.CapabilitySettingToJSON)
    };
}
