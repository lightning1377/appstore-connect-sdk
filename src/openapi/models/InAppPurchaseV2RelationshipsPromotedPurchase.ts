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
import type { AppRelationshipsPromotedPurchasesDataInner } from "./AppRelationshipsPromotedPurchasesDataInner";
import { AppRelationshipsPromotedPurchasesDataInnerFromJSON, AppRelationshipsPromotedPurchasesDataInnerFromJSONTyped, AppRelationshipsPromotedPurchasesDataInnerToJSON } from "./AppRelationshipsPromotedPurchasesDataInner";

/**
 *
 * @export
 * @interface InAppPurchaseV2RelationshipsPromotedPurchase
 */
export interface InAppPurchaseV2RelationshipsPromotedPurchase {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof InAppPurchaseV2RelationshipsPromotedPurchase
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {AppRelationshipsPromotedPurchasesDataInner}
     * @memberof InAppPurchaseV2RelationshipsPromotedPurchase
     */
    data?: AppRelationshipsPromotedPurchasesDataInner;
}

/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsPromotedPurchase interface.
 */
export function instanceOfInAppPurchaseV2RelationshipsPromotedPurchase(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchaseV2RelationshipsPromotedPurchaseFromJSON(json: any): InAppPurchaseV2RelationshipsPromotedPurchase {
    return InAppPurchaseV2RelationshipsPromotedPurchaseFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsPromotedPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsPromotedPurchase {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        data: !exists(json, "data") ? undefined : AppRelationshipsPromotedPurchasesDataInnerFromJSON(json["data"])
    };
}

export function InAppPurchaseV2RelationshipsPromotedPurchaseToJSON(value?: InAppPurchaseV2RelationshipsPromotedPurchase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        data: AppRelationshipsPromotedPurchasesDataInnerToJSON(value.data)
    };
}
