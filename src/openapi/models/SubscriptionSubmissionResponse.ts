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
import type { Subscription } from "./Subscription";
import { SubscriptionFromJSON, SubscriptionFromJSONTyped, SubscriptionToJSON } from "./Subscription";
import type { SubscriptionSubmission } from "./SubscriptionSubmission";
import { SubscriptionSubmissionFromJSON, SubscriptionSubmissionFromJSONTyped, SubscriptionSubmissionToJSON } from "./SubscriptionSubmission";

/**
 *
 * @export
 * @interface SubscriptionSubmissionResponse
 */
export interface SubscriptionSubmissionResponse {
    /**
     *
     * @type {SubscriptionSubmission}
     * @memberof SubscriptionSubmissionResponse
     */
    data: SubscriptionSubmission;
    /**
     *
     * @type {Array<Subscription>}
     * @memberof SubscriptionSubmissionResponse
     */
    included?: Array<Subscription>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof SubscriptionSubmissionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionSubmissionResponse interface.
 */
export function instanceOfSubscriptionSubmissionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionSubmissionResponseFromJSON(json: any): SubscriptionSubmissionResponse {
    return SubscriptionSubmissionResponseFromJSONTyped(json, false);
}

export function SubscriptionSubmissionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionSubmissionResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: SubscriptionSubmissionFromJSON(json["data"]),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(SubscriptionFromJSON),
        links: DocumentLinksFromJSON(json["links"])
    };
}

export function SubscriptionSubmissionResponseToJSON(value?: SubscriptionSubmissionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: SubscriptionSubmissionToJSON(value.data),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(SubscriptionToJSON),
        links: DocumentLinksToJSON(value.links)
    };
}
