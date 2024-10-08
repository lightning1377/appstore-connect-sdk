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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { AppRelationshipsPromotedPurchasesDataInner } from "./AppRelationshipsPromotedPurchasesDataInner";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppRelationshipsPromotedPurchases
 */
export interface AppRelationshipsPromotedPurchases {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppRelationshipsPromotedPurchases
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppRelationshipsPromotedPurchases
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppRelationshipsPromotedPurchasesDataInner>}
     * @memberof AppRelationshipsPromotedPurchases
     */
    data?: Array<AppRelationshipsPromotedPurchasesDataInner>;
}
/**
 * Check if a given object implements the AppRelationshipsPromotedPurchases interface.
 */
export declare function instanceOfAppRelationshipsPromotedPurchases(value: object): boolean;
export declare function AppRelationshipsPromotedPurchasesFromJSON(json: any): AppRelationshipsPromotedPurchases;
export declare function AppRelationshipsPromotedPurchasesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsPromotedPurchases;
export declare function AppRelationshipsPromotedPurchasesToJSON(value?: AppRelationshipsPromotedPurchases | null): any;
