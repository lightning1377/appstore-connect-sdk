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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import { AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON, AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSONTyped, AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { AppRelationshipsGameCenterDetailData } from "./AppRelationshipsGameCenterDetailData";
import { AppRelationshipsGameCenterDetailDataFromJSON, AppRelationshipsGameCenterDetailDataFromJSONTyped, AppRelationshipsGameCenterDetailDataToJSON } from "./AppRelationshipsGameCenterDetailData";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface GameCenterGroupRelationshipsGameCenterDetails
 */
export interface GameCenterGroupRelationshipsGameCenterDetails {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof GameCenterGroupRelationshipsGameCenterDetails
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterGroupRelationshipsGameCenterDetails
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppRelationshipsGameCenterDetailData>}
     * @memberof GameCenterGroupRelationshipsGameCenterDetails
     */
    data?: Array<AppRelationshipsGameCenterDetailData>;
}

/**
 * Check if a given object implements the GameCenterGroupRelationshipsGameCenterDetails interface.
 */
export function instanceOfGameCenterGroupRelationshipsGameCenterDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterGroupRelationshipsGameCenterDetailsFromJSON(json: any): GameCenterGroupRelationshipsGameCenterDetails {
    return GameCenterGroupRelationshipsGameCenterDetailsFromJSONTyped(json, false);
}

export function GameCenterGroupRelationshipsGameCenterDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupRelationshipsGameCenterDetails {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"]),
        data: !exists(json, "data") ? undefined : (json["data"] as Array<any>).map(AppRelationshipsGameCenterDetailDataFromJSON)
    };
}

export function GameCenterGroupRelationshipsGameCenterDetailsToJSON(value?: GameCenterGroupRelationshipsGameCenterDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta),
        data: value.data === undefined ? undefined : (value.data as Array<any>).map(AppRelationshipsGameCenterDetailDataToJSON)
    };
}
