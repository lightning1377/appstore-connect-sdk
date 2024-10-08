/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AppCategoryRelationshipsSubcategoriesLinks } from './AppCategoryRelationshipsSubcategoriesLinks';
import type { AppPricePointV2RelationshipsTerritoryData } from './AppPricePointV2RelationshipsTerritoryData';
/**
 *
 * @export
 * @interface AppPricePointV2RelationshipsTerritory
 */
export interface AppPricePointV2RelationshipsTerritory {
    /**
     *
     * @type {AppCategoryRelationshipsSubcategoriesLinks}
     * @memberof AppPricePointV2RelationshipsTerritory
     */
    links?: AppCategoryRelationshipsSubcategoriesLinks;
    /**
     *
     * @type {AppPricePointV2RelationshipsTerritoryData}
     * @memberof AppPricePointV2RelationshipsTerritory
     */
    data?: AppPricePointV2RelationshipsTerritoryData;
}
/**
 * Check if a given object implements the AppPricePointV2RelationshipsTerritory interface.
 */
export declare function instanceOfAppPricePointV2RelationshipsTerritory(value: object): boolean;
export declare function AppPricePointV2RelationshipsTerritoryFromJSON(json: any): AppPricePointV2RelationshipsTerritory;
export declare function AppPricePointV2RelationshipsTerritoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV2RelationshipsTerritory;
export declare function AppPricePointV2RelationshipsTerritoryToJSON(value?: AppPricePointV2RelationshipsTerritory | null): any;
