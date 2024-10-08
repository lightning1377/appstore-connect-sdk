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
import type { GameCenterLeaderboardLocalizationAttributes } from "./GameCenterLeaderboardLocalizationAttributes";
import type { GameCenterLeaderboardLocalizationRelationships } from "./GameCenterLeaderboardLocalizationRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface GameCenterLeaderboardLocalization
 */
export interface GameCenterLeaderboardLocalization {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardLocalization
     */
    type: GameCenterLeaderboardLocalizationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardLocalization
     */
    id: string;
    /**
     *
     * @type {GameCenterLeaderboardLocalizationAttributes}
     * @memberof GameCenterLeaderboardLocalization
     */
    attributes?: GameCenterLeaderboardLocalizationAttributes;
    /**
     *
     * @type {GameCenterLeaderboardLocalizationRelationships}
     * @memberof GameCenterLeaderboardLocalization
     */
    relationships?: GameCenterLeaderboardLocalizationRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof GameCenterLeaderboardLocalization
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardLocalizationTypeEnum: {
    readonly GameCenterLeaderboardLocalizations: "gameCenterLeaderboardLocalizations";
};
export type GameCenterLeaderboardLocalizationTypeEnum = (typeof GameCenterLeaderboardLocalizationTypeEnum)[keyof typeof GameCenterLeaderboardLocalizationTypeEnum];
/**
 * Check if a given object implements the GameCenterLeaderboardLocalization interface.
 */
export declare function instanceOfGameCenterLeaderboardLocalization(value: object): boolean;
export declare function GameCenterLeaderboardLocalizationFromJSON(json: any): GameCenterLeaderboardLocalization;
export declare function GameCenterLeaderboardLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalization;
export declare function GameCenterLeaderboardLocalizationToJSON(value?: GameCenterLeaderboardLocalization | null): any;
