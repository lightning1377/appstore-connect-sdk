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
import type { GameCenterMatchmakingTeamAssignment } from "./GameCenterMatchmakingTeamAssignment";
/**
 *
 * @export
 * @interface GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner
 */
export interface GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner {
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner
     */
    requestName?: string;
    /**
     *
     * @type {Array<GameCenterMatchmakingTeamAssignment>}
     * @memberof GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner
     */
    teamAssignments?: Array<GameCenterMatchmakingTeamAssignment>;
}
/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner interface.
 */
export declare function instanceOfGameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner(value: object): boolean;
export declare function GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInnerFromJSON(json: any): GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner;
export declare function GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner;
export declare function GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInnerToJSON(value?: GameCenterMatchmakingRuleSetTestAttributesMatchmakingResultsInnerInner | null): any;
