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
exports.instanceOfBetaTesterInvitationCreateRequestDataRelationships = instanceOfBetaTesterInvitationCreateRequestDataRelationships;
exports.BetaTesterInvitationCreateRequestDataRelationshipsFromJSON = BetaTesterInvitationCreateRequestDataRelationshipsFromJSON;
exports.BetaTesterInvitationCreateRequestDataRelationshipsFromJSONTyped = BetaTesterInvitationCreateRequestDataRelationshipsFromJSONTyped;
exports.BetaTesterInvitationCreateRequestDataRelationshipsToJSON = BetaTesterInvitationCreateRequestDataRelationshipsToJSON;
const AnalyticsReportRequestCreateRequestDataRelationshipsApp_1 = require("./AnalyticsReportRequestCreateRequestDataRelationshipsApp");
const BetaTesterInvitationCreateRequestDataRelationshipsBetaTester_1 = require("./BetaTesterInvitationCreateRequestDataRelationshipsBetaTester");
/**
 * Check if a given object implements the BetaTesterInvitationCreateRequestDataRelationships interface.
 */
function instanceOfBetaTesterInvitationCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "betaTester" in value;
    isInstance = isInstance && "app" in value;
    return isInstance;
}
function BetaTesterInvitationCreateRequestDataRelationshipsFromJSON(json) {
    return BetaTesterInvitationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function BetaTesterInvitationCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        betaTester: (0, BetaTesterInvitationCreateRequestDataRelationshipsBetaTester_1.BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSON)(json["betaTester"]),
        app: (0, AnalyticsReportRequestCreateRequestDataRelationshipsApp_1.AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON)(json["app"])
    };
}
function BetaTesterInvitationCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        betaTester: (0, BetaTesterInvitationCreateRequestDataRelationshipsBetaTester_1.BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterToJSON)(value.betaTester),
        app: (0, AnalyticsReportRequestCreateRequestDataRelationshipsApp_1.AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON)(value.app)
    };
}
