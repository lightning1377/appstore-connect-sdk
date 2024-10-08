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
import type { GameCenterMatchmakingRule } from "./GameCenterMatchmakingRule";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterMatchmakingRulesResponse
 */
export interface GameCenterMatchmakingRulesResponse {
    /**
     *
     * @type {Array<GameCenterMatchmakingRule>}
     * @memberof GameCenterMatchmakingRulesResponse
     */
    data: Array<GameCenterMatchmakingRule>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterMatchmakingRulesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingRulesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the GameCenterMatchmakingRulesResponse interface.
 */
export declare function instanceOfGameCenterMatchmakingRulesResponse(value: object): boolean;
export declare function GameCenterMatchmakingRulesResponseFromJSON(json: any): GameCenterMatchmakingRulesResponse;
export declare function GameCenterMatchmakingRulesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRulesResponse;
export declare function GameCenterMatchmakingRulesResponseToJSON(value?: GameCenterMatchmakingRulesResponse | null): any;
