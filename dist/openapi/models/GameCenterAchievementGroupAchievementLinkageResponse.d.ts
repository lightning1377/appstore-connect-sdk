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
import type { DocumentLinks } from "./DocumentLinks";
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData";
/**
 *
 * @export
 * @interface GameCenterAchievementGroupAchievementLinkageResponse
 */
export interface GameCenterAchievementGroupAchievementLinkageResponse {
    /**
     *
     * @type {GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData}
     * @memberof GameCenterAchievementGroupAchievementLinkageResponse
     */
    data: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData;
    /**
     *
     * @type {DocumentLinks}
     * @memberof GameCenterAchievementGroupAchievementLinkageResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the GameCenterAchievementGroupAchievementLinkageResponse interface.
 */
export declare function instanceOfGameCenterAchievementGroupAchievementLinkageResponse(value: object): boolean;
export declare function GameCenterAchievementGroupAchievementLinkageResponseFromJSON(json: any): GameCenterAchievementGroupAchievementLinkageResponse;
export declare function GameCenterAchievementGroupAchievementLinkageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementGroupAchievementLinkageResponse;
export declare function GameCenterAchievementGroupAchievementLinkageResponseToJSON(value?: GameCenterAchievementGroupAchievementLinkageResponse | null): any;
