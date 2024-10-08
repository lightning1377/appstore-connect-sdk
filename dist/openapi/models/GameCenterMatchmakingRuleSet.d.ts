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
import type { GameCenterMatchmakingRuleSetAttributes } from "./GameCenterMatchmakingRuleSetAttributes";
import type { GameCenterMatchmakingRuleSetRelationships } from "./GameCenterMatchmakingRuleSetRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface GameCenterMatchmakingRuleSet
 */
export interface GameCenterMatchmakingRuleSet {
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSet
     */
    type: GameCenterMatchmakingRuleSetTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSet
     */
    id: string;
    /**
     *
     * @type {GameCenterMatchmakingRuleSetAttributes}
     * @memberof GameCenterMatchmakingRuleSet
     */
    attributes?: GameCenterMatchmakingRuleSetAttributes;
    /**
     *
     * @type {GameCenterMatchmakingRuleSetRelationships}
     * @memberof GameCenterMatchmakingRuleSet
     */
    relationships?: GameCenterMatchmakingRuleSetRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof GameCenterMatchmakingRuleSet
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const GameCenterMatchmakingRuleSetTypeEnum: {
    readonly GameCenterMatchmakingRuleSets: "gameCenterMatchmakingRuleSets";
};
export type GameCenterMatchmakingRuleSetTypeEnum = (typeof GameCenterMatchmakingRuleSetTypeEnum)[keyof typeof GameCenterMatchmakingRuleSetTypeEnum];
/**
 * Check if a given object implements the GameCenterMatchmakingRuleSet interface.
 */
export declare function instanceOfGameCenterMatchmakingRuleSet(value: object): boolean;
export declare function GameCenterMatchmakingRuleSetFromJSON(json: any): GameCenterMatchmakingRuleSet;
export declare function GameCenterMatchmakingRuleSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSet;
export declare function GameCenterMatchmakingRuleSetToJSON(value?: GameCenterMatchmakingRuleSet | null): any;
