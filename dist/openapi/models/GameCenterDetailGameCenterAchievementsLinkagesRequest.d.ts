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
 * @interface GameCenterDetailGameCenterAchievementsLinkagesRequest
 */
export interface GameCenterDetailGameCenterAchievementsLinkagesRequest {
    /**
     *
     * @type {Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>}
     * @memberof GameCenterDetailGameCenterAchievementsLinkagesRequest
     */
    data: Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>;
}
/**
 * Check if a given object implements the GameCenterDetailGameCenterAchievementsLinkagesRequest interface.
 */
export declare function instanceOfGameCenterDetailGameCenterAchievementsLinkagesRequest(value: object): boolean;
export declare function GameCenterDetailGameCenterAchievementsLinkagesRequestFromJSON(json: any): GameCenterDetailGameCenterAchievementsLinkagesRequest;
export declare function GameCenterDetailGameCenterAchievementsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailGameCenterAchievementsLinkagesRequest;
export declare function GameCenterDetailGameCenterAchievementsLinkagesRequestToJSON(value?: GameCenterDetailGameCenterAchievementsLinkagesRequest | null): any;
