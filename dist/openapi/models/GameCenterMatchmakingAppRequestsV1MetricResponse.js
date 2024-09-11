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
exports.instanceOfGameCenterMatchmakingAppRequestsV1MetricResponse = instanceOfGameCenterMatchmakingAppRequestsV1MetricResponse;
exports.GameCenterMatchmakingAppRequestsV1MetricResponseFromJSON = GameCenterMatchmakingAppRequestsV1MetricResponseFromJSON;
exports.GameCenterMatchmakingAppRequestsV1MetricResponseFromJSONTyped = GameCenterMatchmakingAppRequestsV1MetricResponseFromJSONTyped;
exports.GameCenterMatchmakingAppRequestsV1MetricResponseToJSON = GameCenterMatchmakingAppRequestsV1MetricResponseToJSON;
const runtime_1 = require("../runtime");
const GameCenterMatchmakingAppRequestsV1MetricResponseDataInner_1 = require("./GameCenterMatchmakingAppRequestsV1MetricResponseDataInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the GameCenterMatchmakingAppRequestsV1MetricResponse interface.
 */
function instanceOfGameCenterMatchmakingAppRequestsV1MetricResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function GameCenterMatchmakingAppRequestsV1MetricResponseFromJSON(json) {
    return GameCenterMatchmakingAppRequestsV1MetricResponseFromJSONTyped(json, false);
}
function GameCenterMatchmakingAppRequestsV1MetricResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(GameCenterMatchmakingAppRequestsV1MetricResponseDataInner_1.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function GameCenterMatchmakingAppRequestsV1MetricResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(GameCenterMatchmakingAppRequestsV1MetricResponseDataInner_1.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
