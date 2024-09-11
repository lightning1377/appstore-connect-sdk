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
exports.instanceOfBetaTesterInvitationCreateRequest = instanceOfBetaTesterInvitationCreateRequest;
exports.BetaTesterInvitationCreateRequestFromJSON = BetaTesterInvitationCreateRequestFromJSON;
exports.BetaTesterInvitationCreateRequestFromJSONTyped = BetaTesterInvitationCreateRequestFromJSONTyped;
exports.BetaTesterInvitationCreateRequestToJSON = BetaTesterInvitationCreateRequestToJSON;
const BetaTesterInvitationCreateRequestData_1 = require("./BetaTesterInvitationCreateRequestData");
/**
 * Check if a given object implements the BetaTesterInvitationCreateRequest interface.
 */
function instanceOfBetaTesterInvitationCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function BetaTesterInvitationCreateRequestFromJSON(json) {
    return BetaTesterInvitationCreateRequestFromJSONTyped(json, false);
}
function BetaTesterInvitationCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BetaTesterInvitationCreateRequestData_1.BetaTesterInvitationCreateRequestDataFromJSON)(json["data"])
    };
}
function BetaTesterInvitationCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BetaTesterInvitationCreateRequestData_1.BetaTesterInvitationCreateRequestDataToJSON)(value.data)
    };
}
