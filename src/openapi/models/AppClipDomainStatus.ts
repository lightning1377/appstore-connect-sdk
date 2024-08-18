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
import type { AppClipDomainStatusAttributes } from "./AppClipDomainStatusAttributes";
import { AppClipDomainStatusAttributesFromJSON, AppClipDomainStatusAttributesFromJSONTyped, AppClipDomainStatusAttributesToJSON } from "./AppClipDomainStatusAttributes";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface AppClipDomainStatus
 */
export interface AppClipDomainStatus {
    /**
     *
     * @type {string}
     * @memberof AppClipDomainStatus
     */
    type: AppClipDomainStatusTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipDomainStatus
     */
    id: string;
    /**
     *
     * @type {AppClipDomainStatusAttributes}
     * @memberof AppClipDomainStatus
     */
    attributes?: AppClipDomainStatusAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppClipDomainStatus
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const AppClipDomainStatusTypeEnum = {
    AppClipDomainStatuses: "appClipDomainStatuses"
} as const;
export type AppClipDomainStatusTypeEnum = (typeof AppClipDomainStatusTypeEnum)[keyof typeof AppClipDomainStatusTypeEnum];

/**
 * Check if a given object implements the AppClipDomainStatus interface.
 */
export function instanceOfAppClipDomainStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipDomainStatusFromJSON(json: any): AppClipDomainStatus {
    return AppClipDomainStatusFromJSONTyped(json, false);
}

export function AppClipDomainStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDomainStatus {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : AppClipDomainStatusAttributesFromJSON(json["attributes"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function AppClipDomainStatusToJSON(value?: AppClipDomainStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: AppClipDomainStatusAttributesToJSON(value.attributes),
        links: ResourceLinksToJSON(value.links)
    };
}
