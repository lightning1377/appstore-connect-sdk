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
import type { GameCenterMatchmakingRuleSetUpdateRequestDataAttributes } from "./GameCenterMatchmakingRuleSetUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface GameCenterMatchmakingTeamUpdateRequestData
 */
export interface GameCenterMatchmakingTeamUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingTeamUpdateRequestData
     */
    type: GameCenterMatchmakingTeamUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingTeamUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {GameCenterMatchmakingRuleSetUpdateRequestDataAttributes}
     * @memberof GameCenterMatchmakingTeamUpdateRequestData
     */
    attributes?: GameCenterMatchmakingRuleSetUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const GameCenterMatchmakingTeamUpdateRequestDataTypeEnum: {
    readonly GameCenterMatchmakingTeams: "gameCenterMatchmakingTeams";
};
export type GameCenterMatchmakingTeamUpdateRequestDataTypeEnum = (typeof GameCenterMatchmakingTeamUpdateRequestDataTypeEnum)[keyof typeof GameCenterMatchmakingTeamUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the GameCenterMatchmakingTeamUpdateRequestData interface.
 */
export declare function instanceOfGameCenterMatchmakingTeamUpdateRequestData(value: object): boolean;
export declare function GameCenterMatchmakingTeamUpdateRequestDataFromJSON(json: any): GameCenterMatchmakingTeamUpdateRequestData;
export declare function GameCenterMatchmakingTeamUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeamUpdateRequestData;
export declare function GameCenterMatchmakingTeamUpdateRequestDataToJSON(value?: GameCenterMatchmakingTeamUpdateRequestData | null): any;
