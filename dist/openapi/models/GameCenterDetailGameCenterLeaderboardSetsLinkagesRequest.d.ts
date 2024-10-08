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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner } from "./GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner";
/**
 *
 * @export
 * @interface GameCenterDetailGameCenterLeaderboardSetsLinkagesRequest
 */
export interface GameCenterDetailGameCenterLeaderboardSetsLinkagesRequest {
    /**
     *
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>}
     * @memberof GameCenterDetailGameCenterLeaderboardSetsLinkagesRequest
     */
    data: Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>;
}
/**
 * Check if a given object implements the GameCenterDetailGameCenterLeaderboardSetsLinkagesRequest interface.
 */
export declare function instanceOfGameCenterDetailGameCenterLeaderboardSetsLinkagesRequest(value: object): boolean;
export declare function GameCenterDetailGameCenterLeaderboardSetsLinkagesRequestFromJSON(json: any): GameCenterDetailGameCenterLeaderboardSetsLinkagesRequest;
export declare function GameCenterDetailGameCenterLeaderboardSetsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailGameCenterLeaderboardSetsLinkagesRequest;
export declare function GameCenterDetailGameCenterLeaderboardSetsLinkagesRequestToJSON(value?: GameCenterDetailGameCenterLeaderboardSetsLinkagesRequest | null): any;
