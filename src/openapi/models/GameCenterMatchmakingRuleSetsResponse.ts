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
import type { GameCenterMatchmakingRuleSet } from "./GameCenterMatchmakingRuleSet";
import { GameCenterMatchmakingRuleSetFromJSON, GameCenterMatchmakingRuleSetFromJSONTyped, GameCenterMatchmakingRuleSetToJSON } from "./GameCenterMatchmakingRuleSet";
import type { GameCenterMatchmakingRuleSetsResponseIncludedInner } from "./GameCenterMatchmakingRuleSetsResponseIncludedInner";
import { GameCenterMatchmakingRuleSetsResponseIncludedInnerFromJSON, GameCenterMatchmakingRuleSetsResponseIncludedInnerFromJSONTyped, GameCenterMatchmakingRuleSetsResponseIncludedInnerToJSON } from "./GameCenterMatchmakingRuleSetsResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface GameCenterMatchmakingRuleSetsResponse
 */
export interface GameCenterMatchmakingRuleSetsResponse {
    /**
     *
     * @type {Array<GameCenterMatchmakingRuleSet>}
     * @memberof GameCenterMatchmakingRuleSetsResponse
     */
    data: Array<GameCenterMatchmakingRuleSet>;
    /**
     *
     * @type {Array<GameCenterMatchmakingRuleSetsResponseIncludedInner>}
     * @memberof GameCenterMatchmakingRuleSetsResponse
     */
    included?: Array<GameCenterMatchmakingRuleSetsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterMatchmakingRuleSetsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingRuleSetsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetsResponse interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleSetsResponseFromJSON(json: any): GameCenterMatchmakingRuleSetsResponse {
    return GameCenterMatchmakingRuleSetsResponseFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetsResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(GameCenterMatchmakingRuleSetFromJSON),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(GameCenterMatchmakingRuleSetsResponseIncludedInnerFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function GameCenterMatchmakingRuleSetsResponseToJSON(value?: GameCenterMatchmakingRuleSetsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(GameCenterMatchmakingRuleSetToJSON),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(GameCenterMatchmakingRuleSetsResponseIncludedInnerToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
