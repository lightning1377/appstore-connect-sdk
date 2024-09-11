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
import type { GameCenterAchievementCreateRequestData } from "./GameCenterAchievementCreateRequestData";
/**
 *
 * @export
 * @interface GameCenterAchievementCreateRequest
 */
export interface GameCenterAchievementCreateRequest {
    /**
     *
     * @type {GameCenterAchievementCreateRequestData}
     * @memberof GameCenterAchievementCreateRequest
     */
    data: GameCenterAchievementCreateRequestData;
}
/**
 * Check if a given object implements the GameCenterAchievementCreateRequest interface.
 */
export declare function instanceOfGameCenterAchievementCreateRequest(value: object): boolean;
export declare function GameCenterAchievementCreateRequestFromJSON(json: any): GameCenterAchievementCreateRequest;
export declare function GameCenterAchievementCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementCreateRequest;
export declare function GameCenterAchievementCreateRequestToJSON(value?: GameCenterAchievementCreateRequest | null): any;
