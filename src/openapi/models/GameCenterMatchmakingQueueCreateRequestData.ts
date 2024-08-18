/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
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

import { exists, mapValues } from "../runtime";
import type { GameCenterMatchmakingQueueCreateRequestDataAttributes } from "./GameCenterMatchmakingQueueCreateRequestDataAttributes";
import { GameCenterMatchmakingQueueCreateRequestDataAttributesFromJSON, GameCenterMatchmakingQueueCreateRequestDataAttributesFromJSONTyped, GameCenterMatchmakingQueueCreateRequestDataAttributesToJSON } from "./GameCenterMatchmakingQueueCreateRequestDataAttributes";
import type { GameCenterMatchmakingQueueCreateRequestDataRelationships } from "./GameCenterMatchmakingQueueCreateRequestDataRelationships";
import { GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSON, GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSONTyped, GameCenterMatchmakingQueueCreateRequestDataRelationshipsToJSON } from "./GameCenterMatchmakingQueueCreateRequestDataRelationships";

/**
 *
 * @export
 * @interface GameCenterMatchmakingQueueCreateRequestData
 */
export interface GameCenterMatchmakingQueueCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingQueueCreateRequestData
     */
    type: GameCenterMatchmakingQueueCreateRequestDataTypeEnum;
    /**
     *
     * @type {GameCenterMatchmakingQueueCreateRequestDataAttributes}
     * @memberof GameCenterMatchmakingQueueCreateRequestData
     */
    attributes: GameCenterMatchmakingQueueCreateRequestDataAttributes;
    /**
     *
     * @type {GameCenterMatchmakingQueueCreateRequestDataRelationships}
     * @memberof GameCenterMatchmakingQueueCreateRequestData
     */
    relationships: GameCenterMatchmakingQueueCreateRequestDataRelationships;
}

/**
 * @export
 */
export const GameCenterMatchmakingQueueCreateRequestDataTypeEnum = {
    GameCenterMatchmakingQueues: "gameCenterMatchmakingQueues"
} as const;
export type GameCenterMatchmakingQueueCreateRequestDataTypeEnum = (typeof GameCenterMatchmakingQueueCreateRequestDataTypeEnum)[keyof typeof GameCenterMatchmakingQueueCreateRequestDataTypeEnum];

/**
 * Check if a given object implements the GameCenterMatchmakingQueueCreateRequestData interface.
 */
export function instanceOfGameCenterMatchmakingQueueCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GameCenterMatchmakingQueueCreateRequestDataFromJSON(json: any): GameCenterMatchmakingQueueCreateRequestData {
    return GameCenterMatchmakingQueueCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueCreateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: GameCenterMatchmakingQueueCreateRequestDataAttributesFromJSON(json["attributes"]),
        relationships: GameCenterMatchmakingQueueCreateRequestDataRelationshipsFromJSON(json["relationships"])
    };
}

export function GameCenterMatchmakingQueueCreateRequestDataToJSON(value?: GameCenterMatchmakingQueueCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: GameCenterMatchmakingQueueCreateRequestDataAttributesToJSON(value.attributes),
        relationships: GameCenterMatchmakingQueueCreateRequestDataRelationshipsToJSON(value.relationships)
    };
}
