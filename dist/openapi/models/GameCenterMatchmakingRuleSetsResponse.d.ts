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
import type { GameCenterMatchmakingRuleSet } from "./GameCenterMatchmakingRuleSet";
import type { GameCenterMatchmakingRuleSetsResponseIncludedInner } from "./GameCenterMatchmakingRuleSetsResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterMatchmakingRuleSetsResponse
 */
export interface GameCenterMatchmakingRuleSetsResponse {
    /**
     *
     * @type {Array<GameCenterMatchmakingRuleSet>}
     * @memberof GameCenterMatchmakingRuleSetsResponse
     */
    data: Array<GameCenterMatchmakingRuleSet>;
    /**
     *
     * @type {Array<GameCenterMatchmakingRuleSetsResponseIncludedInner>}
     * @memberof GameCenterMatchmakingRuleSetsResponse
     */
    included?: Array<GameCenterMatchmakingRuleSetsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterMatchmakingRuleSetsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingRuleSetsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetsResponse interface.
 */
export declare function instanceOfGameCenterMatchmakingRuleSetsResponse(value: object): boolean;
export declare function GameCenterMatchmakingRuleSetsResponseFromJSON(json: any): GameCenterMatchmakingRuleSetsResponse;
export declare function GameCenterMatchmakingRuleSetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetsResponse;
export declare function GameCenterMatchmakingRuleSetsResponseToJSON(value?: GameCenterMatchmakingRuleSetsResponse | null): any;
