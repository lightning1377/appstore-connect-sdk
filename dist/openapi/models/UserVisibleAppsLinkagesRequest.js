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
exports.instanceOfUserVisibleAppsLinkagesRequest = instanceOfUserVisibleAppsLinkagesRequest;
exports.UserVisibleAppsLinkagesRequestFromJSON = UserVisibleAppsLinkagesRequestFromJSON;
exports.UserVisibleAppsLinkagesRequestFromJSONTyped = UserVisibleAppsLinkagesRequestFromJSONTyped;
exports.UserVisibleAppsLinkagesRequestToJSON = UserVisibleAppsLinkagesRequestToJSON;
const AlternativeDistributionKeyCreateRequestDataRelationshipsAppData_1 = require("./AlternativeDistributionKeyCreateRequestDataRelationshipsAppData");
/**
 * Check if a given object implements the UserVisibleAppsLinkagesRequest interface.
 */
function instanceOfUserVisibleAppsLinkagesRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function UserVisibleAppsLinkagesRequestFromJSON(json) {
    return UserVisibleAppsLinkagesRequestFromJSONTyped(json, false);
}
function UserVisibleAppsLinkagesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppData_1.AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON)
    };
}
function UserVisibleAppsLinkagesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppData_1.AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON)
    };
}
