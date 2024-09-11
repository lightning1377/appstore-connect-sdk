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
import type { GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData } from "./GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData";
/**
 *
 * @export
 * @interface GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImage
 */
export interface GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImage {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImage
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData}
     * @memberof GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImage
     */
    data?: GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageData;
}
/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImage interface.
 */
export declare function instanceOfGameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImage(value: object): boolean;
export declare function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageFromJSON(json: any): GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImage;
export declare function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImage;
export declare function GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImageToJSON(value?: GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetImage | null): any;
