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
exports.BetaAppLocalizationTypeEnum = void 0;
exports.instanceOfBetaAppLocalization = instanceOfBetaAppLocalization;
exports.BetaAppLocalizationFromJSON = BetaAppLocalizationFromJSON;
exports.BetaAppLocalizationFromJSONTyped = BetaAppLocalizationFromJSONTyped;
exports.BetaAppLocalizationToJSON = BetaAppLocalizationToJSON;
const runtime_1 = require("../runtime");
const AppPreOrderRelationships_1 = require("./AppPreOrderRelationships");
const BetaAppLocalizationAttributes_1 = require("./BetaAppLocalizationAttributes");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.BetaAppLocalizationTypeEnum = {
    BetaAppLocalizations: "betaAppLocalizations"
};
/**
 * Check if a given object implements the BetaAppLocalization interface.
 */
function instanceOfBetaAppLocalization(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function BetaAppLocalizationFromJSON(json) {
    return BetaAppLocalizationFromJSONTyped(json, false);
}
function BetaAppLocalizationFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, BetaAppLocalizationAttributes_1.BetaAppLocalizationAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, AppPreOrderRelationships_1.AppPreOrderRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function BetaAppLocalizationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, BetaAppLocalizationAttributes_1.BetaAppLocalizationAttributesToJSON)(value.attributes),
        relationships: (0, AppPreOrderRelationships_1.AppPreOrderRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
