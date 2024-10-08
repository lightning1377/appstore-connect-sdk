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
import type { GameCenterLeaderboardSetReleaseCreateRequestDataRelationships } from "./GameCenterLeaderboardSetReleaseCreateRequestDataRelationships";
/**
 *
 * @export
 * @interface GameCenterLeaderboardSetReleaseCreateRequestData
 */
export interface GameCenterLeaderboardSetReleaseCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardSetReleaseCreateRequestData
     */
    type: GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum;
    /**
     *
     * @type {GameCenterLeaderboardSetReleaseCreateRequestDataRelationships}
     * @memberof GameCenterLeaderboardSetReleaseCreateRequestData
     */
    relationships: GameCenterLeaderboardSetReleaseCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum: {
    readonly GameCenterLeaderboardSetReleases: "gameCenterLeaderboardSetReleases";
};
export type GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum = (typeof GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum)[keyof typeof GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the GameCenterLeaderboardSetReleaseCreateRequestData interface.
 */
export declare function instanceOfGameCenterLeaderboardSetReleaseCreateRequestData(value: object): boolean;
export declare function GameCenterLeaderboardSetReleaseCreateRequestDataFromJSON(json: any): GameCenterLeaderboardSetReleaseCreateRequestData;
export declare function GameCenterLeaderboardSetReleaseCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetReleaseCreateRequestData;
export declare function GameCenterLeaderboardSetReleaseCreateRequestDataToJSON(value?: GameCenterLeaderboardSetReleaseCreateRequestData | null): any;
