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
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsAppData } from "./AlternativeDistributionKeyCreateRequestDataRelationshipsAppData";
import { AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON, AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSONTyped, AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON } from "./AlternativeDistributionKeyCreateRequestDataRelationshipsAppData";
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import { AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON, AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSONTyped, AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface BetaTesterRelationshipsApps
 */
export interface BetaTesterRelationshipsApps {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof BetaTesterRelationshipsApps
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BetaTesterRelationshipsApps
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>}
     * @memberof BetaTesterRelationshipsApps
     */
    data?: Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>;
}

/**
 * Check if a given object implements the BetaTesterRelationshipsApps interface.
 */
export function instanceOfBetaTesterRelationshipsApps(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaTesterRelationshipsAppsFromJSON(json: any): BetaTesterRelationshipsApps {
    return BetaTesterRelationshipsAppsFromJSONTyped(json, false);
}

export function BetaTesterRelationshipsAppsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterRelationshipsApps {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"]),
        data: !exists(json, "data") ? undefined : (json["data"] as Array<any>).map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON)
    };
}

export function BetaTesterRelationshipsAppsToJSON(value?: BetaTesterRelationshipsApps | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta),
        data: value.data === undefined ? undefined : (value.data as Array<any>).map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON)
    };
}
