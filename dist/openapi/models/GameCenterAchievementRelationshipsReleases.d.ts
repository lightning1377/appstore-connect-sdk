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
import type { GameCenterAchievementRelationshipsReleasesDataInner } from "./GameCenterAchievementRelationshipsReleasesDataInner";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterAchievementRelationshipsReleases
 */
export interface GameCenterAchievementRelationshipsReleases {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof GameCenterAchievementRelationshipsReleases
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterAchievementRelationshipsReleases
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<GameCenterAchievementRelationshipsReleasesDataInner>}
     * @memberof GameCenterAchievementRelationshipsReleases
     */
    data?: Array<GameCenterAchievementRelationshipsReleasesDataInner>;
}
/**
 * Check if a given object implements the GameCenterAchievementRelationshipsReleases interface.
 */
export declare function instanceOfGameCenterAchievementRelationshipsReleases(value: object): boolean;
export declare function GameCenterAchievementRelationshipsReleasesFromJSON(json: any): GameCenterAchievementRelationshipsReleases;
export declare function GameCenterAchievementRelationshipsReleasesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementRelationshipsReleases;
export declare function GameCenterAchievementRelationshipsReleasesToJSON(value?: GameCenterAchievementRelationshipsReleases | null): any;
