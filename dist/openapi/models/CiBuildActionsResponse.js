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
exports.instanceOfCiBuildActionsResponse = instanceOfCiBuildActionsResponse;
exports.CiBuildActionsResponseFromJSON = CiBuildActionsResponseFromJSON;
exports.CiBuildActionsResponseFromJSONTyped = CiBuildActionsResponseFromJSONTyped;
exports.CiBuildActionsResponseToJSON = CiBuildActionsResponseToJSON;
const runtime_1 = require("../runtime");
const CiBuildAction_1 = require("./CiBuildAction");
const CiBuildRun_1 = require("./CiBuildRun");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the CiBuildActionsResponse interface.
 */
function instanceOfCiBuildActionsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function CiBuildActionsResponseFromJSON(json) {
    return CiBuildActionsResponseFromJSONTyped(json, false);
}
function CiBuildActionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(CiBuildAction_1.CiBuildActionFromJSON),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(CiBuildRun_1.CiBuildRunFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function CiBuildActionsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(CiBuildAction_1.CiBuildActionToJSON),
        included: value.included === undefined ? undefined : value.included.map(CiBuildRun_1.CiBuildRunToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
