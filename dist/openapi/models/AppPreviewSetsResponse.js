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
exports.instanceOfAppPreviewSetsResponse = instanceOfAppPreviewSetsResponse;
exports.AppPreviewSetsResponseFromJSON = AppPreviewSetsResponseFromJSON;
exports.AppPreviewSetsResponseFromJSONTyped = AppPreviewSetsResponseFromJSONTyped;
exports.AppPreviewSetsResponseToJSON = AppPreviewSetsResponseToJSON;
const runtime_1 = require("../runtime");
const AppPreviewSet_1 = require("./AppPreviewSet");
const AppPreviewSetsResponseIncludedInner_1 = require("./AppPreviewSetsResponseIncludedInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppPreviewSetsResponse interface.
 */
function instanceOfAppPreviewSetsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppPreviewSetsResponseFromJSON(json) {
    return AppPreviewSetsResponseFromJSONTyped(json, false);
}
function AppPreviewSetsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(AppPreviewSet_1.AppPreviewSetFromJSON),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppPreviewSetsResponseIncludedInner_1.AppPreviewSetsResponseIncludedInnerFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function AppPreviewSetsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(AppPreviewSet_1.AppPreviewSetToJSON),
        included: value.included === undefined ? undefined : value.included.map(AppPreviewSetsResponseIncludedInner_1.AppPreviewSetsResponseIncludedInnerToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
