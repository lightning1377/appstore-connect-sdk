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
exports.instanceOfAppPriceV2RelationshipsAppPricePoint = instanceOfAppPriceV2RelationshipsAppPricePoint;
exports.AppPriceV2RelationshipsAppPricePointFromJSON = AppPriceV2RelationshipsAppPricePointFromJSON;
exports.AppPriceV2RelationshipsAppPricePointFromJSONTyped = AppPriceV2RelationshipsAppPricePointFromJSONTyped;
exports.AppPriceV2RelationshipsAppPricePointToJSON = AppPriceV2RelationshipsAppPricePointToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const AppPriceV2RelationshipsAppPricePointData_1 = require("./AppPriceV2RelationshipsAppPricePointData");
/**
 * Check if a given object implements the AppPriceV2RelationshipsAppPricePoint interface.
 */
function instanceOfAppPriceV2RelationshipsAppPricePoint(value) {
    let isInstance = true;
    return isInstance;
}
function AppPriceV2RelationshipsAppPricePointFromJSON(json) {
    return AppPriceV2RelationshipsAppPricePointFromJSONTyped(json, false);
}
function AppPriceV2RelationshipsAppPricePointFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, AppPriceV2RelationshipsAppPricePointData_1.AppPriceV2RelationshipsAppPricePointDataFromJSON)(json["data"])
    };
}
function AppPriceV2RelationshipsAppPricePointToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        data: (0, AppPriceV2RelationshipsAppPricePointData_1.AppPriceV2RelationshipsAppPricePointDataToJSON)(value.data)
    };
}
