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
import type { AppPricePointV3RelationshipsTerritory } from "./AppPricePointV3RelationshipsTerritory";
import { AppPricePointV3RelationshipsTerritoryFromJSON, AppPricePointV3RelationshipsTerritoryFromJSONTyped, AppPricePointV3RelationshipsTerritoryToJSON } from "./AppPricePointV3RelationshipsTerritory";
import type { SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint } from "./SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint";
import { SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointFromJSON, SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointFromJSONTyped, SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointToJSON } from "./SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint";

/**
 *
 * @export
 * @interface SubscriptionOfferCodePriceRelationships
 */
export interface SubscriptionOfferCodePriceRelationships {
    /**
     *
     * @type {AppPricePointV3RelationshipsTerritory}
     * @memberof SubscriptionOfferCodePriceRelationships
     */
    territory?: AppPricePointV3RelationshipsTerritory;
    /**
     *
     * @type {SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint}
     * @memberof SubscriptionOfferCodePriceRelationships
     */
    subscriptionPricePoint?: SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePoint;
}

/**
 * Check if a given object implements the SubscriptionOfferCodePriceRelationships interface.
 */
export function instanceOfSubscriptionOfferCodePriceRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionOfferCodePriceRelationshipsFromJSON(json: any): SubscriptionOfferCodePriceRelationships {
    return SubscriptionOfferCodePriceRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionOfferCodePriceRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodePriceRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        territory: !exists(json, "territory") ? undefined : AppPricePointV3RelationshipsTerritoryFromJSON(json["territory"]),
        subscriptionPricePoint: !exists(json, "subscriptionPricePoint") ? undefined : SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointFromJSON(json["subscriptionPricePoint"])
    };
}

export function SubscriptionOfferCodePriceRelationshipsToJSON(value?: SubscriptionOfferCodePriceRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        territory: AppPricePointV3RelationshipsTerritoryToJSON(value.territory),
        subscriptionPricePoint: SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointToJSON(value.subscriptionPricePoint)
    };
}
