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
import type { GameCenterMatchmakingQueueRequestsV1MetricResponseDataInner } from "./GameCenterMatchmakingQueueRequestsV1MetricResponseDataInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterMatchmakingQueueRequestsV1MetricResponse
 */
export interface GameCenterMatchmakingQueueRequestsV1MetricResponse {
    /**
     *
     * @type {Array<GameCenterMatchmakingQueueRequestsV1MetricResponseDataInner>}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponse
     */
    data: Array<GameCenterMatchmakingQueueRequestsV1MetricResponseDataInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the GameCenterMatchmakingQueueRequestsV1MetricResponse interface.
 */
export declare function instanceOfGameCenterMatchmakingQueueRequestsV1MetricResponse(value: object): boolean;
export declare function GameCenterMatchmakingQueueRequestsV1MetricResponseFromJSON(json: any): GameCenterMatchmakingQueueRequestsV1MetricResponse;
export declare function GameCenterMatchmakingQueueRequestsV1MetricResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueRequestsV1MetricResponse;
export declare function GameCenterMatchmakingQueueRequestsV1MetricResponseToJSON(value?: GameCenterMatchmakingQueueRequestsV1MetricResponse | null): any;
