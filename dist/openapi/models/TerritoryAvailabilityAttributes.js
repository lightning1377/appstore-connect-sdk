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
exports.TerritoryAvailabilityAttributesContentStatusesEnum = void 0;
exports.instanceOfTerritoryAvailabilityAttributes = instanceOfTerritoryAvailabilityAttributes;
exports.TerritoryAvailabilityAttributesFromJSON = TerritoryAvailabilityAttributesFromJSON;
exports.TerritoryAvailabilityAttributesFromJSONTyped = TerritoryAvailabilityAttributesFromJSONTyped;
exports.TerritoryAvailabilityAttributesToJSON = TerritoryAvailabilityAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.TerritoryAvailabilityAttributesContentStatusesEnum = {
    Available: "AVAILABLE",
    AvailableForPreorderOnDate: "AVAILABLE_FOR_PREORDER_ON_DATE",
    ProcessingToNotAvailable: "PROCESSING_TO_NOT_AVAILABLE",
    ProcessingToAvailable: "PROCESSING_TO_AVAILABLE",
    ProcessingToPreOrder: "PROCESSING_TO_PRE_ORDER",
    AvailableForSaleUnreleasedApp: "AVAILABLE_FOR_SALE_UNRELEASED_APP",
    PreorderOnUnreleasedApp: "PREORDER_ON_UNRELEASED_APP",
    AvailableForPreorder: "AVAILABLE_FOR_PREORDER",
    MissingRating: "MISSING_RATING",
    CannotSellRestrictedRating: "CANNOT_SELL_RESTRICTED_RATING",
    BrazilRequiredTaxId: "BRAZIL_REQUIRED_TAX_ID",
    MissingGrn: "MISSING_GRN",
    UnverifiedGrn: "UNVERIFIED_GRN",
    CannotSellSeventeenPlusApps: "CANNOT_SELL_SEVENTEEN_PLUS_APPS",
    CannotSellSexuallyExplicit: "CANNOT_SELL_SEXUALLY_EXPLICIT",
    CannotSellNonIosGames: "CANNOT_SELL_NON_IOS_GAMES",
    CannotSellSeventeenPlusGames: "CANNOT_SELL_SEVENTEEN_PLUS_GAMES",
    CannotSellFrequentIntenseGambling: "CANNOT_SELL_FREQUENT_INTENSE_GAMBLING",
    CannotSellCasino: "CANNOT_SELL_CASINO",
    CannotSellCasinoWithoutGrac: "CANNOT_SELL_CASINO_WITHOUT_GRAC",
    CannotSellCasinoWithoutAgeVerification: "CANNOT_SELL_CASINO_WITHOUT_AGE_VERIFICATION",
    CannotSellFrequentIntenseAlcoholTobaccoDrugs: "CANNOT_SELL_FREQUENT_INTENSE_ALCOHOL_TOBACCO_DRUGS",
    CannotSellFrequentIntenseViolence: "CANNOT_SELL_FREQUENT_INTENSE_VIOLENCE",
    CannotSellFrequentIntenseSexualContentNudity: "CANNOT_SELL_FREQUENT_INTENSE_SEXUAL_CONTENT_NUDITY",
    CannotSellInfrequentMildAlcoholTobaccoDrugs: "CANNOT_SELL_INFREQUENT_MILD_ALCOHOL_TOBACCO_DRUGS",
    CannotSellInfrequentMildSexualContentNudity: "CANNOT_SELL_INFREQUENT_MILD_SEXUAL_CONTENT_NUDITY",
    CannotSellAdultOnly: "CANNOT_SELL_ADULT_ONLY",
    CannotSellFrequentIntense: "CANNOT_SELL_FREQUENT_INTENSE",
    CannotSellFrequentIntenseWithoutGrac: "CANNOT_SELL_FREQUENT_INTENSE_WITHOUT_GRAC",
    CannotSellGamblingContests: "CANNOT_SELL_GAMBLING_CONTESTS",
    CannotSellGambling: "CANNOT_SELL_GAMBLING",
    CannotSellContests: "CANNOT_SELL_CONTESTS",
    CannotSell: "CANNOT_SELL"
};
/**
 * Check if a given object implements the TerritoryAvailabilityAttributes interface.
 */
function instanceOfTerritoryAvailabilityAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function TerritoryAvailabilityAttributesFromJSON(json) {
    return TerritoryAvailabilityAttributesFromJSONTyped(json, false);
}
function TerritoryAvailabilityAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        available: !(0, runtime_1.exists)(json, "available") ? undefined : json["available"],
        releaseDate: !(0, runtime_1.exists)(json, "releaseDate") ? undefined : new Date(json["releaseDate"]),
        preOrderEnabled: !(0, runtime_1.exists)(json, "preOrderEnabled") ? undefined : json["preOrderEnabled"],
        preOrderPublishDate: !(0, runtime_1.exists)(json, "preOrderPublishDate") ? undefined : new Date(json["preOrderPublishDate"]),
        contentStatuses: !(0, runtime_1.exists)(json, "contentStatuses") ? undefined : json["contentStatuses"]
    };
}
function TerritoryAvailabilityAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        available: value.available,
        releaseDate: value.releaseDate === undefined ? undefined : value.releaseDate.toISOString().substr(0, 10),
        preOrderEnabled: value.preOrderEnabled,
        preOrderPublishDate: value.preOrderPublishDate === undefined ? undefined : value.preOrderPublishDate.toISOString().substr(0, 10),
        contentStatuses: value.contentStatuses
    };
}
