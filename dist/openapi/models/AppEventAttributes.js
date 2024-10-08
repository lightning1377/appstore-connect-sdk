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
exports.AppEventAttributesPurposeEnum = exports.AppEventAttributesPriorityEnum = exports.AppEventAttributesPurchaseRequirementEnum = exports.AppEventAttributesEventStateEnum = exports.AppEventAttributesBadgeEnum = void 0;
exports.instanceOfAppEventAttributes = instanceOfAppEventAttributes;
exports.AppEventAttributesFromJSON = AppEventAttributesFromJSON;
exports.AppEventAttributesFromJSONTyped = AppEventAttributesFromJSONTyped;
exports.AppEventAttributesToJSON = AppEventAttributesToJSON;
const runtime_1 = require("../runtime");
const AppEventAttributesTerritorySchedulesInner_1 = require("./AppEventAttributesTerritorySchedulesInner");
/**
 * @export
 */
exports.AppEventAttributesBadgeEnum = {
    LiveEvent: "LIVE_EVENT",
    Premiere: "PREMIERE",
    Challenge: "CHALLENGE",
    Competition: "COMPETITION",
    NewSeason: "NEW_SEASON",
    MajorUpdate: "MAJOR_UPDATE",
    SpecialEvent: "SPECIAL_EVENT"
};
/**
 * @export
 */
exports.AppEventAttributesEventStateEnum = {
    Draft: "DRAFT",
    ReadyForReview: "READY_FOR_REVIEW",
    WaitingForReview: "WAITING_FOR_REVIEW",
    InReview: "IN_REVIEW",
    Rejected: "REJECTED",
    Accepted: "ACCEPTED",
    Approved: "APPROVED",
    Published: "PUBLISHED",
    Past: "PAST",
    Archived: "ARCHIVED"
};
/**
 * @export
 */
exports.AppEventAttributesPurchaseRequirementEnum = {
    NoCostAssociated: "NO_COST_ASSOCIATED",
    InAppPurchase: "IN_APP_PURCHASE",
    Subscription: "SUBSCRIPTION",
    InAppPurchaseAndSubscription: "IN_APP_PURCHASE_AND_SUBSCRIPTION",
    InAppPurchaseOrSubscription: "IN_APP_PURCHASE_OR_SUBSCRIPTION"
};
/**
 * @export
 */
exports.AppEventAttributesPriorityEnum = {
    High: "HIGH",
    Normal: "NORMAL"
};
/**
 * @export
 */
exports.AppEventAttributesPurposeEnum = {
    AppropriateForAllUsers: "APPROPRIATE_FOR_ALL_USERS",
    AttractNewUsers: "ATTRACT_NEW_USERS",
    KeepActiveUsersInformed: "KEEP_ACTIVE_USERS_INFORMED",
    BringBackLapsedUsers: "BRING_BACK_LAPSED_USERS"
};
/**
 * Check if a given object implements the AppEventAttributes interface.
 */
function instanceOfAppEventAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppEventAttributesFromJSON(json) {
    return AppEventAttributesFromJSONTyped(json, false);
}
function AppEventAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        referenceName: !(0, runtime_1.exists)(json, "referenceName") ? undefined : json["referenceName"],
        badge: !(0, runtime_1.exists)(json, "badge") ? undefined : json["badge"],
        eventState: !(0, runtime_1.exists)(json, "eventState") ? undefined : json["eventState"],
        deepLink: !(0, runtime_1.exists)(json, "deepLink") ? undefined : json["deepLink"],
        purchaseRequirement: !(0, runtime_1.exists)(json, "purchaseRequirement") ? undefined : json["purchaseRequirement"],
        primaryLocale: !(0, runtime_1.exists)(json, "primaryLocale") ? undefined : json["primaryLocale"],
        priority: !(0, runtime_1.exists)(json, "priority") ? undefined : json["priority"],
        purpose: !(0, runtime_1.exists)(json, "purpose") ? undefined : json["purpose"],
        territorySchedules: !(0, runtime_1.exists)(json, "territorySchedules") ? undefined : json["territorySchedules"].map(AppEventAttributesTerritorySchedulesInner_1.AppEventAttributesTerritorySchedulesInnerFromJSON),
        archivedTerritorySchedules: !(0, runtime_1.exists)(json, "archivedTerritorySchedules") ? undefined : json["archivedTerritorySchedules"].map(AppEventAttributesTerritorySchedulesInner_1.AppEventAttributesTerritorySchedulesInnerFromJSON)
    };
}
function AppEventAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        referenceName: value.referenceName,
        badge: value.badge,
        eventState: value.eventState,
        deepLink: value.deepLink,
        purchaseRequirement: value.purchaseRequirement,
        primaryLocale: value.primaryLocale,
        priority: value.priority,
        purpose: value.purpose,
        territorySchedules: value.territorySchedules === undefined ? undefined : value.territorySchedules.map(AppEventAttributesTerritorySchedulesInner_1.AppEventAttributesTerritorySchedulesInnerToJSON),
        archivedTerritorySchedules: value.archivedTerritorySchedules === undefined ? undefined : value.archivedTerritorySchedules.map(AppEventAttributesTerritorySchedulesInner_1.AppEventAttributesTerritorySchedulesInnerToJSON)
    };
}
