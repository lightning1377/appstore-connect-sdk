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
import type { BuildBundleRelationshipsAppClipDomainCacheStatusData } from "./BuildBundleRelationshipsAppClipDomainCacheStatusData";
/**
 *
 * @export
 * @interface BuildBundleRelationshipsAppClipDomainCacheStatus
 */
export interface BuildBundleRelationshipsAppClipDomainCacheStatus {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof BuildBundleRelationshipsAppClipDomainCacheStatus
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {BuildBundleRelationshipsAppClipDomainCacheStatusData}
     * @memberof BuildBundleRelationshipsAppClipDomainCacheStatus
     */
    data?: BuildBundleRelationshipsAppClipDomainCacheStatusData;
}
/**
 * Check if a given object implements the BuildBundleRelationshipsAppClipDomainCacheStatus interface.
 */
export declare function instanceOfBuildBundleRelationshipsAppClipDomainCacheStatus(value: object): boolean;
export declare function BuildBundleRelationshipsAppClipDomainCacheStatusFromJSON(json: any): BuildBundleRelationshipsAppClipDomainCacheStatus;
export declare function BuildBundleRelationshipsAppClipDomainCacheStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleRelationshipsAppClipDomainCacheStatus;
export declare function BuildBundleRelationshipsAppClipDomainCacheStatusToJSON(value?: BuildBundleRelationshipsAppClipDomainCacheStatus | null): any;
