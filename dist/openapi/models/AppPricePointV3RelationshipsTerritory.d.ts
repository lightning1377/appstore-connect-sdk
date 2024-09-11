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
import type { AppAvailabilityRelationshipsAvailableTerritoriesDataInner } from "./AppAvailabilityRelationshipsAvailableTerritoriesDataInner";
/**
 *
 * @export
 * @interface AppPricePointV3RelationshipsTerritory
 */
export interface AppPricePointV3RelationshipsTerritory {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppPricePointV3RelationshipsTerritory
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {AppAvailabilityRelationshipsAvailableTerritoriesDataInner}
     * @memberof AppPricePointV3RelationshipsTerritory
     */
    data?: AppAvailabilityRelationshipsAvailableTerritoriesDataInner;
}
/**
 * Check if a given object implements the AppPricePointV3RelationshipsTerritory interface.
 */
export declare function instanceOfAppPricePointV3RelationshipsTerritory(value: object): boolean;
export declare function AppPricePointV3RelationshipsTerritoryFromJSON(json: any): AppPricePointV3RelationshipsTerritory;
export declare function AppPricePointV3RelationshipsTerritoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV3RelationshipsTerritory;
export declare function AppPricePointV3RelationshipsTerritoryToJSON(value?: AppPricePointV3RelationshipsTerritory | null): any;
