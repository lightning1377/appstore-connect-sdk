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
exports.CertificateTypeEnum = void 0;
exports.instanceOfCertificate = instanceOfCertificate;
exports.CertificateFromJSON = CertificateFromJSON;
exports.CertificateFromJSONTyped = CertificateFromJSONTyped;
exports.CertificateToJSON = CertificateToJSON;
const runtime_1 = require("../runtime");
const CertificateAttributes_1 = require("./CertificateAttributes");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.CertificateTypeEnum = {
    Certificates: "certificates"
};
/**
 * Check if a given object implements the Certificate interface.
 */
function instanceOfCertificate(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function CertificateFromJSON(json) {
    return CertificateFromJSONTyped(json, false);
}
function CertificateFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, CertificateAttributes_1.CertificateAttributesFromJSON)(json["attributes"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function CertificateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, CertificateAttributes_1.CertificateAttributesToJSON)(value.attributes),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
