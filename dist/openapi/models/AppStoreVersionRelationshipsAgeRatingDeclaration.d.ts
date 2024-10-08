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
import type { AppInfoRelationshipsAgeRatingDeclarationData } from "./AppInfoRelationshipsAgeRatingDeclarationData";
/**
 *
 * @export
 * @interface AppStoreVersionRelationshipsAgeRatingDeclaration
 */
export interface AppStoreVersionRelationshipsAgeRatingDeclaration {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppStoreVersionRelationshipsAgeRatingDeclaration
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {AppInfoRelationshipsAgeRatingDeclarationData}
     * @memberof AppStoreVersionRelationshipsAgeRatingDeclaration
     */
    data?: AppInfoRelationshipsAgeRatingDeclarationData;
}
/**
 * Check if a given object implements the AppStoreVersionRelationshipsAgeRatingDeclaration interface.
 */
export declare function instanceOfAppStoreVersionRelationshipsAgeRatingDeclaration(value: object): boolean;
export declare function AppStoreVersionRelationshipsAgeRatingDeclarationFromJSON(json: any): AppStoreVersionRelationshipsAgeRatingDeclaration;
export declare function AppStoreVersionRelationshipsAgeRatingDeclarationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsAgeRatingDeclaration;
export declare function AppStoreVersionRelationshipsAgeRatingDeclarationToJSON(value?: AppStoreVersionRelationshipsAgeRatingDeclaration | null): any;
