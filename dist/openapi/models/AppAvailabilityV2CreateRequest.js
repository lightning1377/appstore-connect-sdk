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
exports.instanceOfAppAvailabilityV2CreateRequest = instanceOfAppAvailabilityV2CreateRequest;
exports.AppAvailabilityV2CreateRequestFromJSON = AppAvailabilityV2CreateRequestFromJSON;
exports.AppAvailabilityV2CreateRequestFromJSONTyped = AppAvailabilityV2CreateRequestFromJSONTyped;
exports.AppAvailabilityV2CreateRequestToJSON = AppAvailabilityV2CreateRequestToJSON;
const runtime_1 = require("../runtime");
const AppAvailabilityV2CreateRequestData_1 = require("./AppAvailabilityV2CreateRequestData");
const TerritoryAvailabilityInlineCreate_1 = require("./TerritoryAvailabilityInlineCreate");
/**
 * Check if a given object implements the AppAvailabilityV2CreateRequest interface.
 */
function instanceOfAppAvailabilityV2CreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppAvailabilityV2CreateRequestFromJSON(json) {
    return AppAvailabilityV2CreateRequestFromJSONTyped(json, false);
}
function AppAvailabilityV2CreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppAvailabilityV2CreateRequestData_1.AppAvailabilityV2CreateRequestDataFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(TerritoryAvailabilityInlineCreate_1.TerritoryAvailabilityInlineCreateFromJSON)
    };
}
function AppAvailabilityV2CreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppAvailabilityV2CreateRequestData_1.AppAvailabilityV2CreateRequestDataToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(TerritoryAvailabilityInlineCreate_1.TerritoryAvailabilityInlineCreateToJSON)
    };
}
