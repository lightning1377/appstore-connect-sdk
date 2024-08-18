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
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";
import type { SubscriptionIntroductoryOfferAttributes } from "./SubscriptionIntroductoryOfferAttributes";
import { SubscriptionIntroductoryOfferAttributesFromJSON, SubscriptionIntroductoryOfferAttributesFromJSONTyped, SubscriptionIntroductoryOfferAttributesToJSON } from "./SubscriptionIntroductoryOfferAttributes";
import type { SubscriptionIntroductoryOfferRelationships } from "./SubscriptionIntroductoryOfferRelationships";
import { SubscriptionIntroductoryOfferRelationshipsFromJSON, SubscriptionIntroductoryOfferRelationshipsFromJSONTyped, SubscriptionIntroductoryOfferRelationshipsToJSON } from "./SubscriptionIntroductoryOfferRelationships";

/**
 *
 * @export
 * @interface SubscriptionIntroductoryOffer
 */
export interface SubscriptionIntroductoryOffer {
    /**
     *
     * @type {string}
     * @memberof SubscriptionIntroductoryOffer
     */
    type: SubscriptionIntroductoryOfferTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionIntroductoryOffer
     */
    id: string;
    /**
     *
     * @type {SubscriptionIntroductoryOfferAttributes}
     * @memberof SubscriptionIntroductoryOffer
     */
    attributes?: SubscriptionIntroductoryOfferAttributes;
    /**
     *
     * @type {SubscriptionIntroductoryOfferRelationships}
     * @memberof SubscriptionIntroductoryOffer
     */
    relationships?: SubscriptionIntroductoryOfferRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof SubscriptionIntroductoryOffer
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const SubscriptionIntroductoryOfferTypeEnum = {
    SubscriptionIntroductoryOffers: "subscriptionIntroductoryOffers"
} as const;
export type SubscriptionIntroductoryOfferTypeEnum = (typeof SubscriptionIntroductoryOfferTypeEnum)[keyof typeof SubscriptionIntroductoryOfferTypeEnum];

/**
 * Check if a given object implements the SubscriptionIntroductoryOffer interface.
 */
export function instanceOfSubscriptionIntroductoryOffer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionIntroductoryOfferFromJSON(json: any): SubscriptionIntroductoryOffer {
    return SubscriptionIntroductoryOfferFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOffer {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : SubscriptionIntroductoryOfferAttributesFromJSON(json["attributes"]),
        relationships: !exists(json, "relationships") ? undefined : SubscriptionIntroductoryOfferRelationshipsFromJSON(json["relationships"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function SubscriptionIntroductoryOfferToJSON(value?: SubscriptionIntroductoryOffer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: SubscriptionIntroductoryOfferAttributesToJSON(value.attributes),
        relationships: SubscriptionIntroductoryOfferRelationshipsToJSON(value.relationships),
        links: ResourceLinksToJSON(value.links)
    };
}
