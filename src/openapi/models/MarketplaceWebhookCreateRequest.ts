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
import type { MarketplaceWebhookCreateRequestData } from "./MarketplaceWebhookCreateRequestData";
import { MarketplaceWebhookCreateRequestDataFromJSON, MarketplaceWebhookCreateRequestDataFromJSONTyped, MarketplaceWebhookCreateRequestDataToJSON } from "./MarketplaceWebhookCreateRequestData";

/**
 *
 * @export
 * @interface MarketplaceWebhookCreateRequest
 */
export interface MarketplaceWebhookCreateRequest {
    /**
     *
     * @type {MarketplaceWebhookCreateRequestData}
     * @memberof MarketplaceWebhookCreateRequest
     */
    data: MarketplaceWebhookCreateRequestData;
}

/**
 * Check if a given object implements the MarketplaceWebhookCreateRequest interface.
 */
export function instanceOfMarketplaceWebhookCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function MarketplaceWebhookCreateRequestFromJSON(json: any): MarketplaceWebhookCreateRequest {
    return MarketplaceWebhookCreateRequestFromJSONTyped(json, false);
}

export function MarketplaceWebhookCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceWebhookCreateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: MarketplaceWebhookCreateRequestDataFromJSON(json["data"])
    };
}

export function MarketplaceWebhookCreateRequestToJSON(value?: MarketplaceWebhookCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: MarketplaceWebhookCreateRequestDataToJSON(value.data)
    };
}
