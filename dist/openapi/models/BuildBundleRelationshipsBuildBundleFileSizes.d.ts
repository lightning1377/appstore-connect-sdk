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
import type { BuildBundleRelationshipsBuildBundleFileSizesDataInner } from "./BuildBundleRelationshipsBuildBundleFileSizesDataInner";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface BuildBundleRelationshipsBuildBundleFileSizes
 */
export interface BuildBundleRelationshipsBuildBundleFileSizes {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof BuildBundleRelationshipsBuildBundleFileSizes
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BuildBundleRelationshipsBuildBundleFileSizes
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<BuildBundleRelationshipsBuildBundleFileSizesDataInner>}
     * @memberof BuildBundleRelationshipsBuildBundleFileSizes
     */
    data?: Array<BuildBundleRelationshipsBuildBundleFileSizesDataInner>;
}
/**
 * Check if a given object implements the BuildBundleRelationshipsBuildBundleFileSizes interface.
 */
export declare function instanceOfBuildBundleRelationshipsBuildBundleFileSizes(value: object): boolean;
export declare function BuildBundleRelationshipsBuildBundleFileSizesFromJSON(json: any): BuildBundleRelationshipsBuildBundleFileSizes;
export declare function BuildBundleRelationshipsBuildBundleFileSizesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleRelationshipsBuildBundleFileSizes;
export declare function BuildBundleRelationshipsBuildBundleFileSizesToJSON(value?: BuildBundleRelationshipsBuildBundleFileSizes | null): any;
