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
exports.instanceOfBetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds = instanceOfBetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds;
exports.BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsFromJSON = BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsFromJSON;
exports.BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsFromJSONTyped = BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsFromJSONTyped;
exports.BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsToJSON = BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsToJSON;
const runtime_1 = require("../runtime");
const BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinks_1 = require("./BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinks");
/**
 * Check if a given object implements the BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds interface.
 */
function instanceOfBetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds(value) {
    let isInstance = true;
    return isInstance;
}
function BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsFromJSON(json) {
    return BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsFromJSONTyped(json, false);
}
function BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinks_1.BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksFromJSON)(json["links"])
    };
}
function BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinks_1.BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsLinksToJSON)(value.links)
    };
}
