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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import { AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON, AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSONTyped, AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { PromotedPurchaseRelationshipsSubscriptionData } from "./PromotedPurchaseRelationshipsSubscriptionData";
import { PromotedPurchaseRelationshipsSubscriptionDataFromJSON, PromotedPurchaseRelationshipsSubscriptionDataFromJSONTyped, PromotedPurchaseRelationshipsSubscriptionDataToJSON } from "./PromotedPurchaseRelationshipsSubscriptionData";

/**
 *
 * @export
 * @interface PromotedPurchaseRelationshipsSubscription
 */
export interface PromotedPurchaseRelationshipsSubscription {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof PromotedPurchaseRelationshipsSubscription
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PromotedPurchaseRelationshipsSubscriptionData}
     * @memberof PromotedPurchaseRelationshipsSubscription
     */
    data?: PromotedPurchaseRelationshipsSubscriptionData;
}

/**
 * Check if a given object implements the PromotedPurchaseRelationshipsSubscription interface.
 */
export function instanceOfPromotedPurchaseRelationshipsSubscription(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PromotedPurchaseRelationshipsSubscriptionFromJSON(json: any): PromotedPurchaseRelationshipsSubscription {
    return PromotedPurchaseRelationshipsSubscriptionFromJSONTyped(json, false);
}

export function PromotedPurchaseRelationshipsSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseRelationshipsSubscription {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        data: !exists(json, "data") ? undefined : PromotedPurchaseRelationshipsSubscriptionDataFromJSON(json["data"])
    };
}

export function PromotedPurchaseRelationshipsSubscriptionToJSON(value?: PromotedPurchaseRelationshipsSubscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        data: PromotedPurchaseRelationshipsSubscriptionDataToJSON(value.data)
    };
}
