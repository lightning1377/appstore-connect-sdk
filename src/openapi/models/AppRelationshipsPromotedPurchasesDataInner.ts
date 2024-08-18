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
 * @interface AppRelationshipsPromotedPurchasesDataInner
 */
export interface AppRelationshipsPromotedPurchasesDataInner {
    /**
     *
     * @type {string}
     * @memberof AppRelationshipsPromotedPurchasesDataInner
     */
    type: AppRelationshipsPromotedPurchasesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppRelationshipsPromotedPurchasesDataInner
     */
    id: string;
}

/**
 * @export
 */
export const AppRelationshipsPromotedPurchasesDataInnerTypeEnum = {
    PromotedPurchases: "promotedPurchases"
} as const;
export type AppRelationshipsPromotedPurchasesDataInnerTypeEnum = (typeof AppRelationshipsPromotedPurchasesDataInnerTypeEnum)[keyof typeof AppRelationshipsPromotedPurchasesDataInnerTypeEnum];

/**
 * Check if a given object implements the AppRelationshipsPromotedPurchasesDataInner interface.
 */
export function instanceOfAppRelationshipsPromotedPurchasesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppRelationshipsPromotedPurchasesDataInnerFromJSON(json: any): AppRelationshipsPromotedPurchasesDataInner {
    return AppRelationshipsPromotedPurchasesDataInnerFromJSONTyped(json, false);
}

export function AppRelationshipsPromotedPurchasesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsPromotedPurchasesDataInner {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}

export function AppRelationshipsPromotedPurchasesDataInnerToJSON(value?: AppRelationshipsPromotedPurchasesDataInner | null): any {
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
