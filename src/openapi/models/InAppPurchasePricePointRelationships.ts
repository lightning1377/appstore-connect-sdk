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

/**
 *
 * @export
 * @interface InAppPurchasePricePointRelationships
 */
export interface InAppPurchasePricePointRelationships {
    /**
     *
     * @type {AppPricePointV3RelationshipsTerritory}
     * @memberof InAppPurchasePricePointRelationships
     */
    territory?: AppPricePointV3RelationshipsTerritory;
}

/**
 * Check if a given object implements the InAppPurchasePricePointRelationships interface.
 */
export function instanceOfInAppPurchasePricePointRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePricePointRelationshipsFromJSON(json: any): InAppPurchasePricePointRelationships {
    return InAppPurchasePricePointRelationshipsFromJSONTyped(json, false);
}

export function InAppPurchasePricePointRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePricePointRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        territory: !exists(json, "territory") ? undefined : AppPricePointV3RelationshipsTerritoryFromJSON(json["territory"])
    };
}

export function InAppPurchasePricePointRelationshipsToJSON(value?: InAppPurchasePricePointRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        territory: AppPricePointV3RelationshipsTerritoryToJSON(value.territory)
    };
}
