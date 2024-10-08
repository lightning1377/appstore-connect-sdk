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
/**
 *
 * @export
 * @interface GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues
 */
export interface GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues {
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues
     */
    count?: number;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues
     */
    averagePlayerCount?: number;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues
     */
    p50PlayerCount?: number;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues
     */
    p95PlayerCount?: number;
}
/**
 * Check if a given object implements the GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues interface.
 */
export declare function instanceOfGameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues(value: object): boolean;
export declare function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSON(json: any): GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues;
export declare function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues;
export declare function GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValuesToJSON(value?: GameCenterMatchmakingSessionsV1MetricResponseDataInnerDataPointsValues | null): any;
