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
import type { InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint } from "./InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint";
import { InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePointFromJSON, InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePointFromJSONTyped, InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePointToJSON } from "./InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint";
import type { InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2 } from "./InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2";
import { InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2FromJSON, InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2FromJSONTyped, InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2ToJSON } from "./InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2";

/**
 *
 * @export
 * @interface InAppPurchasePriceInlineCreateRelationships
 */
export interface InAppPurchasePriceInlineCreateRelationships {
    /**
     *
     * @type {InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2}
     * @memberof InAppPurchasePriceInlineCreateRelationships
     */
    inAppPurchaseV2?: InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2;
    /**
     *
     * @type {InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint}
     * @memberof InAppPurchasePriceInlineCreateRelationships
     */
    inAppPurchasePricePoint?: InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint;
}

/**
 * Check if a given object implements the InAppPurchasePriceInlineCreateRelationships interface.
 */
export function instanceOfInAppPurchasePriceInlineCreateRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePriceInlineCreateRelationshipsFromJSON(json: any): InAppPurchasePriceInlineCreateRelationships {
    return InAppPurchasePriceInlineCreateRelationshipsFromJSONTyped(json, false);
}

export function InAppPurchasePriceInlineCreateRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceInlineCreateRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        inAppPurchaseV2: !exists(json, "inAppPurchaseV2") ? undefined : InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2FromJSON(json["inAppPurchaseV2"]),
        inAppPurchasePricePoint: !exists(json, "inAppPurchasePricePoint") ? undefined : InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePointFromJSON(json["inAppPurchasePricePoint"])
    };
}

export function InAppPurchasePriceInlineCreateRelationshipsToJSON(value?: InAppPurchasePriceInlineCreateRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        inAppPurchaseV2: InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2ToJSON(value.inAppPurchaseV2),
        inAppPurchasePricePoint: InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePointToJSON(value.inAppPurchasePricePoint)
    };
}
