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
 * @interface AppStoreVersionExperimentAttributes
 */
export interface AppStoreVersionExperimentAttributes {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentAttributes
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof AppStoreVersionExperimentAttributes
     */
    trafficProportion?: number;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentAttributes
     */
    state?: AppStoreVersionExperimentAttributesStateEnum;
    /**
     *
     * @type {boolean}
     * @memberof AppStoreVersionExperimentAttributes
     */
    reviewRequired?: boolean;
    /**
     *
     * @type {Date}
     * @memberof AppStoreVersionExperimentAttributes
     */
    startDate?: Date;
    /**
     *
     * @type {Date}
     * @memberof AppStoreVersionExperimentAttributes
     */
    endDate?: Date;
}

/**
 * @export
 */
export const AppStoreVersionExperimentAttributesStateEnum = {
    PrepareForSubmission: "PREPARE_FOR_SUBMISSION",
    ReadyForReview: "READY_FOR_REVIEW",
    WaitingForReview: "WAITING_FOR_REVIEW",
    InReview: "IN_REVIEW",
    Accepted: "ACCEPTED",
    Approved: "APPROVED",
    Rejected: "REJECTED",
    Completed: "COMPLETED",
    Stopped: "STOPPED"
} as const;
export type AppStoreVersionExperimentAttributesStateEnum = (typeof AppStoreVersionExperimentAttributesStateEnum)[keyof typeof AppStoreVersionExperimentAttributesStateEnum];

/**
 * Check if a given object implements the AppStoreVersionExperimentAttributes interface.
 */
export function instanceOfAppStoreVersionExperimentAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionExperimentAttributesFromJSON(json: any): AppStoreVersionExperimentAttributes {
    return AppStoreVersionExperimentAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentAttributes {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !exists(json, "name") ? undefined : json["name"],
        trafficProportion: !exists(json, "trafficProportion") ? undefined : json["trafficProportion"],
        state: !exists(json, "state") ? undefined : json["state"],
        reviewRequired: !exists(json, "reviewRequired") ? undefined : json["reviewRequired"],
        startDate: !exists(json, "startDate") ? undefined : new Date(json["startDate"]),
        endDate: !exists(json, "endDate") ? undefined : new Date(json["endDate"])
    };
}

export function AppStoreVersionExperimentAttributesToJSON(value?: AppStoreVersionExperimentAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        trafficProportion: value.trafficProportion,
        state: value.state,
        reviewRequired: value.reviewRequired,
        startDate: value.startDate === undefined ? undefined : value.startDate.toISOString(),
        endDate: value.endDate === undefined ? undefined : value.endDate.toISOString()
    };
}
