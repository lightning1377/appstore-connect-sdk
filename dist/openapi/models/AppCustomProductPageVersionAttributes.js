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
exports.AppCustomProductPageVersionAttributesStateEnum = void 0;
exports.instanceOfAppCustomProductPageVersionAttributes = instanceOfAppCustomProductPageVersionAttributes;
exports.AppCustomProductPageVersionAttributesFromJSON = AppCustomProductPageVersionAttributesFromJSON;
exports.AppCustomProductPageVersionAttributesFromJSONTyped = AppCustomProductPageVersionAttributesFromJSONTyped;
exports.AppCustomProductPageVersionAttributesToJSON = AppCustomProductPageVersionAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.AppCustomProductPageVersionAttributesStateEnum = {
    PrepareForSubmission: "PREPARE_FOR_SUBMISSION",
    ReadyForReview: "READY_FOR_REVIEW",
    WaitingForReview: "WAITING_FOR_REVIEW",
    InReview: "IN_REVIEW",
    Accepted: "ACCEPTED",
    Approved: "APPROVED",
    ReplacedWithNewVersion: "REPLACED_WITH_NEW_VERSION",
    Rejected: "REJECTED"
};
/**
 * Check if a given object implements the AppCustomProductPageVersionAttributes interface.
 */
function instanceOfAppCustomProductPageVersionAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppCustomProductPageVersionAttributesFromJSON(json) {
    return AppCustomProductPageVersionAttributesFromJSONTyped(json, false);
}
function AppCustomProductPageVersionAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        version: !(0, runtime_1.exists)(json, "version") ? undefined : json["version"],
        state: !(0, runtime_1.exists)(json, "state") ? undefined : json["state"],
        deepLink: !(0, runtime_1.exists)(json, "deepLink") ? undefined : json["deepLink"]
    };
}
function AppCustomProductPageVersionAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        version: value.version,
        state: value.state,
        deepLink: value.deepLink
    };
}
