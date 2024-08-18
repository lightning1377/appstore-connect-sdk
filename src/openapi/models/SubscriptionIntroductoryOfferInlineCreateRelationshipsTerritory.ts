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
import type { AppAvailabilityRelationshipsAvailableTerritoriesDataInner } from "./AppAvailabilityRelationshipsAvailableTerritoriesDataInner";
import { AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON, AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSONTyped, AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON } from "./AppAvailabilityRelationshipsAvailableTerritoriesDataInner";

/**
 *
 * @export
 * @interface SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory
 */
export interface SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory {
    /**
     *
     * @type {AppAvailabilityRelationshipsAvailableTerritoriesDataInner}
     * @memberof SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory
     */
    data?: AppAvailabilityRelationshipsAvailableTerritoriesDataInner;
}

/**
 * Check if a given object implements the SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory interface.
 */
export function instanceOfSubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritoryFromJSON(json: any): SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory {
    return SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritoryFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !exists(json, "data") ? undefined : AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON(json["data"])
    };
}

export function SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritoryToJSON(value?: SubscriptionIntroductoryOfferInlineCreateRelationshipsTerritory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON(value.data)
    };
}
