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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { GameCenterMatchmakingRuleSetRelationshipsRulesDataInner } from "./GameCenterMatchmakingRuleSetRelationshipsRulesDataInner";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterMatchmakingRuleSetRelationshipsRules
 */
export interface GameCenterMatchmakingRuleSetRelationshipsRules {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsRules
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsRules
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<GameCenterMatchmakingRuleSetRelationshipsRulesDataInner>}
     * @memberof GameCenterMatchmakingRuleSetRelationshipsRules
     */
    data?: Array<GameCenterMatchmakingRuleSetRelationshipsRulesDataInner>;
}
/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetRelationshipsRules interface.
 */
export declare function instanceOfGameCenterMatchmakingRuleSetRelationshipsRules(value: object): boolean;
export declare function GameCenterMatchmakingRuleSetRelationshipsRulesFromJSON(json: any): GameCenterMatchmakingRuleSetRelationshipsRules;
export declare function GameCenterMatchmakingRuleSetRelationshipsRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetRelationshipsRules;
export declare function GameCenterMatchmakingRuleSetRelationshipsRulesToJSON(value?: GameCenterMatchmakingRuleSetRelationshipsRules | null): any;
