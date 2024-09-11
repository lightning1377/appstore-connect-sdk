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
import type { GameCenterDetailUpdateRequestData } from "./GameCenterDetailUpdateRequestData";
/**
 *
 * @export
 * @interface GameCenterDetailUpdateRequest
 */
export interface GameCenterDetailUpdateRequest {
    /**
     *
     * @type {GameCenterDetailUpdateRequestData}
     * @memberof GameCenterDetailUpdateRequest
     */
    data: GameCenterDetailUpdateRequestData;
}
/**
 * Check if a given object implements the GameCenterDetailUpdateRequest interface.
 */
export declare function instanceOfGameCenterDetailUpdateRequest(value: object): boolean;
export declare function GameCenterDetailUpdateRequestFromJSON(json: any): GameCenterDetailUpdateRequest;
export declare function GameCenterDetailUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailUpdateRequest;
export declare function GameCenterDetailUpdateRequestToJSON(value?: GameCenterDetailUpdateRequest | null): any;
