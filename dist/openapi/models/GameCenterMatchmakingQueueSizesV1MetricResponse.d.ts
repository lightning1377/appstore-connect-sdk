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
import type { GameCenterMatchmakingQueueSizesV1MetricResponseDataInner } from "./GameCenterMatchmakingQueueSizesV1MetricResponseDataInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterMatchmakingQueueSizesV1MetricResponse
 */
export interface GameCenterMatchmakingQueueSizesV1MetricResponse {
    /**
     *
     * @type {Array<GameCenterMatchmakingQueueSizesV1MetricResponseDataInner>}
     * @memberof GameCenterMatchmakingQueueSizesV1MetricResponse
     */
    data: Array<GameCenterMatchmakingQueueSizesV1MetricResponseDataInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterMatchmakingQueueSizesV1MetricResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingQueueSizesV1MetricResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the GameCenterMatchmakingQueueSizesV1MetricResponse interface.
 */
export declare function instanceOfGameCenterMatchmakingQueueSizesV1MetricResponse(value: object): boolean;
export declare function GameCenterMatchmakingQueueSizesV1MetricResponseFromJSON(json: any): GameCenterMatchmakingQueueSizesV1MetricResponse;
export declare function GameCenterMatchmakingQueueSizesV1MetricResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueSizesV1MetricResponse;
export declare function GameCenterMatchmakingQueueSizesV1MetricResponseToJSON(value?: GameCenterMatchmakingQueueSizesV1MetricResponse | null): any;
