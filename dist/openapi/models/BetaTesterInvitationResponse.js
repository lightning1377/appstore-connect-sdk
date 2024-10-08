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
exports.instanceOfBetaTesterInvitationResponse = instanceOfBetaTesterInvitationResponse;
exports.BetaTesterInvitationResponseFromJSON = BetaTesterInvitationResponseFromJSON;
exports.BetaTesterInvitationResponseFromJSONTyped = BetaTesterInvitationResponseFromJSONTyped;
exports.BetaTesterInvitationResponseToJSON = BetaTesterInvitationResponseToJSON;
const BetaTesterInvitation_1 = require("./BetaTesterInvitation");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the BetaTesterInvitationResponse interface.
 */
function instanceOfBetaTesterInvitationResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function BetaTesterInvitationResponseFromJSON(json) {
    return BetaTesterInvitationResponseFromJSONTyped(json, false);
}
function BetaTesterInvitationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BetaTesterInvitation_1.BetaTesterInvitationFromJSON)(json["data"]),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function BetaTesterInvitationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BetaTesterInvitation_1.BetaTesterInvitationToJSON)(value.data),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
