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
exports.instanceOfAppClipDefaultExperiencesResponse = instanceOfAppClipDefaultExperiencesResponse;
exports.AppClipDefaultExperiencesResponseFromJSON = AppClipDefaultExperiencesResponseFromJSON;
exports.AppClipDefaultExperiencesResponseFromJSONTyped = AppClipDefaultExperiencesResponseFromJSONTyped;
exports.AppClipDefaultExperiencesResponseToJSON = AppClipDefaultExperiencesResponseToJSON;
const runtime_1 = require("../runtime");
const AppClipDefaultExperience_1 = require("./AppClipDefaultExperience");
const AppClipDefaultExperiencesResponseIncludedInner_1 = require("./AppClipDefaultExperiencesResponseIncludedInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppClipDefaultExperiencesResponse interface.
 */
function instanceOfAppClipDefaultExperiencesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppClipDefaultExperiencesResponseFromJSON(json) {
    return AppClipDefaultExperiencesResponseFromJSONTyped(json, false);
}
function AppClipDefaultExperiencesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(AppClipDefaultExperience_1.AppClipDefaultExperienceFromJSON),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppClipDefaultExperiencesResponseIncludedInner_1.AppClipDefaultExperiencesResponseIncludedInnerFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function AppClipDefaultExperiencesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(AppClipDefaultExperience_1.AppClipDefaultExperienceToJSON),
        included: value.included === undefined ? undefined : value.included.map(AppClipDefaultExperiencesResponseIncludedInner_1.AppClipDefaultExperiencesResponseIncludedInnerToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
