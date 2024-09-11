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
import type { AppPriceScheduleRelationshipsManualPricesDataInner } from "./AppPriceScheduleRelationshipsManualPricesDataInner";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppPriceScheduleRelationshipsManualPrices
 */
export interface AppPriceScheduleRelationshipsManualPrices {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppPriceScheduleRelationshipsManualPrices
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppPriceScheduleRelationshipsManualPrices
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppPriceScheduleRelationshipsManualPricesDataInner>}
     * @memberof AppPriceScheduleRelationshipsManualPrices
     */
    data?: Array<AppPriceScheduleRelationshipsManualPricesDataInner>;
}
/**
 * Check if a given object implements the AppPriceScheduleRelationshipsManualPrices interface.
 */
export declare function instanceOfAppPriceScheduleRelationshipsManualPrices(value: object): boolean;
export declare function AppPriceScheduleRelationshipsManualPricesFromJSON(json: any): AppPriceScheduleRelationshipsManualPrices;
export declare function AppPriceScheduleRelationshipsManualPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleRelationshipsManualPrices;
export declare function AppPriceScheduleRelationshipsManualPricesToJSON(value?: AppPriceScheduleRelationshipsManualPrices | null): any;
