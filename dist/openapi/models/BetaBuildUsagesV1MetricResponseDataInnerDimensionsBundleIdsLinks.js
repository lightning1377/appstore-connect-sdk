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
exports.instanceOfBetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinks = instanceOfBetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinks;
exports.BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksFromJSON = BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksFromJSON;
exports.BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksFromJSONTyped = BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksFromJSONTyped;
exports.BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksToJSON = BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinks interface.
 */
function instanceOfBetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinks(value) {
    let isInstance = true;
    return isInstance;
}
function BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksFromJSON(json) {
    return BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksFromJSONTyped(json, false);
}
function BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        groupBy: !(0, runtime_1.exists)(json, "groupBy") ? undefined : json["groupBy"]
    };
}
function BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        groupBy: value.groupBy
    };
}
