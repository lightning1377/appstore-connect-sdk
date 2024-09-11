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
import type { GameCenterAppVersionRelationshipsCompatibilityVersionsDataInner } from "./GameCenterAppVersionRelationshipsCompatibilityVersionsDataInner";
/**
 *
 * @export
 * @interface GameCenterAppVersionCompatibilityVersionsLinkagesRequest
 */
export interface GameCenterAppVersionCompatibilityVersionsLinkagesRequest {
    /**
     *
     * @type {Array<GameCenterAppVersionRelationshipsCompatibilityVersionsDataInner>}
     * @memberof GameCenterAppVersionCompatibilityVersionsLinkagesRequest
     */
    data: Array<GameCenterAppVersionRelationshipsCompatibilityVersionsDataInner>;
}
/**
 * Check if a given object implements the GameCenterAppVersionCompatibilityVersionsLinkagesRequest interface.
 */
export declare function instanceOfGameCenterAppVersionCompatibilityVersionsLinkagesRequest(value: object): boolean;
export declare function GameCenterAppVersionCompatibilityVersionsLinkagesRequestFromJSON(json: any): GameCenterAppVersionCompatibilityVersionsLinkagesRequest;
export declare function GameCenterAppVersionCompatibilityVersionsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAppVersionCompatibilityVersionsLinkagesRequest;
export declare function GameCenterAppVersionCompatibilityVersionsLinkagesRequestToJSON(value?: GameCenterAppVersionCompatibilityVersionsLinkagesRequest | null): any;
