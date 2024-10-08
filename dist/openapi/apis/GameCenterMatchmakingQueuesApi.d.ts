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
import * as runtime from "../runtime";
import type { GameCenterMatchmakingQueueCreateRequest, GameCenterMatchmakingQueueRequestsV1MetricResponse, GameCenterMatchmakingQueueResponse, GameCenterMatchmakingQueueSizesV1MetricResponse, GameCenterMatchmakingQueueUpdateRequest, GameCenterMatchmakingQueuesResponse, GameCenterMatchmakingSessionsV1MetricResponse } from "../models";
export interface GameCenterMatchmakingQueuesCreateInstanceRequest {
    gameCenterMatchmakingQueueCreateRequest: GameCenterMatchmakingQueueCreateRequest;
}
export interface GameCenterMatchmakingQueuesDeleteInstanceRequest {
    id: string;
}
export interface GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsRequest {
    id: string;
    granularity: GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsGranularityEnum;
    limit?: number;
    sort?: Array<GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsSortEnum>;
}
export interface GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsRequest {
    id: string;
    granularity: GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGranularityEnum;
    limit?: number;
    groupBy?: Array<GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGroupByEnum>;
    filterResult?: GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsFilterResultEnum;
    filterGameCenterDetail?: string;
    sort?: Array<GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsSortEnum>;
}
export interface GameCenterMatchmakingQueuesGetCollectionRequest {
    fieldsGameCenterMatchmakingQueues?: Array<GameCenterMatchmakingQueuesGetCollectionFieldsGameCenterMatchmakingQueuesEnum>;
    limit?: number;
    include?: Array<GameCenterMatchmakingQueuesGetCollectionIncludeEnum>;
}
export interface GameCenterMatchmakingQueuesGetInstanceRequest {
    id: string;
    fieldsGameCenterMatchmakingQueues?: Array<GameCenterMatchmakingQueuesGetInstanceFieldsGameCenterMatchmakingQueuesEnum>;
    include?: Array<GameCenterMatchmakingQueuesGetInstanceIncludeEnum>;
}
export interface GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsRequest {
    id: string;
    granularity: GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsGranularityEnum;
    limit?: number;
    sort?: Array<GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsSortEnum>;
}
export interface GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsRequest {
    id: string;
    granularity: GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGranularityEnum;
    limit?: number;
    groupBy?: Array<GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGroupByEnum>;
    filterResult?: GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsFilterResultEnum;
    filterGameCenterDetail?: string;
    sort?: Array<GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsSortEnum>;
}
export interface GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsRequest {
    id: string;
    granularity: GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsGranularityEnum;
    limit?: number;
    sort?: Array<GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsSortEnum>;
}
export interface GameCenterMatchmakingQueuesUpdateInstanceRequest {
    id: string;
    gameCenterMatchmakingQueueUpdateRequest: GameCenterMatchmakingQueueUpdateRequest;
}
/**
 *
 */
