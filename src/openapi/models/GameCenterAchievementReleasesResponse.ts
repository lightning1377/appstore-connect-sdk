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
import type { GameCenterAchievementRelease } from "./GameCenterAchievementRelease";
import { GameCenterAchievementReleaseFromJSON, GameCenterAchievementReleaseFromJSONTyped, GameCenterAchievementReleaseToJSON } from "./GameCenterAchievementRelease";
import type { GameCenterAchievementReleasesResponseIncludedInner } from "./GameCenterAchievementReleasesResponseIncludedInner";
import { GameCenterAchievementReleasesResponseIncludedInnerFromJSON, GameCenterAchievementReleasesResponseIncludedInnerFromJSONTyped, GameCenterAchievementReleasesResponseIncludedInnerToJSON } from "./GameCenterAchievementReleasesResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface GameCenterAchievementReleasesResponse
 */
export interface GameCenterAchievementReleasesResponse {
    /**
     *
     * @type {Array<GameCenterAchievementRelease>}
     * @memberof GameCenterAchievementReleasesResponse
     */
    data: Array<GameCenterAchievementRelease>;
    /**
     *
     * @type {Array<GameCenterAchievementReleasesResponseIncludedInner>}
     * @memberof GameCenterAchievementReleasesResponse
     */
    included?: Array<GameCenterAchievementReleasesResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterAchievementReleasesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterAchievementReleasesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterAchievementReleasesResponse interface.
 */
export function instanceOfGameCenterAchievementReleasesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterAchievementReleasesResponseFromJSON(json: any): GameCenterAchievementReleasesResponse {
    return GameCenterAchievementReleasesResponseFromJSONTyped(json, false);
}

export function GameCenterAchievementReleasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleasesResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(GameCenterAchievementReleaseFromJSON),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(GameCenterAchievementReleasesResponseIncludedInnerFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function GameCenterAchievementReleasesResponseToJSON(value?: GameCenterAchievementReleasesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(GameCenterAchievementReleaseToJSON),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(GameCenterAchievementReleasesResponseIncludedInnerToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
