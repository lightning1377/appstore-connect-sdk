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
/**
 *
 * @export
 * @interface MarketplaceWebhookAttributes
 */
export interface MarketplaceWebhookAttributes {
    /**
     *
     * @type {string}
     * @memberof MarketplaceWebhookAttributes
     */
    endpointUrl?: string;
}

/**
 * Check if a given object implements the MarketplaceWebhookAttributes interface.
 */
export function instanceOfMarketplaceWebhookAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MarketplaceWebhookAttributesFromJSON(json: any): MarketplaceWebhookAttributes {
    return MarketplaceWebhookAttributesFromJSONTyped(json, false);
}

export function MarketplaceWebhookAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceWebhookAttributes {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        endpointUrl: !exists(json, "endpointUrl") ? undefined : json["endpointUrl"]
    };
}

export function MarketplaceWebhookAttributesToJSON(value?: MarketplaceWebhookAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        endpointUrl: value.endpointUrl
    };
}
