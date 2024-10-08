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
exports.instanceOfGameCenterDetailResponse = instanceOfGameCenterDetailResponse;
exports.GameCenterDetailResponseFromJSON = GameCenterDetailResponseFromJSON;
exports.GameCenterDetailResponseFromJSONTyped = GameCenterDetailResponseFromJSONTyped;
exports.GameCenterDetailResponseToJSON = GameCenterDetailResponseToJSON;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const GameCenterDetail_1 = require("./GameCenterDetail");
const GameCenterDetailsResponseIncludedInner_1 = require("./GameCenterDetailsResponseIncludedInner");
/**
 * Check if a given object implements the GameCenterDetailResponse interface.
 */
function instanceOfGameCenterDetailResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function GameCenterDetailResponseFromJSON(json) {
    return GameCenterDetailResponseFromJSONTyped(json, false);
}
function GameCenterDetailResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterDetail_1.GameCenterDetailFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(GameCenterDetailsResponseIncludedInner_1.GameCenterDetailsResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function GameCenterDetailResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterDetail_1.GameCenterDetailToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(GameCenterDetailsResponseIncludedInner_1.GameCenterDetailsResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
