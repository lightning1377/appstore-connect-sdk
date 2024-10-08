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
import type { GameCenterGroupCreateRequestData } from "./GameCenterGroupCreateRequestData";
/**
 *
 * @export
 * @interface GameCenterGroupCreateRequest
 */
export interface GameCenterGroupCreateRequest {
    /**
     *
     * @type {GameCenterGroupCreateRequestData}
     * @memberof GameCenterGroupCreateRequest
     */
    data: GameCenterGroupCreateRequestData;
}
/**
 * Check if a given object implements the GameCenterGroupCreateRequest interface.
 */
export declare function instanceOfGameCenterGroupCreateRequest(value: object): boolean;
export declare function GameCenterGroupCreateRequestFromJSON(json: any): GameCenterGroupCreateRequest;
export declare function GameCenterGroupCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupCreateRequest;
export declare function GameCenterGroupCreateRequestToJSON(value?: GameCenterGroupCreateRequest | null): any;
