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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner } from "./GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner";
/**
 *
 * @export
 * @interface GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet
 */
export interface GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner}
     * @memberof GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet
     */
    data?: GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner;
}
/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet interface.
 */
export declare function instanceOfGameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet(value: object): boolean;
export declare function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetFromJSON(json: any): GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet;
export declare function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet;
export declare function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetToJSON(value?: GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet | null): any;
