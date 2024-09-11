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
exports.instanceOfUserInvitationsResponse = instanceOfUserInvitationsResponse;
exports.UserInvitationsResponseFromJSON = UserInvitationsResponseFromJSON;
exports.UserInvitationsResponseFromJSONTyped = UserInvitationsResponseFromJSONTyped;
exports.UserInvitationsResponseToJSON = UserInvitationsResponseToJSON;
const runtime_1 = require("../runtime");
const App_1 = require("./App");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
const UserInvitation_1 = require("./UserInvitation");
/**
 * Check if a given object implements the UserInvitationsResponse interface.
 */
function instanceOfUserInvitationsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function UserInvitationsResponseFromJSON(json) {
    return UserInvitationsResponseFromJSONTyped(json, false);
}
function UserInvitationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(UserInvitation_1.UserInvitationFromJSON),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(App_1.AppFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function UserInvitationsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(UserInvitation_1.UserInvitationToJSON),
        included: value.included === undefined ? undefined : value.included.map(App_1.AppToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
