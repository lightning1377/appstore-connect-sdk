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
import type { GameCenterLeaderboardAttributes } from "./GameCenterLeaderboardAttributes";
import type { GameCenterLeaderboardRelationships } from "./GameCenterLeaderboardRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface GameCenterLeaderboard
 */
export interface GameCenterLeaderboard {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboard
     */
    type: GameCenterLeaderboardTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboard
     */
    id: string;
    /**
     *
     * @type {GameCenterLeaderboardAttributes}
     * @memberof GameCenterLeaderboard
     */
    attributes?: GameCenterLeaderboardAttributes;
    /**
     *
     * @type {GameCenterLeaderboardRelationships}
     * @memberof GameCenterLeaderboard
     */
    relationships?: GameCenterLeaderboardRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof GameCenterLeaderboard
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardTypeEnum: {
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
};
export type GameCenterLeaderboardTypeEnum = (typeof GameCenterLeaderboardTypeEnum)[keyof typeof GameCenterLeaderboardTypeEnum];
/**
 * Check if a given object implements the GameCenterLeaderboard interface.
 */
export declare function instanceOfGameCenterLeaderboard(value: object): boolean;
export declare function GameCenterLeaderboardFromJSON(json: any): GameCenterLeaderboard;
export declare function GameCenterLeaderboardFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboard;
export declare function GameCenterLeaderboardToJSON(value?: GameCenterLeaderboard | null): any;
