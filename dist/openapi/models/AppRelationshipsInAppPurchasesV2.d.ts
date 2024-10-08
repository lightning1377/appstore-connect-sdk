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
import type { AppRelationshipsInAppPurchasesDataInner } from "./AppRelationshipsInAppPurchasesDataInner";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppRelationshipsInAppPurchasesV2
 */
export interface AppRelationshipsInAppPurchasesV2 {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppRelationshipsInAppPurchasesV2
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppRelationshipsInAppPurchasesV2
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppRelationshipsInAppPurchasesDataInner>}
     * @memberof AppRelationshipsInAppPurchasesV2
     */
    data?: Array<AppRelationshipsInAppPurchasesDataInner>;
}
/**
 * Check if a given object implements the AppRelationshipsInAppPurchasesV2 interface.
 */
export declare function instanceOfAppRelationshipsInAppPurchasesV2(value: object): boolean;
export declare function AppRelationshipsInAppPurchasesV2FromJSON(json: any): AppRelationshipsInAppPurchasesV2;
export declare function AppRelationshipsInAppPurchasesV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsInAppPurchasesV2;
export declare function AppRelationshipsInAppPurchasesV2ToJSON(value?: AppRelationshipsInAppPurchasesV2 | null): any;
