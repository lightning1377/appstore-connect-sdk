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
exports.instanceOfBetaTesterResponse = instanceOfBetaTesterResponse;
exports.BetaTesterResponseFromJSON = BetaTesterResponseFromJSON;
exports.BetaTesterResponseFromJSONTyped = BetaTesterResponseFromJSONTyped;
exports.BetaTesterResponseToJSON = BetaTesterResponseToJSON;
const runtime_1 = require("../runtime");
const BetaTester_1 = require("./BetaTester");
const BetaTestersResponseIncludedInner_1 = require("./BetaTestersResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the BetaTesterResponse interface.
 */
function instanceOfBetaTesterResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function BetaTesterResponseFromJSON(json) {
    return BetaTesterResponseFromJSONTyped(json, false);
}
function BetaTesterResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BetaTester_1.BetaTesterFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(BetaTestersResponseIncludedInner_1.BetaTestersResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function BetaTesterResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BetaTester_1.BetaTesterToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(BetaTestersResponseIncludedInner_1.BetaTestersResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
