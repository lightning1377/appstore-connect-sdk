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
exports.instanceOfPromotedPurchaseCreateRequestDataRelationships = instanceOfPromotedPurchaseCreateRequestDataRelationships;
exports.PromotedPurchaseCreateRequestDataRelationshipsFromJSON = PromotedPurchaseCreateRequestDataRelationshipsFromJSON;
exports.PromotedPurchaseCreateRequestDataRelationshipsFromJSONTyped = PromotedPurchaseCreateRequestDataRelationshipsFromJSONTyped;
exports.PromotedPurchaseCreateRequestDataRelationshipsToJSON = PromotedPurchaseCreateRequestDataRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AnalyticsReportRequestCreateRequestDataRelationshipsApp_1 = require("./AnalyticsReportRequestCreateRequestDataRelationshipsApp");
const InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2_1 = require("./InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2");
const PromotedPurchaseCreateRequestDataRelationshipsSubscription_1 = require("./PromotedPurchaseCreateRequestDataRelationshipsSubscription");
/**
 * Check if a given object implements the PromotedPurchaseCreateRequestDataRelationships interface.
 */
function instanceOfPromotedPurchaseCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "app" in value;
    return isInstance;
}
function PromotedPurchaseCreateRequestDataRelationshipsFromJSON(json) {
    return PromotedPurchaseCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function PromotedPurchaseCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        app: (0, AnalyticsReportRequestCreateRequestDataRelationshipsApp_1.AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON)(json["app"]),
        inAppPurchaseV2: !(0, runtime_1.exists)(json, "inAppPurchaseV2") ? undefined : (0, InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2_1.InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2FromJSON)(json["inAppPurchaseV2"]),
        subscription: !(0, runtime_1.exists)(json, "subscription") ? undefined : (0, PromotedPurchaseCreateRequestDataRelationshipsSubscription_1.PromotedPurchaseCreateRequestDataRelationshipsSubscriptionFromJSON)(json["subscription"])
    };
}
function PromotedPurchaseCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        app: (0, AnalyticsReportRequestCreateRequestDataRelationshipsApp_1.AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON)(value.app),
        inAppPurchaseV2: (0, InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2_1.InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2ToJSON)(value.inAppPurchaseV2),
        subscription: (0, PromotedPurchaseCreateRequestDataRelationshipsSubscription_1.PromotedPurchaseCreateRequestDataRelationshipsSubscriptionToJSON)(value.subscription)
    };
}
