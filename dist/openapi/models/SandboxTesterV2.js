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
exports.SandboxTesterV2TypeEnum = void 0;
exports.instanceOfSandboxTesterV2 = instanceOfSandboxTesterV2;
exports.SandboxTesterV2FromJSON = SandboxTesterV2FromJSON;
exports.SandboxTesterV2FromJSONTyped = SandboxTesterV2FromJSONTyped;
exports.SandboxTesterV2ToJSON = SandboxTesterV2ToJSON;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
const SandboxTesterV2Attributes_1 = require("./SandboxTesterV2Attributes");
/**
 * @export
 */
exports.SandboxTesterV2TypeEnum = {
    SandboxTesters: "sandboxTesters"
};
/**
 * Check if a given object implements the SandboxTesterV2 interface.
 */
function instanceOfSandboxTesterV2(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function SandboxTesterV2FromJSON(json) {
    return SandboxTesterV2FromJSONTyped(json, false);
}
function SandboxTesterV2FromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, SandboxTesterV2Attributes_1.SandboxTesterV2AttributesFromJSON)(json["attributes"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function SandboxTesterV2ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, SandboxTesterV2Attributes_1.SandboxTesterV2AttributesToJSON)(value.attributes),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
