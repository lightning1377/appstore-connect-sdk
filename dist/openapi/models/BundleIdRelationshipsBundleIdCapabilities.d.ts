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
import type { BundleIdRelationshipsBundleIdCapabilitiesDataInner } from "./BundleIdRelationshipsBundleIdCapabilitiesDataInner";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface BundleIdRelationshipsBundleIdCapabilities
 */
export interface BundleIdRelationshipsBundleIdCapabilities {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<BundleIdRelationshipsBundleIdCapabilitiesDataInner>}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    data?: Array<BundleIdRelationshipsBundleIdCapabilitiesDataInner>;
}
/**
 * Check if a given object implements the BundleIdRelationshipsBundleIdCapabilities interface.
 */
export declare function instanceOfBundleIdRelationshipsBundleIdCapabilities(value: object): boolean;
export declare function BundleIdRelationshipsBundleIdCapabilitiesFromJSON(json: any): BundleIdRelationshipsBundleIdCapabilities;
export declare function BundleIdRelationshipsBundleIdCapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdRelationshipsBundleIdCapabilities;
export declare function BundleIdRelationshipsBundleIdCapabilitiesToJSON(value?: BundleIdRelationshipsBundleIdCapabilities | null): any;
