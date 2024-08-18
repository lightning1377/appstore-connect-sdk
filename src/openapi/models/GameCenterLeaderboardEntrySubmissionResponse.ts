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
import type { DocumentLinks } from "./DocumentLinks";
import { DocumentLinksFromJSON, DocumentLinksFromJSONTyped, DocumentLinksToJSON } from "./DocumentLinks";
import type { GameCenterLeaderboardEntrySubmission } from "./GameCenterLeaderboardEntrySubmission";
import { GameCenterLeaderboardEntrySubmissionFromJSON, GameCenterLeaderboardEntrySubmissionFromJSONTyped, GameCenterLeaderboardEntrySubmissionToJSON } from "./GameCenterLeaderboardEntrySubmission";

/**
 *
 * @export
 * @interface GameCenterLeaderboardEntrySubmissionResponse
 */
export interface GameCenterLeaderboardEntrySubmissionResponse {
    /**
     *
     * @type {GameCenterLeaderboardEntrySubmission}
     * @memberof GameCenterLeaderboardEntrySubmissionResponse
     */
    data: GameCenterLeaderboardEntrySubmission;
    /**
     *
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardEntrySubmissionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterLeaderboardEntrySubmissionResponse interface.
 */
export function instanceOfGameCenterLeaderboardEntrySubmissionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterLeaderboardEntrySubmissionResponseFromJSON(json: any): GameCenterLeaderboardEntrySubmissionResponse {
    return GameCenterLeaderboardEntrySubmissionResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardEntrySubmissionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardEntrySubmissionResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: GameCenterLeaderboardEntrySubmissionFromJSON(json["data"]),
        links: DocumentLinksFromJSON(json["links"])
    };
}

export function GameCenterLeaderboardEntrySubmissionResponseToJSON(value?: GameCenterLeaderboardEntrySubmissionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: GameCenterLeaderboardEntrySubmissionToJSON(value.data),
        links: DocumentLinksToJSON(value.links)
    };
}
