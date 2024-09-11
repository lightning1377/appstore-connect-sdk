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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData";
/**
 *
 * @export
 * @interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage
 */
export interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage
     */
    data?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData;
}
/**
 * Check if a given object implements the GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage interface.
 */
export declare function instanceOfGameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage(value: object): boolean;
export declare function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageFromJSON(json: any): GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage;
export declare function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage;
export declare function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageToJSON(value?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImage | null): any;
