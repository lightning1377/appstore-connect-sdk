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
import type { GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints } from "./GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints";
import { GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsFromJSON, GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsFromJSONTyped, GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsToJSON } from "./GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints";
import type { GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions } from "./GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions";
import { GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsFromJSON, GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped, GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsToJSON } from "./GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions";

/**
 *
 * @export
 * @interface GameCenterMatchmakingAppRequestsV1MetricResponseDataInner
 */
export interface GameCenterMatchmakingAppRequestsV1MetricResponseDataInner {
    /**
     *
     * @type {GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInner
     */
    dataPoints?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints;
    /**
     *
     * @type {GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInner
     */
    dimensions?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions;
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInner
     */
    granularity?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerGranularityEnum;
}

/**
 * @export
 */
export const GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerGranularityEnum = {
    P1D: "P1D",
    Pt1H: "PT1H",
    Pt15M: "PT15M"
} as const;
export type GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerGranularityEnum = (typeof GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerGranularityEnum)[keyof typeof GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerGranularityEnum];

/**
 * Check if a given object implements the GameCenterMatchmakingAppRequestsV1MetricResponseDataInner interface.
 */
export function instanceOfGameCenterMatchmakingAppRequestsV1MetricResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerFromJSON(json: any): GameCenterMatchmakingAppRequestsV1MetricResponseDataInner {
    return GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerFromJSONTyped(json, false);
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingAppRequestsV1MetricResponseDataInner {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        dataPoints: !exists(json, "dataPoints") ? undefined : GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsFromJSON(json["dataPoints"]),
        dimensions: !exists(json, "dimensions") ? undefined : GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsFromJSON(json["dimensions"]),
        granularity: !exists(json, "granularity") ? undefined : json["granularity"]
    };
}

export function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerToJSON(value?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        dataPoints: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsToJSON(value.dataPoints),
        dimensions: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsToJSON(value.dimensions),
        granularity: value.granularity
    };
}
