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
import type { GameCenterAchievementImageUpdateRequestData } from "./GameCenterAchievementImageUpdateRequestData";
/**
 *
 * @export
 * @interface GameCenterAchievementImageUpdateRequest
 */
export interface GameCenterAchievementImageUpdateRequest {
    /**
     *
     * @type {GameCenterAchievementImageUpdateRequestData}
     * @memberof GameCenterAchievementImageUpdateRequest
     */
    data: GameCenterAchievementImageUpdateRequestData;
}
/**
 * Check if a given object implements the GameCenterAchievementImageUpdateRequest interface.
 */
export declare function instanceOfGameCenterAchievementImageUpdateRequest(value: object): boolean;
export declare function GameCenterAchievementImageUpdateRequestFromJSON(json: any): GameCenterAchievementImageUpdateRequest;
export declare function GameCenterAchievementImageUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementImageUpdateRequest;
export declare function GameCenterAchievementImageUpdateRequestToJSON(value?: GameCenterAchievementImageUpdateRequest | null): any;
