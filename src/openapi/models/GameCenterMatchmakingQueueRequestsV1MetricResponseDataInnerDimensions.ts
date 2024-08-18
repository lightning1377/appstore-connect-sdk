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
import type { AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters } from "./AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters";
import { AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON, AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSONTyped, AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON } from "./AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters";
import type { BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds } from "./BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds";
import { BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsFromJSON, BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsFromJSONTyped, BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsToJSON } from "./BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds";

/**
 *
 * @export
 * @interface GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions
 */
export interface GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions {
    /**
     *
     * @type {BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions
     */
    result?: BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds;
    /**
     *
     * @type {AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions
     */
    gameCenterDetail?: AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions interface.
 */
export function instanceOfGameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSON(json: any): GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions {
    return GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        result: !exists(json, "result") ? undefined : BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsFromJSON(json["result"]),
        gameCenterDetail: !exists(json, "gameCenterDetail") ? undefined : AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON(json["gameCenterDetail"])
    };
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsToJSON(value?: GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        result: BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsToJSON(value.result),
        gameCenterDetail: AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON(value.gameCenterDetail)
    };
}
