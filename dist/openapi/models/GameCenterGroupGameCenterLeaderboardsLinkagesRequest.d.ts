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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner } from "./GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner";
/**
 *
 * @export
 * @interface GameCenterGroupGameCenterLeaderboardsLinkagesRequest
 */
export interface GameCenterGroupGameCenterLeaderboardsLinkagesRequest {
    /**
     *
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>}
     * @memberof GameCenterGroupGameCenterLeaderboardsLinkagesRequest
     */
    data: Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>;
}
/**
 * Check if a given object implements the GameCenterGroupGameCenterLeaderboardsLinkagesRequest interface.
 */
export declare function instanceOfGameCenterGroupGameCenterLeaderboardsLinkagesRequest(value: object): boolean;
export declare function GameCenterGroupGameCenterLeaderboardsLinkagesRequestFromJSON(json: any): GameCenterGroupGameCenterLeaderboardsLinkagesRequest;
export declare function GameCenterGroupGameCenterLeaderboardsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupGameCenterLeaderboardsLinkagesRequest;
export declare function GameCenterGroupGameCenterLeaderboardsLinkagesRequestToJSON(value?: GameCenterGroupGameCenterLeaderboardsLinkagesRequest | null): any;
