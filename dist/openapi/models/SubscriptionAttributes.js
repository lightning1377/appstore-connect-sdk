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
exports.SubscriptionAttributesSubscriptionPeriodEnum = exports.SubscriptionAttributesStateEnum = void 0;
exports.instanceOfSubscriptionAttributes = instanceOfSubscriptionAttributes;
exports.SubscriptionAttributesFromJSON = SubscriptionAttributesFromJSON;
exports.SubscriptionAttributesFromJSONTyped = SubscriptionAttributesFromJSONTyped;
exports.SubscriptionAttributesToJSON = SubscriptionAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.SubscriptionAttributesStateEnum = {
    MissingMetadata: "MISSING_METADATA",
    ReadyToSubmit: "READY_TO_SUBMIT",
    WaitingForReview: "WAITING_FOR_REVIEW",
    InReview: "IN_REVIEW",
    DeveloperActionNeeded: "DEVELOPER_ACTION_NEEDED",
    PendingBinaryApproval: "PENDING_BINARY_APPROVAL",
    Approved: "APPROVED",
    DeveloperRemovedFromSale: "DEVELOPER_REMOVED_FROM_SALE",
    RemovedFromSale: "REMOVED_FROM_SALE",
    Rejected: "REJECTED"
};
/**
 * @export
 */
exports.SubscriptionAttributesSubscriptionPeriodEnum = {
    OneWeek: "ONE_WEEK",
    OneMonth: "ONE_MONTH",
    TwoMonths: "TWO_MONTHS",
    ThreeMonths: "THREE_MONTHS",
    SixMonths: "SIX_MONTHS",
    OneYear: "ONE_YEAR"
};
/**
 * Check if a given object implements the SubscriptionAttributes interface.
 */
function instanceOfSubscriptionAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function SubscriptionAttributesFromJSON(json) {
    return SubscriptionAttributesFromJSONTyped(json, false);
}
function SubscriptionAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, "name") ? undefined : json["name"],
        productId: !(0, runtime_1.exists)(json, "productId") ? undefined : json["productId"],
        familySharable: !(0, runtime_1.exists)(json, "familySharable") ? undefined : json["familySharable"],
        state: !(0, runtime_1.exists)(json, "state") ? undefined : json["state"],
        subscriptionPeriod: !(0, runtime_1.exists)(json, "subscriptionPeriod") ? undefined : json["subscriptionPeriod"],
        reviewNote: !(0, runtime_1.exists)(json, "reviewNote") ? undefined : json["reviewNote"],
        groupLevel: !(0, runtime_1.exists)(json, "groupLevel") ? undefined : json["groupLevel"]
    };
}
function SubscriptionAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        productId: value.productId,
        familySharable: value.familySharable,
        state: value.state,
        subscriptionPeriod: value.subscriptionPeriod,
        reviewNote: value.reviewNote,
        groupLevel: value.groupLevel
    };
}
