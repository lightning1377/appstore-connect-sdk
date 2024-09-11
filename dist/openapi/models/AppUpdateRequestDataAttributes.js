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
exports.AppUpdateRequestDataAttributesContentRightsDeclarationEnum = void 0;
exports.instanceOfAppUpdateRequestDataAttributes = instanceOfAppUpdateRequestDataAttributes;
exports.AppUpdateRequestDataAttributesFromJSON = AppUpdateRequestDataAttributesFromJSON;
exports.AppUpdateRequestDataAttributesFromJSONTyped = AppUpdateRequestDataAttributesFromJSONTyped;
exports.AppUpdateRequestDataAttributesToJSON = AppUpdateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
const SubscriptionStatusUrlVersion_1 = require("./SubscriptionStatusUrlVersion");
/**
 * @export
 */
exports.AppUpdateRequestDataAttributesContentRightsDeclarationEnum = {
    DoesNotUseThirdPartyContent: "DOES_NOT_USE_THIRD_PARTY_CONTENT",
    UsesThirdPartyContent: "USES_THIRD_PARTY_CONTENT"
};
/**
 * Check if a given object implements the AppUpdateRequestDataAttributes interface.
 */
function instanceOfAppUpdateRequestDataAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppUpdateRequestDataAttributesFromJSON(json) {
    return AppUpdateRequestDataAttributesFromJSONTyped(json, false);
}
function AppUpdateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        bundleId: !(0, runtime_1.exists)(json, "bundleId") ? undefined : json["bundleId"],
        primaryLocale: !(0, runtime_1.exists)(json, "primaryLocale") ? undefined : json["primaryLocale"],
        subscriptionStatusUrl: !(0, runtime_1.exists)(json, "subscriptionStatusUrl") ? undefined : json["subscriptionStatusUrl"],
        subscriptionStatusUrlVersion: !(0, runtime_1.exists)(json, "subscriptionStatusUrlVersion") ? undefined : (0, SubscriptionStatusUrlVersion_1.SubscriptionStatusUrlVersionFromJSON)(json["subscriptionStatusUrlVersion"]),
        subscriptionStatusUrlForSandbox: !(0, runtime_1.exists)(json, "subscriptionStatusUrlForSandbox") ? undefined : json["subscriptionStatusUrlForSandbox"],
        subscriptionStatusUrlVersionForSandbox: !(0, runtime_1.exists)(json, "subscriptionStatusUrlVersionForSandbox") ? undefined : (0, SubscriptionStatusUrlVersion_1.SubscriptionStatusUrlVersionFromJSON)(json["subscriptionStatusUrlVersionForSandbox"]),
        contentRightsDeclaration: !(0, runtime_1.exists)(json, "contentRightsDeclaration") ? undefined : json["contentRightsDeclaration"]
    };
}
function AppUpdateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        bundleId: value.bundleId,
        primaryLocale: value.primaryLocale,
        subscriptionStatusUrl: value.subscriptionStatusUrl,
        subscriptionStatusUrlVersion: (0, SubscriptionStatusUrlVersion_1.SubscriptionStatusUrlVersionToJSON)(value.subscriptionStatusUrlVersion),
        subscriptionStatusUrlForSandbox: value.subscriptionStatusUrlForSandbox,
        subscriptionStatusUrlVersionForSandbox: (0, SubscriptionStatusUrlVersion_1.SubscriptionStatusUrlVersionToJSON)(value.subscriptionStatusUrlVersionForSandbox),
        contentRightsDeclaration: value.contentRightsDeclaration
    };
}
