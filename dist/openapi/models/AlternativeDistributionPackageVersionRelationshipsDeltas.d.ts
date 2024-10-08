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
import type { AlternativeDistributionPackageVersionRelationshipsDeltasDataInner } from "./AlternativeDistributionPackageVersionRelationshipsDeltasDataInner";
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AlternativeDistributionPackageVersionRelationshipsDeltas
 */
export interface AlternativeDistributionPackageVersionRelationshipsDeltas {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AlternativeDistributionPackageVersionRelationshipsDeltas
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AlternativeDistributionPackageVersionRelationshipsDeltas
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AlternativeDistributionPackageVersionRelationshipsDeltasDataInner>}
     * @memberof AlternativeDistributionPackageVersionRelationshipsDeltas
     */
    data?: Array<AlternativeDistributionPackageVersionRelationshipsDeltasDataInner>;
}
/**
 * Check if a given object implements the AlternativeDistributionPackageVersionRelationshipsDeltas interface.
 */
export declare function instanceOfAlternativeDistributionPackageVersionRelationshipsDeltas(value: object): boolean;
export declare function AlternativeDistributionPackageVersionRelationshipsDeltasFromJSON(json: any): AlternativeDistributionPackageVersionRelationshipsDeltas;
export declare function AlternativeDistributionPackageVersionRelationshipsDeltasFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVersionRelationshipsDeltas;
export declare function AlternativeDistributionPackageVersionRelationshipsDeltasToJSON(value?: AlternativeDistributionPackageVersionRelationshipsDeltas | null): any;
