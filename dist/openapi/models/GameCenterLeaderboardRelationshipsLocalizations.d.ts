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
import type { GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData } from "./GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterLeaderboardRelationshipsLocalizations
 */
export interface GameCenterLeaderboardRelationshipsLocalizations {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof GameCenterLeaderboardRelationshipsLocalizations
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterLeaderboardRelationshipsLocalizations
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData>}
     * @memberof GameCenterLeaderboardRelationshipsLocalizations
     */
    data?: Array<GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationData>;
}
/**
 * Check if a given object implements the GameCenterLeaderboardRelationshipsLocalizations interface.
 */
export declare function instanceOfGameCenterLeaderboardRelationshipsLocalizations(value: object): boolean;
export declare function GameCenterLeaderboardRelationshipsLocalizationsFromJSON(json: any): GameCenterLeaderboardRelationshipsLocalizations;
export declare function GameCenterLeaderboardRelationshipsLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardRelationshipsLocalizations;
export declare function GameCenterLeaderboardRelationshipsLocalizationsToJSON(value?: GameCenterLeaderboardRelationshipsLocalizations | null): any;
