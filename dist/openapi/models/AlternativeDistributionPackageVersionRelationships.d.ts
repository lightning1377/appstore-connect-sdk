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
import type { AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage } from "./AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage";
import type { AlternativeDistributionPackageVersionRelationshipsDeltas } from "./AlternativeDistributionPackageVersionRelationshipsDeltas";
import type { AlternativeDistributionPackageVersionRelationshipsVariants } from "./AlternativeDistributionPackageVersionRelationshipsVariants";
/**
 *
 * @export
 * @interface AlternativeDistributionPackageVersionRelationships
 */
export interface AlternativeDistributionPackageVersionRelationships {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariants}
     * @memberof AlternativeDistributionPackageVersionRelationships
     */
    variants?: AlternativeDistributionPackageVersionRelationshipsVariants;
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsDeltas}
     * @memberof AlternativeDistributionPackageVersionRelationships
     */
    deltas?: AlternativeDistributionPackageVersionRelationshipsDeltas;
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage}
     * @memberof AlternativeDistributionPackageVersionRelationships
     */
    alternativeDistributionPackage?: AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage;
}
/**
 * Check if a given object implements the AlternativeDistributionPackageVersionRelationships interface.
 */
export declare function instanceOfAlternativeDistributionPackageVersionRelationships(value: object): boolean;
export declare function AlternativeDistributionPackageVersionRelationshipsFromJSON(json: any): AlternativeDistributionPackageVersionRelationships;
export declare function AlternativeDistributionPackageVersionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVersionRelationships;
export declare function AlternativeDistributionPackageVersionRelationshipsToJSON(value?: AlternativeDistributionPackageVersionRelationships | null): any;
