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
import type { GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues } from "./GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues";
/**
 *
 * @export
 * @interface GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints
 */
export interface GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints {
    /**
     *
     * @type {Date}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints
     */
    start?: Date;
    /**
     *
     * @type {Date}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints
     */
    end?: Date;
    /**
     *
     * @type {GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues}
     * @memberof GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints
     */
    values?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues;
}
/**
 * Check if a given object implements the GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints interface.
 */
export declare function instanceOfGameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints(value: object): boolean;
export declare function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsFromJSON(json: any): GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints;
export declare function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints;
export declare function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsToJSON(value?: GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints | null): any;
