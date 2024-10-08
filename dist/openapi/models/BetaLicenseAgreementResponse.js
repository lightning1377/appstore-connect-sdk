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
exports.instanceOfBetaLicenseAgreementResponse = instanceOfBetaLicenseAgreementResponse;
exports.BetaLicenseAgreementResponseFromJSON = BetaLicenseAgreementResponseFromJSON;
exports.BetaLicenseAgreementResponseFromJSONTyped = BetaLicenseAgreementResponseFromJSONTyped;
exports.BetaLicenseAgreementResponseToJSON = BetaLicenseAgreementResponseToJSON;
const runtime_1 = require("../runtime");
const App_1 = require("./App");
const BetaLicenseAgreement_1 = require("./BetaLicenseAgreement");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the BetaLicenseAgreementResponse interface.
 */
function instanceOfBetaLicenseAgreementResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function BetaLicenseAgreementResponseFromJSON(json) {
    return BetaLicenseAgreementResponseFromJSONTyped(json, false);
}
function BetaLicenseAgreementResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BetaLicenseAgreement_1.BetaLicenseAgreementFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(App_1.AppFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function BetaLicenseAgreementResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BetaLicenseAgreement_1.BetaLicenseAgreementToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(App_1.AppToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
