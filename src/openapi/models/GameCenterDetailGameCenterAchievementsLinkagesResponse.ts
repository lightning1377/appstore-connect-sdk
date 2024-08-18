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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData";
import { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON, GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSONTyped, GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface GameCenterDetailGameCenterAchievementsLinkagesResponse
 */
export interface GameCenterDetailGameCenterAchievementsLinkagesResponse {
    /**
     *
     * @type {Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>}
     * @memberof GameCenterDetailGameCenterAchievementsLinkagesResponse
     */
    data: Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterDetailGameCenterAchievementsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterDetailGameCenterAchievementsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterDetailGameCenterAchievementsLinkagesResponse interface.
 */
export function instanceOfGameCenterDetailGameCenterAchievementsLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterDetailGameCenterAchievementsLinkagesResponseFromJSON(json: any): GameCenterDetailGameCenterAchievementsLinkagesResponse {
    return GameCenterDetailGameCenterAchievementsLinkagesResponseFromJSONTyped(json, false);
}

export function GameCenterDetailGameCenterAchievementsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailGameCenterAchievementsLinkagesResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function GameCenterDetailGameCenterAchievementsLinkagesResponseToJSON(value?: GameCenterDetailGameCenterAchievementsLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
