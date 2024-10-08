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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData";
/**
 *
 * @export
 * @interface GameCenterGroupGameCenterAchievementsLinkagesRequest
 */
export interface GameCenterGroupGameCenterAchievementsLinkagesRequest {
    /**
     *
     * @type {Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>}
     * @memberof GameCenterGroupGameCenterAchievementsLinkagesRequest
     */
    data: Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>;
}
/**
 * Check if a given object implements the GameCenterGroupGameCenterAchievementsLinkagesRequest interface.
 */
export declare function instanceOfGameCenterGroupGameCenterAchievementsLinkagesRequest(value: object): boolean;
export declare function GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSON(json: any): GameCenterGroupGameCenterAchievementsLinkagesRequest;
export declare function GameCenterGroupGameCenterAchievementsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupGameCenterAchievementsLinkagesRequest;
export declare function GameCenterGroupGameCenterAchievementsLinkagesRequestToJSON(value?: GameCenterGroupGameCenterAchievementsLinkagesRequest | null): any;
