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
export declare const AppStoreVersionExperimentAttributesStateEnum: {
    readonly PrepareForSubmission: "PREPARE_FOR_SUBMISSION";
    readonly ReadyForReview: "READY_FOR_REVIEW";
    readonly WaitingForReview: "WAITING_FOR_REVIEW";
    readonly InReview: "IN_REVIEW";
    readonly Accepted: "ACCEPTED";
    readonly Approved: "APPROVED";
    readonly Rejected: "REJECTED";
    readonly Completed: "COMPLETED";
    readonly Stopped: "STOPPED";
};
export type AppStoreVersionExperimentAttributesStateEnum = (typeof AppStoreVersionExperimentAttributesStateEnum)[keyof typeof AppStoreVersionExperimentAttributesStateEnum];
/**
 * Check if a given object implements the AppStoreVersionExperimentAttributes interface.
 */
export declare function instanceOfAppStoreVersionExperimentAttributes(value: object): boolean;
export declare function AppStoreVersionExperimentAttributesFromJSON(json: any): AppStoreVersionExperimentAttributes;
export declare function AppStoreVersionExperimentAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentAttributes;
export declare function AppStoreVersionExperimentAttributesToJSON(value?: AppStoreVersionExperimentAttributes | null): any;
