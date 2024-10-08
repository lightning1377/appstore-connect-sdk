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
import type { AppEncryptionDeclarationRelationshipsBuildsDataInner } from "./AppEncryptionDeclarationRelationshipsBuildsDataInner";
/**
 *
 * @export
 * @interface AppStoreVersionRelationshipsBuild
 */
export interface AppStoreVersionRelationshipsBuild {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppStoreVersionRelationshipsBuild
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {AppEncryptionDeclarationRelationshipsBuildsDataInner}
     * @memberof AppStoreVersionRelationshipsBuild
     */
    data?: AppEncryptionDeclarationRelationshipsBuildsDataInner;
}
/**
 * Check if a given object implements the AppStoreVersionRelationshipsBuild interface.
 */
export declare function instanceOfAppStoreVersionRelationshipsBuild(value: object): boolean;
export declare function AppStoreVersionRelationshipsBuildFromJSON(json: any): AppStoreVersionRelationshipsBuild;
export declare function AppStoreVersionRelationshipsBuildFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsBuild;
export declare function AppStoreVersionRelationshipsBuildToJSON(value?: AppStoreVersionRelationshipsBuild | null): any;
