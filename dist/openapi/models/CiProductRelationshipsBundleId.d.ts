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
import type { BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData } from "./BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData";
/**
 *
 * @export
 * @interface CiProductRelationshipsBundleId
 */
export interface CiProductRelationshipsBundleId {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof CiProductRelationshipsBundleId
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData}
     * @memberof CiProductRelationshipsBundleId
     */
    data?: BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData;
}
/**
 * Check if a given object implements the CiProductRelationshipsBundleId interface.
 */
export declare function instanceOfCiProductRelationshipsBundleId(value: object): boolean;
export declare function CiProductRelationshipsBundleIdFromJSON(json: any): CiProductRelationshipsBundleId;
export declare function CiProductRelationshipsBundleIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductRelationshipsBundleId;
export declare function CiProductRelationshipsBundleIdToJSON(value?: CiProductRelationshipsBundleId | null): any;
