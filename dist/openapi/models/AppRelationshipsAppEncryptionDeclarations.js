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
exports.instanceOfAppRelationshipsAppEncryptionDeclarations = instanceOfAppRelationshipsAppEncryptionDeclarations;
exports.AppRelationshipsAppEncryptionDeclarationsFromJSON = AppRelationshipsAppEncryptionDeclarationsFromJSON;
exports.AppRelationshipsAppEncryptionDeclarationsFromJSONTyped = AppRelationshipsAppEncryptionDeclarationsFromJSONTyped;
exports.AppRelationshipsAppEncryptionDeclarationsToJSON = AppRelationshipsAppEncryptionDeclarationsToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData_1 = require("./AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppRelationshipsAppEncryptionDeclarations interface.
 */
function instanceOfAppRelationshipsAppEncryptionDeclarations(value) {
    let isInstance = true;
    return isInstance;
}
function AppRelationshipsAppEncryptionDeclarationsFromJSON(json) {
    return AppRelationshipsAppEncryptionDeclarationsFromJSONTyped(json, false);
}
function AppRelationshipsAppEncryptionDeclarationsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : json["data"].map(AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData_1.AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSON)
    };
}
function AppRelationshipsAppEncryptionDeclarationsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
        data: value.data === undefined ? undefined : value.data.map(AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData_1.AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataToJSON)
    };
}
