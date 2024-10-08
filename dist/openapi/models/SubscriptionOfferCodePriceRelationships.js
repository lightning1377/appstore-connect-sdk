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
exports.instanceOfSubscriptionOfferCodePriceRelationships = instanceOfSubscriptionOfferCodePriceRelationships;
exports.SubscriptionOfferCodePriceRelationshipsFromJSON = SubscriptionOfferCodePriceRelationshipsFromJSON;
exports.SubscriptionOfferCodePriceRelationshipsFromJSONTyped = SubscriptionOfferCodePriceRelationshipsFromJSONTyped;
exports.SubscriptionOfferCodePriceRelationshipsToJSON = SubscriptionOfferCodePriceRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppPricePointV3RelationshipsTerritory_1 = require("./AppPricePointV3RelationshipsTerritory");
const SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint_1 = require("./SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint");
/**
 * Check if a given object implements the SubscriptionOfferCodePriceRelationships interface.
 */
function instanceOfSubscriptionOfferCodePriceRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function SubscriptionOfferCodePriceRelationshipsFromJSON(json) {
    return SubscriptionOfferCodePriceRelationshipsFromJSONTyped(json, false);
}
function SubscriptionOfferCodePriceRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        territory: !(0, runtime_1.exists)(json, "territory") ? undefined : (0, AppPricePointV3RelationshipsTerritory_1.AppPricePointV3RelationshipsTerritoryFromJSON)(json["territory"]),
        subscriptionPricePoint: !(0, runtime_1.exists)(json, "subscriptionPricePoint") ? undefined : (0, SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint_1.SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointFromJSON)(json["subscriptionPricePoint"])
    };
}
function SubscriptionOfferCodePriceRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        territory: (0, AppPricePointV3RelationshipsTerritory_1.AppPricePointV3RelationshipsTerritoryToJSON)(value.territory),
        subscriptionPricePoint: (0, SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint_1.SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointToJSON)(value.subscriptionPricePoint)
    };
}
