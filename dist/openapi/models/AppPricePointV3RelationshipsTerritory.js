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
exports.instanceOfAppPricePointV3RelationshipsTerritory = instanceOfAppPricePointV3RelationshipsTerritory;
exports.AppPricePointV3RelationshipsTerritoryFromJSON = AppPricePointV3RelationshipsTerritoryFromJSON;
exports.AppPricePointV3RelationshipsTerritoryFromJSONTyped = AppPricePointV3RelationshipsTerritoryFromJSONTyped;
exports.AppPricePointV3RelationshipsTerritoryToJSON = AppPricePointV3RelationshipsTerritoryToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const AppAvailabilityRelationshipsAvailableTerritoriesDataInner_1 = require("./AppAvailabilityRelationshipsAvailableTerritoriesDataInner");
/**
 * Check if a given object implements the AppPricePointV3RelationshipsTerritory interface.
 */
function instanceOfAppPricePointV3RelationshipsTerritory(value) {
    let isInstance = true;
    return isInstance;
}
function AppPricePointV3RelationshipsTerritoryFromJSON(json) {
    return AppPricePointV3RelationshipsTerritoryFromJSONTyped(json, false);
}
function AppPricePointV3RelationshipsTerritoryFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, AppAvailabilityRelationshipsAvailableTerritoriesDataInner_1.AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON)(json["data"])
    };
}
function AppPricePointV3RelationshipsTerritoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        data: (0, AppAvailabilityRelationshipsAvailableTerritoriesDataInner_1.AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON)(value.data)
    };
}
