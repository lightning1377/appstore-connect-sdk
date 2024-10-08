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
import type { GameCenterLeaderboardCreateRequestData } from "./GameCenterLeaderboardCreateRequestData";
/**
 *
 * @export
 * @interface GameCenterLeaderboardCreateRequest
 */
export interface GameCenterLeaderboardCreateRequest {
    /**
     *
     * @type {GameCenterLeaderboardCreateRequestData}
     * @memberof GameCenterLeaderboardCreateRequest
     */
    data: GameCenterLeaderboardCreateRequestData;
}
/**
 * Check if a given object implements the GameCenterLeaderboardCreateRequest interface.
 */
export declare function instanceOfGameCenterLeaderboardCreateRequest(value: object): boolean;
export declare function GameCenterLeaderboardCreateRequestFromJSON(json: any): GameCenterLeaderboardCreateRequest;
export declare function GameCenterLeaderboardCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardCreateRequest;
export declare function GameCenterLeaderboardCreateRequestToJSON(value?: GameCenterLeaderboardCreateRequest | null): any;
