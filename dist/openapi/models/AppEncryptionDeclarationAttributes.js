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
exports.instanceOfAppEncryptionDeclarationAttributes = instanceOfAppEncryptionDeclarationAttributes;
exports.AppEncryptionDeclarationAttributesFromJSON = AppEncryptionDeclarationAttributesFromJSON;
exports.AppEncryptionDeclarationAttributesFromJSONTyped = AppEncryptionDeclarationAttributesFromJSONTyped;
exports.AppEncryptionDeclarationAttributesToJSON = AppEncryptionDeclarationAttributesToJSON;
const runtime_1 = require("../runtime");
const AppEncryptionDeclarationState_1 = require("./AppEncryptionDeclarationState");
const Platform_1 = require("./Platform");
/**
 * Check if a given object implements the AppEncryptionDeclarationAttributes interface.
 */
function instanceOfAppEncryptionDeclarationAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppEncryptionDeclarationAttributesFromJSON(json) {
    return AppEncryptionDeclarationAttributesFromJSONTyped(json, false);
}
function AppEncryptionDeclarationAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appDescription: !(0, runtime_1.exists)(json, "appDescription") ? undefined : json["appDescription"],
        createdDate: !(0, runtime_1.exists)(json, "createdDate") ? undefined : new Date(json["createdDate"]),
        usesEncryption: !(0, runtime_1.exists)(json, "usesEncryption") ? undefined : json["usesEncryption"],
        exempt: !(0, runtime_1.exists)(json, "exempt") ? undefined : json["exempt"],
        containsProprietaryCryptography: !(0, runtime_1.exists)(json, "containsProprietaryCryptography") ? undefined : json["containsProprietaryCryptography"],
        containsThirdPartyCryptography: !(0, runtime_1.exists)(json, "containsThirdPartyCryptography") ? undefined : json["containsThirdPartyCryptography"],
        availableOnFrenchStore: !(0, runtime_1.exists)(json, "availableOnFrenchStore") ? undefined : json["availableOnFrenchStore"],
        platform: !(0, runtime_1.exists)(json, "platform") ? undefined : (0, Platform_1.PlatformFromJSON)(json["platform"]),
        uploadedDate: !(0, runtime_1.exists)(json, "uploadedDate") ? undefined : new Date(json["uploadedDate"]),
        documentUrl: !(0, runtime_1.exists)(json, "documentUrl") ? undefined : json["documentUrl"],
        documentName: !(0, runtime_1.exists)(json, "documentName") ? undefined : json["documentName"],
        documentType: !(0, runtime_1.exists)(json, "documentType") ? undefined : json["documentType"],
        appEncryptionDeclarationState: !(0, runtime_1.exists)(json, "appEncryptionDeclarationState") ? undefined : (0, AppEncryptionDeclarationState_1.AppEncryptionDeclarationStateFromJSON)(json["appEncryptionDeclarationState"]),
        codeValue: !(0, runtime_1.exists)(json, "codeValue") ? undefined : json["codeValue"]
    };
}
function AppEncryptionDeclarationAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appDescription: value.appDescription,
        createdDate: value.createdDate === undefined ? undefined : value.createdDate.toISOString(),
        usesEncryption: value.usesEncryption,
        exempt: value.exempt,
        containsProprietaryCryptography: value.containsProprietaryCryptography,
        containsThirdPartyCryptography: value.containsThirdPartyCryptography,
        availableOnFrenchStore: value.availableOnFrenchStore,
        platform: (0, Platform_1.PlatformToJSON)(value.platform),
        uploadedDate: value.uploadedDate === undefined ? undefined : value.uploadedDate.toISOString(),
        documentUrl: value.documentUrl,
        documentName: value.documentName,
        documentType: value.documentType,
        appEncryptionDeclarationState: (0, AppEncryptionDeclarationState_1.AppEncryptionDeclarationStateToJSON)(value.appEncryptionDeclarationState),
        codeValue: value.codeValue
    };
}
