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
import type { GameCenterMatchmakingRuleCreateRequestDataAttributes } from "./GameCenterMatchmakingRuleCreateRequestDataAttributes";
import { GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSON, GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSONTyped, GameCenterMatchmakingRuleCreateRequestDataAttributesToJSON } from "./GameCenterMatchmakingRuleCreateRequestDataAttributes";
import type { GameCenterMatchmakingRuleCreateRequestDataRelationships } from "./GameCenterMatchmakingRuleCreateRequestDataRelationships";
import { GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSON, GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSONTyped, GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSON } from "./GameCenterMatchmakingRuleCreateRequestDataRelationships";

/**
 *
 * @export
 * @interface GameCenterMatchmakingRuleCreateRequestData
 */
export interface GameCenterMatchmakingRuleCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingRuleCreateRequestData
     */
    type: GameCenterMatchmakingRuleCreateRequestDataTypeEnum;
    /**
     *
     * @type {GameCenterMatchmakingRuleCreateRequestDataAttributes}
     * @memberof GameCenterMatchmakingRuleCreateRequestData
     */
    attributes: GameCenterMatchmakingRuleCreateRequestDataAttributes;
    /**
     *
     * @type {GameCenterMatchmakingRuleCreateRequestDataRelationships}
     * @memberof GameCenterMatchmakingRuleCreateRequestData
     */
    relationships: GameCenterMatchmakingRuleCreateRequestDataRelationships;
}

/**
 * @export
 */
export const GameCenterMatchmakingRuleCreateRequestDataTypeEnum = {
    GameCenterMatchmakingRules: "gameCenterMatchmakingRules"
} as const;
export type GameCenterMatchmakingRuleCreateRequestDataTypeEnum = (typeof GameCenterMatchmakingRuleCreateRequestDataTypeEnum)[keyof typeof GameCenterMatchmakingRuleCreateRequestDataTypeEnum];

/**
 * Check if a given object implements the GameCenterMatchmakingRuleCreateRequestData interface.
 */
export function instanceOfGameCenterMatchmakingRuleCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleCreateRequestDataFromJSON(json: any): GameCenterMatchmakingRuleCreateRequestData {
    return GameCenterMatchmakingRuleCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleCreateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSON(json["attributes"]),
        relationships: GameCenterMatchmakingRuleCreateRequestDataRelationshipsFromJSON(json["relationships"])
    };
}

export function GameCenterMatchmakingRuleCreateRequestDataToJSON(value?: GameCenterMatchmakingRuleCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: GameCenterMatchmakingRuleCreateRequestDataAttributesToJSON(value.attributes),
        relationships: GameCenterMatchmakingRuleCreateRequestDataRelationshipsToJSON(value.relationships)
    };
}
