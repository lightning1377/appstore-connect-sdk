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
exports.instanceOfAppAvailabilityRelationshipsApp = instanceOfAppAvailabilityRelationshipsApp;
exports.AppAvailabilityRelationshipsAppFromJSON = AppAvailabilityRelationshipsAppFromJSON;
exports.AppAvailabilityRelationshipsAppFromJSONTyped = AppAvailabilityRelationshipsAppFromJSONTyped;
exports.AppAvailabilityRelationshipsAppToJSON = AppAvailabilityRelationshipsAppToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionKeyCreateRequestDataRelationshipsAppData_1 = require("./AlternativeDistributionKeyCreateRequestDataRelationshipsAppData");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
/**
 * Check if a given object implements the AppAvailabilityRelationshipsApp interface.
 */
function instanceOfAppAvailabilityRelationshipsApp(value) {
    let isInstance = true;
    return isInstance;
}
function AppAvailabilityRelationshipsAppFromJSON(json) {
    return AppAvailabilityRelationshipsAppFromJSONTyped(json, false);
}
function AppAvailabilityRelationshipsAppFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, AlternativeDistributionKeyCreateRequestDataRelationshipsAppData_1.AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON)(json["data"])
    };
}
function AppAvailabilityRelationshipsAppToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        data: (0, AlternativeDistributionKeyCreateRequestDataRelationshipsAppData_1.AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON)(value.data)
    };
}
