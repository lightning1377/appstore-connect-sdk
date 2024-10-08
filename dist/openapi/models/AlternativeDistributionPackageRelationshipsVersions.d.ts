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
import type { AlternativeDistributionPackageRelationshipsVersionsDataInner } from "./AlternativeDistributionPackageRelationshipsVersionsDataInner";
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AlternativeDistributionPackageRelationshipsVersions
 */
export interface AlternativeDistributionPackageRelationshipsVersions {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AlternativeDistributionPackageRelationshipsVersions
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AlternativeDistributionPackageRelationshipsVersions
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AlternativeDistributionPackageRelationshipsVersionsDataInner>}
     * @memberof AlternativeDistributionPackageRelationshipsVersions
     */
    data?: Array<AlternativeDistributionPackageRelationshipsVersionsDataInner>;
}
/**
 * Check if a given object implements the AlternativeDistributionPackageRelationshipsVersions interface.
 */
export declare function instanceOfAlternativeDistributionPackageRelationshipsVersions(value: object): boolean;
export declare function AlternativeDistributionPackageRelationshipsVersionsFromJSON(json: any): AlternativeDistributionPackageRelationshipsVersions;
export declare function AlternativeDistributionPackageRelationshipsVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageRelationshipsVersions;
export declare function AlternativeDistributionPackageRelationshipsVersionsToJSON(value?: AlternativeDistributionPackageRelationshipsVersions | null): any;
