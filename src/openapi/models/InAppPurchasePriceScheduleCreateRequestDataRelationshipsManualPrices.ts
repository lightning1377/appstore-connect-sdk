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
import type { InAppPurchasePriceScheduleRelationshipsManualPricesDataInner } from "./InAppPurchasePriceScheduleRelationshipsManualPricesDataInner";
import { InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSON, InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSONTyped, InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerToJSON } from "./InAppPurchasePriceScheduleRelationshipsManualPricesDataInner";

/**
 *
 * @export
 * @interface InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices
 */
export interface InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices {
    /**
     *
     * @type {Array<InAppPurchasePriceScheduleRelationshipsManualPricesDataInner>}
     * @memberof InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices
     */
    data: Array<InAppPurchasePriceScheduleRelationshipsManualPricesDataInner>;
}

/**
 * Check if a given object implements the InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices interface.
 */
export function instanceOfInAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON(json: any): InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices {
    return InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSON)
    };
}

export function InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesToJSON(value?: InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerToJSON)
    };
}
