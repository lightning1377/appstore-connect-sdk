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
import type { AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner } from "./AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner";
import { AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON, AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped, AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON } from "./AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner";

/**
 *
 * @export
 * @interface AppPreviewRelationshipsAppPreviewSet
 */
export interface AppPreviewRelationshipsAppPreviewSet {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppPreviewRelationshipsAppPreviewSet
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner}
     * @memberof AppPreviewRelationshipsAppPreviewSet
     */
    data?: AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner;
}

/**
 * Check if a given object implements the AppPreviewRelationshipsAppPreviewSet interface.
 */
export function instanceOfAppPreviewRelationshipsAppPreviewSet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPreviewRelationshipsAppPreviewSetFromJSON(json: any): AppPreviewRelationshipsAppPreviewSet {
    return AppPreviewRelationshipsAppPreviewSetFromJSONTyped(json, false);
}

export function AppPreviewRelationshipsAppPreviewSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewRelationshipsAppPreviewSet {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        data: !exists(json, "data") ? undefined : AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON(json["data"])
    };
}

export function AppPreviewRelationshipsAppPreviewSetToJSON(value?: AppPreviewRelationshipsAppPreviewSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        data: AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON(value.data)
    };
}
