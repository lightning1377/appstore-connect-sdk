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

import { exists, mapValues } from "../runtime";
import type { PromotedPurchaseCreateRequestDataRelationshipsSubscription } from "./PromotedPurchaseCreateRequestDataRelationshipsSubscription";
import { PromotedPurchaseCreateRequestDataRelationshipsSubscriptionFromJSON, PromotedPurchaseCreateRequestDataRelationshipsSubscriptionFromJSONTyped, PromotedPurchaseCreateRequestDataRelationshipsSubscriptionToJSON } from "./PromotedPurchaseCreateRequestDataRelationshipsSubscription";
import type { SubscriptionPromotionalOfferInlineCreateRelationshipsPrices } from "./SubscriptionPromotionalOfferInlineCreateRelationshipsPrices";
import { SubscriptionPromotionalOfferInlineCreateRelationshipsPricesFromJSON, SubscriptionPromotionalOfferInlineCreateRelationshipsPricesFromJSONTyped, SubscriptionPromotionalOfferInlineCreateRelationshipsPricesToJSON } from "./SubscriptionPromotionalOfferInlineCreateRelationshipsPrices";

/**
 *
 * @export
 * @interface SubscriptionPromotionalOfferInlineCreateRelationships
 */
export interface SubscriptionPromotionalOfferInlineCreateRelationships {
    /**
     *
     * @type {PromotedPurchaseCreateRequestDataRelationshipsSubscription}
     * @memberof SubscriptionPromotionalOfferInlineCreateRelationships
     */
    subscription?: PromotedPurchaseCreateRequestDataRelationshipsSubscription;
    /**
     *
     * @type {SubscriptionPromotionalOfferInlineCreateRelationshipsPrices}
     * @memberof SubscriptionPromotionalOfferInlineCreateRelationships
     */
    prices?: SubscriptionPromotionalOfferInlineCreateRelationshipsPrices;
}

/**
 * Check if a given object implements the SubscriptionPromotionalOfferInlineCreateRelationships interface.
 */
export function instanceOfSubscriptionPromotionalOfferInlineCreateRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionPromotionalOfferInlineCreateRelationshipsFromJSON(json: any): SubscriptionPromotionalOfferInlineCreateRelationships {
    return SubscriptionPromotionalOfferInlineCreateRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferInlineCreateRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferInlineCreateRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        subscription: !exists(json, "subscription") ? undefined : PromotedPurchaseCreateRequestDataRelationshipsSubscriptionFromJSON(json["subscription"]),
        prices: !exists(json, "prices") ? undefined : SubscriptionPromotionalOfferInlineCreateRelationshipsPricesFromJSON(json["prices"])
    };
}

export function SubscriptionPromotionalOfferInlineCreateRelationshipsToJSON(value?: SubscriptionPromotionalOfferInlineCreateRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        subscription: PromotedPurchaseCreateRequestDataRelationshipsSubscriptionToJSON(value.subscription),
        prices: SubscriptionPromotionalOfferInlineCreateRelationshipsPricesToJSON(value.prices)
    };
}
