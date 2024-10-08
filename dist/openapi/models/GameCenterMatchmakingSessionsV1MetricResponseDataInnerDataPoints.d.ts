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
import type { GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues } from "./GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues";
/**
 *
 * @export
 * @interface GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
 */
export interface GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints {
    /**
     *
     * @type {Date}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
     */
    start?: Date;
    /**
     *
     * @type {Date}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
     */
    end?: Date;
    /**
     *
     * @type {GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints
     */
    values?: GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues;
}
/**
 * Check if a given object implements the GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints interface.
 */
export declare function instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints(value: object): boolean;
export declare function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSON(json: any): GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints;
export declare function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints;
export declare function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsToJSON(value?: GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPoints | null): any;
