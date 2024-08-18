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
/**
 *
 * @export
 * @interface GameCenterMatchmakingRuleSetUpdateRequestDataAttributes
 */
export interface GameCenterMatchmakingRuleSetUpdateRequestDataAttributes {
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingRuleSetUpdateRequestDataAttributes
     */
    minPlayers?: number;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingRuleSetUpdateRequestDataAttributes
     */
    maxPlayers?: number;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetUpdateRequestDataAttributes interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingRuleSetUpdateRequestDataAttributesFromJSON(json: any): GameCenterMatchmakingRuleSetUpdateRequestDataAttributes {
    return GameCenterMatchmakingRuleSetUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetUpdateRequestDataAttributes {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        minPlayers: !exists(json, "minPlayers") ? undefined : json["minPlayers"],
        maxPlayers: !exists(json, "maxPlayers") ? undefined : json["maxPlayers"]
    };
}

export function GameCenterMatchmakingRuleSetUpdateRequestDataAttributesToJSON(value?: GameCenterMatchmakingRuleSetUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        minPlayers: value.minPlayers,
        maxPlayers: value.maxPlayers
    };
}
