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
import type { GameCenterMatchmakingQueue } from "./GameCenterMatchmakingQueue";
import type { GameCenterMatchmakingRuleSet } from "./GameCenterMatchmakingRuleSet";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterMatchmakingQueuesResponse
 */
export interface GameCenterMatchmakingQueuesResponse {
    /**
     *
     * @type {Array<GameCenterMatchmakingQueue>}
     * @memberof GameCenterMatchmakingQueuesResponse
     */
    data: Array<GameCenterMatchmakingQueue>;
    /**
     *
     * @type {Array<GameCenterMatchmakingRuleSet>}
     * @memberof GameCenterMatchmakingQueuesResponse
     */
    included?: Array<GameCenterMatchmakingRuleSet>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterMatchmakingQueuesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingQueuesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the GameCenterMatchmakingQueuesResponse interface.
 */
export declare function instanceOfGameCenterMatchmakingQueuesResponse(value: object): boolean;
export declare function GameCenterMatchmakingQueuesResponseFromJSON(json: any): GameCenterMatchmakingQueuesResponse;
export declare function GameCenterMatchmakingQueuesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueuesResponse;
export declare function GameCenterMatchmakingQueuesResponseToJSON(value?: GameCenterMatchmakingQueuesResponse | null): any;
