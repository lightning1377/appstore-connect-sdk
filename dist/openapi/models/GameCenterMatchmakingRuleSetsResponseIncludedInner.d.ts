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
import { GameCenterMatchmakingQueue } from "./GameCenterMatchmakingQueue";
import { GameCenterMatchmakingRule } from "./GameCenterMatchmakingRule";
import { GameCenterMatchmakingTeam } from "./GameCenterMatchmakingTeam";
/**
 * @type GameCenterMatchmakingRuleSetsResponseIncludedInner
 *
 * @export
 */
export type GameCenterMatchmakingRuleSetsResponseIncludedInner = GameCenterMatchmakingQueue | GameCenterMatchmakingRule | GameCenterMatchmakingTeam;
export declare function GameCenterMatchmakingRuleSetsResponseIncludedInnerFromJSON(json: any): GameCenterMatchmakingRuleSetsResponseIncludedInner;
export declare function GameCenterMatchmakingRuleSetsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetsResponseIncludedInner;
export declare function GameCenterMatchmakingRuleSetsResponseIncludedInnerToJSON(value?: GameCenterMatchmakingRuleSetsResponseIncludedInner | null): any;
