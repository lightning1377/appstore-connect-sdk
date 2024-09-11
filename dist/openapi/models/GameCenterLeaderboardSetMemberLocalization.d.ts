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
import type { GameCenterLeaderboardSetMemberLocalizationAttributes } from "./GameCenterLeaderboardSetMemberLocalizationAttributes";
import type { GameCenterLeaderboardSetMemberLocalizationRelationships } from "./GameCenterLeaderboardSetMemberLocalizationRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface GameCenterLeaderboardSetMemberLocalization
 */
export interface GameCenterLeaderboardSetMemberLocalization {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardSetMemberLocalization
     */
    type: GameCenterLeaderboardSetMemberLocalizationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardSetMemberLocalization
     */
    id: string;
    /**
     *
     * @type {GameCenterLeaderboardSetMemberLocalizationAttributes}
     * @memberof GameCenterLeaderboardSetMemberLocalization
     */
    attributes?: GameCenterLeaderboardSetMemberLocalizationAttributes;
    /**
     *
     * @type {GameCenterLeaderboardSetMemberLocalizationRelationships}
     * @memberof GameCenterLeaderboardSetMemberLocalization
     */
    relationships?: GameCenterLeaderboardSetMemberLocalizationRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof GameCenterLeaderboardSetMemberLocalization
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardSetMemberLocalizationTypeEnum: {
    readonly GameCenterLeaderboardSetMemberLocalizations: "gameCenterLeaderboardSetMemberLocalizations";
};
export type GameCenterLeaderboardSetMemberLocalizationTypeEnum = (typeof GameCenterLeaderboardSetMemberLocalizationTypeEnum)[keyof typeof GameCenterLeaderboardSetMemberLocalizationTypeEnum];
/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalization interface.
 */
export declare function instanceOfGameCenterLeaderboardSetMemberLocalization(value: object): boolean;
export declare function GameCenterLeaderboardSetMemberLocalizationFromJSON(json: any): GameCenterLeaderboardSetMemberLocalization;
export declare function GameCenterLeaderboardSetMemberLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalization;
export declare function GameCenterLeaderboardSetMemberLocalizationToJSON(value?: GameCenterLeaderboardSetMemberLocalization | null): any;
