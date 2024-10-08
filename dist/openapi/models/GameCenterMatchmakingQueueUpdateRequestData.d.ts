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
import type { GameCenterMatchmakingQueueUpdateRequestDataAttributes } from "./GameCenterMatchmakingQueueUpdateRequestDataAttributes";
import type { GameCenterMatchmakingQueueUpdateRequestDataRelationships } from "./GameCenterMatchmakingQueueUpdateRequestDataRelationships";
/**
 *
 * @export
 * @interface GameCenterMatchmakingQueueUpdateRequestData
 */
export interface GameCenterMatchmakingQueueUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    type: GameCenterMatchmakingQueueUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {GameCenterMatchmakingQueueUpdateRequestDataAttributes}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    attributes?: GameCenterMatchmakingQueueUpdateRequestDataAttributes;
    /**
     *
     * @type {GameCenterMatchmakingQueueUpdateRequestDataRelationships}
     * @memberof GameCenterMatchmakingQueueUpdateRequestData
     */
    relationships?: GameCenterMatchmakingQueueUpdateRequestDataRelationships;
}
/**
 * @export
 */
export declare const GameCenterMatchmakingQueueUpdateRequestDataTypeEnum: {
    readonly GameCenterMatchmakingQueues: "gameCenterMatchmakingQueues";
};
export type GameCenterMatchmakingQueueUpdateRequestDataTypeEnum = (typeof GameCenterMatchmakingQueueUpdateRequestDataTypeEnum)[keyof typeof GameCenterMatchmakingQueueUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the GameCenterMatchmakingQueueUpdateRequestData interface.
 */
export declare function instanceOfGameCenterMatchmakingQueueUpdateRequestData(value: object): boolean;
export declare function GameCenterMatchmakingQueueUpdateRequestDataFromJSON(json: any): GameCenterMatchmakingQueueUpdateRequestData;
export declare function GameCenterMatchmakingQueueUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueUpdateRequestData;
export declare function GameCenterMatchmakingQueueUpdateRequestDataToJSON(value?: GameCenterMatchmakingQueueUpdateRequestData | null): any;
