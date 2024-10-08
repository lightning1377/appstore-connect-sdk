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
exports.AppInfoAttributesBrazilAgeRatingV2Enum = exports.AppInfoAttributesStateEnum = void 0;
exports.instanceOfAppInfoAttributes = instanceOfAppInfoAttributes;
exports.AppInfoAttributesFromJSON = AppInfoAttributesFromJSON;
exports.AppInfoAttributesFromJSONTyped = AppInfoAttributesFromJSONTyped;
exports.AppInfoAttributesToJSON = AppInfoAttributesToJSON;
const runtime_1 = require("../runtime");
const AppStoreAgeRating_1 = require("./AppStoreAgeRating");
const AppStoreVersionState_1 = require("./AppStoreVersionState");
const BrazilAgeRating_1 = require("./BrazilAgeRating");
const KidsAgeBand_1 = require("./KidsAgeBand");
/**
 * @export
 */
exports.AppInfoAttributesStateEnum = {
    Accepted: "ACCEPTED",
    DeveloperRejected: "DEVELOPER_REJECTED",
    InReview: "IN_REVIEW",
    PendingRelease: "PENDING_RELEASE",
    PrepareForSubmission: "PREPARE_FOR_SUBMISSION",
    ReadyForDistribution: "READY_FOR_DISTRIBUTION",
    ReadyForReview: "READY_FOR_REVIEW",
    Rejected: "REJECTED",
    ReplacedWithNewInfo: "REPLACED_WITH_NEW_INFO",
    WaitingForReview: "WAITING_FOR_REVIEW"
};
/**
 * @export
 */
exports.AppInfoAttributesBrazilAgeRatingV2Enum = {
    SelfRatedL: "SELF_RATED_L",
    SelfRatedTen: "SELF_RATED_TEN",
    SelfRatedTwelve: "SELF_RATED_TWELVE",
    SelfRatedFourteen: "SELF_RATED_FOURTEEN",
    SelfRatedSixteen: "SELF_RATED_SIXTEEN",
    SelfRatedEighteen: "SELF_RATED_EIGHTEEN",
    OfficialL: "OFFICIAL_L",
    OfficialTen: "OFFICIAL_TEN",
    OfficialTwelve: "OFFICIAL_TWELVE",
    OfficialFourteen: "OFFICIAL_FOURTEEN",
    OfficialSixteen: "OFFICIAL_SIXTEEN",
    OfficialEighteen: "OFFICIAL_EIGHTEEN"
};
/**
 * Check if a given object implements the AppInfoAttributes interface.
 */
function instanceOfAppInfoAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppInfoAttributesFromJSON(json) {
    return AppInfoAttributesFromJSONTyped(json, false);
}
function AppInfoAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appStoreState: !(0, runtime_1.exists)(json, "appStoreState") ? undefined : (0, AppStoreVersionState_1.AppStoreVersionStateFromJSON)(json["appStoreState"]),
        state: !(0, runtime_1.exists)(json, "state") ? undefined : json["state"],
        appStoreAgeRating: !(0, runtime_1.exists)(json, "appStoreAgeRating") ? undefined : (0, AppStoreAgeRating_1.AppStoreAgeRatingFromJSON)(json["appStoreAgeRating"]),
        brazilAgeRating: !(0, runtime_1.exists)(json, "brazilAgeRating") ? undefined : (0, BrazilAgeRating_1.BrazilAgeRatingFromJSON)(json["brazilAgeRating"]),
        brazilAgeRatingV2: !(0, runtime_1.exists)(json, "brazilAgeRatingV2") ? undefined : json["brazilAgeRatingV2"],
        kidsAgeBand: !(0, runtime_1.exists)(json, "kidsAgeBand") ? undefined : (0, KidsAgeBand_1.KidsAgeBandFromJSON)(json["kidsAgeBand"])
    };
}
function AppInfoAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appStoreState: (0, AppStoreVersionState_1.AppStoreVersionStateToJSON)(value.appStoreState),
        state: value.state,
        appStoreAgeRating: (0, AppStoreAgeRating_1.AppStoreAgeRatingToJSON)(value.appStoreAgeRating),
        brazilAgeRating: (0, BrazilAgeRating_1.BrazilAgeRatingToJSON)(value.brazilAgeRating),
        brazilAgeRatingV2: value.brazilAgeRatingV2,
        kidsAgeBand: (0, KidsAgeBand_1.KidsAgeBandToJSON)(value.kidsAgeBand)
    };
}