export declare class GameCenterMatchmakingQueuesApi extends runtime.BaseAPI {
    /**
     */
    gameCenterMatchmakingQueuesCreateInstanceRaw(requestParameters: GameCenterMatchmakingQueuesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueResponse>>;
    /**
     */
    gameCenterMatchmakingQueuesCreateInstance(requestParameters: GameCenterMatchmakingQueuesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueResponse>;
    /**
     */
    gameCenterMatchmakingQueuesDeleteInstanceRaw(requestParameters: GameCenterMatchmakingQueuesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterMatchmakingQueuesDeleteInstance(requestParameters: GameCenterMatchmakingQueuesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsRaw(requestParameters: GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueSizesV1MetricResponse>>;
    /**
     */
    gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics(requestParameters: GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueSizesV1MetricResponse>;
    /**
     */
    gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsRaw(requestParameters: GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueRequestsV1MetricResponse>>;
    /**
     */
    gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics(requestParameters: GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueRequestsV1MetricResponse>;
    /**
     */
    gameCenterMatchmakingQueuesGetCollectionRaw(requestParameters: GameCenterMatchmakingQueuesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueuesResponse>>;
    /**
     */
    gameCenterMatchmakingQueuesGetCollection(requestParameters?: GameCenterMatchmakingQueuesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueuesResponse>;
    /**
     */
    gameCenterMatchmakingQueuesGetInstanceRaw(requestParameters: GameCenterMatchmakingQueuesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueResponse>>;
    /**
     */
    gameCenterMatchmakingQueuesGetInstance(requestParameters: GameCenterMatchmakingQueuesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueResponse>;
    /**
     */
    gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsRaw(requestParameters: GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueSizesV1MetricResponse>>;
    /**
     */
    gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics(requestParameters: GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueSizesV1MetricResponse>;
    /**
     */
    gameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsRaw(requestParameters: GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueRequestsV1MetricResponse>>;
    /**
     */
    gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics(requestParameters: GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueRequestsV1MetricResponse>;
    /**
     */
    gameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsRaw(requestParameters: GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingSessionsV1MetricResponse>>;
    /**
     */
    gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics(requestParameters: GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingSessionsV1MetricResponse>;
    /**
     */
    gameCenterMatchmakingQueuesUpdateInstanceRaw(requestParameters: GameCenterMatchmakingQueuesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueResponse>>;
    /**
     */
    gameCenterMatchmakingQueuesUpdateInstance(requestParameters: GameCenterMatchmakingQueuesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueResponse>;
}
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsGranularityEnum: {
    readonly P1D: "P1D";
    readonly Pt1H: "PT1H";
    readonly Pt15M: "PT15M";
};
export type GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsGranularityEnum = (typeof GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsGranularityEnum)[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsGranularityEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsSortEnum: {
    readonly AverageNumberOfRequests: "-averageNumberOfRequests";
    readonly Count: "-count";
    readonly P50NumberOfRequests: "-p50NumberOfRequests";
    readonly P95NumberOfRequests: "-p95NumberOfRequests";
};
export type GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsSortEnum = (typeof GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsSortEnum)[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsSortEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGranularityEnum: {
    readonly P1D: "P1D";
    readonly Pt1H: "PT1H";
    readonly Pt15M: "PT15M";
};
export type GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGranularityEnum = (typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGranularityEnum)[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGranularityEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGroupByEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly Result: "result";
};
export type GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGroupByEnum = (typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGroupByEnum)[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGroupByEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsFilterResultEnum: {
    readonly Matched: "MATCHED";
    readonly Canceled: "CANCELED";
    readonly Expired: "EXPIRED";
};
export type GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsFilterResultEnum = (typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsFilterResultEnum)[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsFilterResultEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsSortEnum: {
    readonly AverageSecondsInQueue: "-averageSecondsInQueue";
    readonly Count: "-count";
    readonly P50SecondsInQueue: "-p50SecondsInQueue";
    readonly P95SecondsInQueue: "-p95SecondsInQueue";
};
export type GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsSortEnum = (typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsSortEnum)[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsSortEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesGetCollectionFieldsGameCenterMatchmakingQueuesEnum: {
    readonly ClassicMatchmakingBundleIds: "classicMatchmakingBundleIds";
    readonly ExperimentRuleSet: "experimentRuleSet";
    readonly ReferenceName: "referenceName";
    readonly RuleSet: "ruleSet";
};
export type GameCenterMatchmakingQueuesGetCollectionFieldsGameCenterMatchmakingQueuesEnum = (typeof GameCenterMatchmakingQueuesGetCollectionFieldsGameCenterMatchmakingQueuesEnum)[keyof typeof GameCenterMatchmakingQueuesGetCollectionFieldsGameCenterMatchmakingQueuesEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesGetCollectionIncludeEnum: {
    readonly ExperimentRuleSet: "experimentRuleSet";
    readonly RuleSet: "ruleSet";
};
export type GameCenterMatchmakingQueuesGetCollectionIncludeEnum = (typeof GameCenterMatchmakingQueuesGetCollectionIncludeEnum)[keyof typeof GameCenterMatchmakingQueuesGetCollectionIncludeEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesGetInstanceFieldsGameCenterMatchmakingQueuesEnum: {
    readonly ClassicMatchmakingBundleIds: "classicMatchmakingBundleIds";
    readonly ExperimentRuleSet: "experimentRuleSet";
    readonly ReferenceName: "referenceName";
    readonly RuleSet: "ruleSet";
};
export type GameCenterMatchmakingQueuesGetInstanceFieldsGameCenterMatchmakingQueuesEnum = (typeof GameCenterMatchmakingQueuesGetInstanceFieldsGameCenterMatchmakingQueuesEnum)[keyof typeof GameCenterMatchmakingQueuesGetInstanceFieldsGameCenterMatchmakingQueuesEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesGetInstanceIncludeEnum: {
    readonly ExperimentRuleSet: "experimentRuleSet";
    readonly RuleSet: "ruleSet";
};
export type GameCenterMatchmakingQueuesGetInstanceIncludeEnum = (typeof GameCenterMatchmakingQueuesGetInstanceIncludeEnum)[keyof typeof GameCenterMatchmakingQueuesGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsGranularityEnum: {
    readonly P1D: "P1D";
    readonly Pt1H: "PT1H";
    readonly Pt15M: "PT15M";
};
export type GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsGranularityEnum = (typeof GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsGranularityEnum)[keyof typeof GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsGranularityEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsSortEnum: {
    readonly AverageNumberOfRequests: "-averageNumberOfRequests";
    readonly Count: "-count";
    readonly P50NumberOfRequests: "-p50NumberOfRequests";
    readonly P95NumberOfRequests: "-p95NumberOfRequests";
};
export type GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsSortEnum = (typeof GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsSortEnum)[keyof typeof GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsSortEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGranularityEnum: {
    readonly P1D: "P1D";
    readonly Pt1H: "PT1H";
    readonly Pt15M: "PT15M";
};
export type GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGranularityEnum = (typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGranularityEnum)[keyof typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGranularityEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGroupByEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly Result: "result";
};
export type GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGroupByEnum = (typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGroupByEnum)[keyof typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGroupByEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsFilterResultEnum: {
    readonly Matched: "MATCHED";
    readonly Canceled: "CANCELED";
    readonly Expired: "EXPIRED";
};
export type GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsFilterResultEnum = (typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsFilterResultEnum)[keyof typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsFilterResultEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsSortEnum: {
    readonly AverageSecondsInQueue: "-averageSecondsInQueue";
    readonly Count: "-count";
    readonly P50SecondsInQueue: "-p50SecondsInQueue";
    readonly P95SecondsInQueue: "-p95SecondsInQueue";
};
export type GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsSortEnum = (typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsSortEnum)[keyof typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsSortEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsGranularityEnum: {
    readonly P1D: "P1D";
    readonly Pt1H: "PT1H";
    readonly Pt15M: "PT15M";
};
export type GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsGranularityEnum = (typeof GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsGranularityEnum)[keyof typeof GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsGranularityEnum];
/**
 * @export
 */
export declare const GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsSortEnum: {
    readonly AveragePlayerCount: "-averagePlayerCount";
    readonly Count: "-count";
    readonly P50PlayerCount: "-p50PlayerCount";
    readonly P95PlayerCount: "-p95PlayerCount";
};
export type GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsSortEnum = (typeof GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsSortEnum)[keyof typeof GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsSortEnum];
