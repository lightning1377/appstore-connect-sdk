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
exports.instanceOfPrereleaseVersionAttributes = instanceOfPrereleaseVersionAttributes;
exports.PrereleaseVersionAttributesFromJSON = PrereleaseVersionAttributesFromJSON;
exports.PrereleaseVersionAttributesFromJSONTyped = PrereleaseVersionAttributesFromJSONTyped;
exports.PrereleaseVersionAttributesToJSON = PrereleaseVersionAttributesToJSON;
const runtime_1 = require("../runtime");
const Platform_1 = require("./Platform");
/**
 * Check if a given object implements the PrereleaseVersionAttributes interface.
 */
function instanceOfPrereleaseVersionAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function PrereleaseVersionAttributesFromJSON(json) {
    return PrereleaseVersionAttributesFromJSONTyped(json, false);
}
function PrereleaseVersionAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        version: !(0, runtime_1.exists)(json, "version") ? undefined : json["version"],
        platform: !(0, runtime_1.exists)(json, "platform") ? undefined : (0, Platform_1.PlatformFromJSON)(json["platform"])
    };
}
function PrereleaseVersionAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        version: value.version,
        platform: (0, Platform_1.PlatformToJSON)(value.platform)
    };
}
