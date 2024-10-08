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
import type { GameCenterMatchmakingRuleAttributes } from "./GameCenterMatchmakingRuleAttributes";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface GameCenterMatchmakingRule
 */
export interface GameCenterMatchmakingRule {
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingRule
     */
    type: GameCenterMatchmakingRuleTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingRule
     */
    id: string;
    /**
     *
     * @type {GameCenterMatchmakingRuleAttributes}
     * @memberof GameCenterMatchmakingRule
     */
    attributes?: GameCenterMatchmakingRuleAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof GameCenterMatchmakingRule
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const GameCenterMatchmakingRuleTypeEnum: {
    readonly GameCenterMatchmakingRules: "gameCenterMatchmakingRules";
};
export type GameCenterMatchmakingRuleTypeEnum = (typeof GameCenterMatchmakingRuleTypeEnum)[keyof typeof GameCenterMatchmakingRuleTypeEnum];
/**
 * Check if a given object implements the GameCenterMatchmakingRule interface.
 */
export declare function instanceOfGameCenterMatchmakingRule(value: object): boolean;
export declare function GameCenterMatchmakingRuleFromJSON(json: any): GameCenterMatchmakingRule;
export declare function GameCenterMatchmakingRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRule;
export declare function GameCenterMatchmakingRuleToJSON(value?: GameCenterMatchmakingRule | null): any;
