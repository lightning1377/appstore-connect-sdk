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
import type { AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData } from "./AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData";
import { AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON, AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSONTyped, AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON } from "./AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData";
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import { AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON, AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSONTyped, AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppStoreVersionExperimentV2RelationshipsControlVersions
 */
export interface AppStoreVersionExperimentV2RelationshipsControlVersions {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppStoreVersionExperimentV2RelationshipsControlVersions
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppStoreVersionExperimentV2RelationshipsControlVersions
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData>}
     * @memberof AppStoreVersionExperimentV2RelationshipsControlVersions
     */
    data?: Array<AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData>;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentV2RelationshipsControlVersions interface.
 */
export function instanceOfAppStoreVersionExperimentV2RelationshipsControlVersions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionExperimentV2RelationshipsControlVersionsFromJSON(json: any): AppStoreVersionExperimentV2RelationshipsControlVersions {
    return AppStoreVersionExperimentV2RelationshipsControlVersionsFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2RelationshipsControlVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2RelationshipsControlVersions {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"]),
        data: !exists(json, "data") ? undefined : (json["data"] as Array<any>).map(AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON)
    };
}

export function AppStoreVersionExperimentV2RelationshipsControlVersionsToJSON(value?: AppStoreVersionExperimentV2RelationshipsControlVersions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta),
        data: value.data === undefined ? undefined : (value.data as Array<any>).map(AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON)
    };
}
