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
exports.instanceOfBetaTesterUsagesV1MetricResponse = instanceOfBetaTesterUsagesV1MetricResponse;
exports.BetaTesterUsagesV1MetricResponseFromJSON = BetaTesterUsagesV1MetricResponseFromJSON;
exports.BetaTesterUsagesV1MetricResponseFromJSONTyped = BetaTesterUsagesV1MetricResponseFromJSONTyped;
exports.BetaTesterUsagesV1MetricResponseToJSON = BetaTesterUsagesV1MetricResponseToJSON;
const runtime_1 = require("../runtime");
const BetaTesterUsagesV1MetricResponseDataInner_1 = require("./BetaTesterUsagesV1MetricResponseDataInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the BetaTesterUsagesV1MetricResponse interface.
 */
function instanceOfBetaTesterUsagesV1MetricResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function BetaTesterUsagesV1MetricResponseFromJSON(json) {
    return BetaTesterUsagesV1MetricResponseFromJSONTyped(json, false);
}
function BetaTesterUsagesV1MetricResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(BetaTesterUsagesV1MetricResponseDataInner_1.BetaTesterUsagesV1MetricResponseDataInnerFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function BetaTesterUsagesV1MetricResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(BetaTesterUsagesV1MetricResponseDataInner_1.BetaTesterUsagesV1MetricResponseDataInnerToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
