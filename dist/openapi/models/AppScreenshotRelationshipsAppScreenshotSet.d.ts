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
import type { AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner } from "./AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner";
/**
 *
 * @export
 * @interface AppScreenshotRelationshipsAppScreenshotSet
 */
export interface AppScreenshotRelationshipsAppScreenshotSet {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppScreenshotRelationshipsAppScreenshotSet
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner}
     * @memberof AppScreenshotRelationshipsAppScreenshotSet
     */
    data?: AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner;
}
/**
 * Check if a given object implements the AppScreenshotRelationshipsAppScreenshotSet interface.
 */
export declare function instanceOfAppScreenshotRelationshipsAppScreenshotSet(value: object): boolean;
export declare function AppScreenshotRelationshipsAppScreenshotSetFromJSON(json: any): AppScreenshotRelationshipsAppScreenshotSet;
export declare function AppScreenshotRelationshipsAppScreenshotSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotRelationshipsAppScreenshotSet;
export declare function AppScreenshotRelationshipsAppScreenshotSetToJSON(value?: AppScreenshotRelationshipsAppScreenshotSet | null): any;
