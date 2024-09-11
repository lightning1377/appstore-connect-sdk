"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfGameCenterMatchmakingQueueSizesV1MetricResponse = instanceOfGameCenterMatchmakingQueueSizesV1MetricResponse;
exports.GameCenterMatchmakingQueueSizesV1MetricResponseFromJSON = GameCenterMatchmakingQueueSizesV1MetricResponseFromJSON;
exports.GameCenterMatchmakingQueueSizesV1MetricResponseFromJSONTyped = GameCenterMatchmakingQueueSizesV1MetricResponseFromJSONTyped;
exports.GameCenterMatchmakingQueueSizesV1MetricResponseToJSON = GameCenterMatchmakingQueueSizesV1MetricResponseToJSON;
const runtime_1 = require("../runtime");
const GameCenterMatchmakingQueueSizesV1MetricResponseDataInner_1 = require("./GameCenterMatchmakingQueueSizesV1MetricResponseDataInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the GameCenterMatchmakingQueueSizesV1MetricResponse interface.
 */
function instanceOfGameCenterMatchmakingQueueSizesV1MetricResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function GameCenterMatchmakingQueueSizesV1MetricResponseFromJSON(json) {
    return GameCenterMatchmakingQueueSizesV1MetricResponseFromJSONTyped(json, false);
}
function GameCenterMatchmakingQueueSizesV1MetricResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(GameCenterMatchmakingQueueSizesV1MetricResponseDataInner_1.GameCenterMatchmakingQueueSizesV1MetricResponseDataInnerFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function GameCenterMatchmakingQueueSizesV1MetricResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(GameCenterMatchmakingQueueSizesV1MetricResponseDataInner_1.GameCenterMatchmakingQueueSizesV1MetricResponseDataInnerToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
