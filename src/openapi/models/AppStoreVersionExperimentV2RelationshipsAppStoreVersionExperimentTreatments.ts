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
import type { AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentData } from "./AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentData";
import { AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentDataFromJSON, AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentDataFromJSONTyped, AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentDataToJSON } from "./AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentData";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments
 */
export interface AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentData>}
     * @memberof AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments
     */
    data?: Array<AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentData>;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments interface.
 */
export function instanceOfAppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatmentsFromJSON(json: any): AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments {
    return AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatmentsFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"]),
        data: !exists(json, "data") ? undefined : (json["data"] as Array<any>).map(AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentDataFromJSON)
    };
}

export function AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatmentsToJSON(value?: AppStoreVersionExperimentV2RelationshipsAppStoreVersionExperimentTreatments | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta),
        data: value.data === undefined ? undefined : (value.data as Array<any>).map(AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentDataToJSON)
    };
}
