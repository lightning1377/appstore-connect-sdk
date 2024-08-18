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
/**
 *
 * @export
 * @interface BundleIdRelationshipsBundleIdCapabilitiesDataInner
 */
export interface BundleIdRelationshipsBundleIdCapabilitiesDataInner {
    /**
     *
     * @type {string}
     * @memberof BundleIdRelationshipsBundleIdCapabilitiesDataInner
     */
    type: BundleIdRelationshipsBundleIdCapabilitiesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BundleIdRelationshipsBundleIdCapabilitiesDataInner
     */
    id: string;
}

/**
 * @export
 */
export const BundleIdRelationshipsBundleIdCapabilitiesDataInnerTypeEnum = {
    BundleIdCapabilities: "bundleIdCapabilities"
} as const;
export type BundleIdRelationshipsBundleIdCapabilitiesDataInnerTypeEnum = (typeof BundleIdRelationshipsBundleIdCapabilitiesDataInnerTypeEnum)[keyof typeof BundleIdRelationshipsBundleIdCapabilitiesDataInnerTypeEnum];

/**
 * Check if a given object implements the BundleIdRelationshipsBundleIdCapabilitiesDataInner interface.
 */
export function instanceOfBundleIdRelationshipsBundleIdCapabilitiesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSON(json: any): BundleIdRelationshipsBundleIdCapabilitiesDataInner {
    return BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSONTyped(json, false);
}

export function BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdRelationshipsBundleIdCapabilitiesDataInner {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}

export function BundleIdRelationshipsBundleIdCapabilitiesDataInnerToJSON(value?: BundleIdRelationshipsBundleIdCapabilitiesDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id
    };
}
