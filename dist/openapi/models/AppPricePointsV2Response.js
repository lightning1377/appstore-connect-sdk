"use strict";
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfAppPricePointsV2Response = instanceOfAppPricePointsV2Response;
exports.AppPricePointsV2ResponseFromJSON = AppPricePointsV2ResponseFromJSON;
exports.AppPricePointsV2ResponseFromJSONTyped = AppPricePointsV2ResponseFromJSONTyped;
exports.AppPricePointsV2ResponseToJSON = AppPricePointsV2ResponseToJSON;
const runtime_1 = require("../runtime");
const AppPricePointV2_1 = require("./AppPricePointV2");
const AppPricePointsV2ResponseIncludedInner_1 = require("./AppPricePointsV2ResponseIncludedInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppPricePointsV2Response interface.
 */
function instanceOfAppPricePointsV2Response(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppPricePointsV2ResponseFromJSON(json) {
    return AppPricePointsV2ResponseFromJSONTyped(json, false);
}
function AppPricePointsV2ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AppPricePointV2_1.AppPricePointV2FromJSON)),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(AppPricePointsV2ResponseIncludedInner_1.AppPricePointsV2ResponseIncludedInnerFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
function AppPricePointsV2ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AppPricePointV2_1.AppPricePointV2ToJSON)),
        'included': value.included === undefined ? undefined : (value.included.map(AppPricePointsV2ResponseIncludedInner_1.AppPricePointsV2ResponseIncludedInnerToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
