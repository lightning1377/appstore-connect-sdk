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
exports.AppStoreAgeRating = void 0;
exports.AppStoreAgeRatingFromJSON = AppStoreAgeRatingFromJSON;
exports.AppStoreAgeRatingFromJSONTyped = AppStoreAgeRatingFromJSONTyped;
exports.AppStoreAgeRatingToJSON = AppStoreAgeRatingToJSON;
/**
 *
 * @export
 */
exports.AppStoreAgeRating = {
    FourPlus: "FOUR_PLUS",
    NinePlus: "NINE_PLUS",
    TwelvePlus: "TWELVE_PLUS",
    SeventeenPlus: "SEVENTEEN_PLUS",
    Unrated: "UNRATED"
};
function AppStoreAgeRatingFromJSON(json) {
    return AppStoreAgeRatingFromJSONTyped(json, false);
}
function AppStoreAgeRatingFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function AppStoreAgeRatingToJSON(value) {
    return value;
}
