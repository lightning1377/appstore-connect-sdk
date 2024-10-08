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
exports.instanceOfAppEncryptionDeclarationResponse = instanceOfAppEncryptionDeclarationResponse;
exports.AppEncryptionDeclarationResponseFromJSON = AppEncryptionDeclarationResponseFromJSON;
exports.AppEncryptionDeclarationResponseFromJSONTyped = AppEncryptionDeclarationResponseFromJSONTyped;
exports.AppEncryptionDeclarationResponseToJSON = AppEncryptionDeclarationResponseToJSON;
const runtime_1 = require("../runtime");
const AppEncryptionDeclaration_1 = require("./AppEncryptionDeclaration");
const AppEncryptionDeclarationsResponseIncludedInner_1 = require("./AppEncryptionDeclarationsResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppEncryptionDeclarationResponse interface.
 */
function instanceOfAppEncryptionDeclarationResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppEncryptionDeclarationResponseFromJSON(json) {
    return AppEncryptionDeclarationResponseFromJSONTyped(json, false);
}
function AppEncryptionDeclarationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppEncryptionDeclaration_1.AppEncryptionDeclarationFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppEncryptionDeclarationsResponseIncludedInner_1.AppEncryptionDeclarationsResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AppEncryptionDeclarationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppEncryptionDeclaration_1.AppEncryptionDeclarationToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(AppEncryptionDeclarationsResponseIncludedInner_1.AppEncryptionDeclarationsResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
