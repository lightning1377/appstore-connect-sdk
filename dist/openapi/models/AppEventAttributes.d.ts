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
import type { AppEventAttributesTerritorySchedulesInner } from "./AppEventAttributesTerritorySchedulesInner";
/**
 *
 * @export
 * @interface AppEventAttributes
 */
export interface AppEventAttributes {
    /**
     *
     * @type {string}
     * @memberof AppEventAttributes
     */
    referenceName?: string;
    /**
     *
     * @type {string}
     * @memberof AppEventAttributes
     */
    badge?: AppEventAttributesBadgeEnum;
    /**
     *
     * @type {string}
     * @memberof AppEventAttributes
     */
    eventState?: AppEventAttributesEventStateEnum;
    /**
     *
     * @type {string}
     * @memberof AppEventAttributes
     */
    deepLink?: string;
    /**
     *
     * @type {string}
     * @memberof AppEventAttributes
     */
    purchaseRequirement?: AppEventAttributesPurchaseRequirementEnum;
    /**
     *
     * @type {string}
     * @memberof AppEventAttributes
     */
    primaryLocale?: string;
    /**
     *
     * @type {string}
     * @memberof AppEventAttributes
     */
    priority?: AppEventAttributesPriorityEnum;
    /**
     *
     * @type {string}
     * @memberof AppEventAttributes
     */
    purpose?: AppEventAttributesPurposeEnum;
    /**
     *
     * @type {Array<AppEventAttributesTerritorySchedulesInner>}
     * @memberof AppEventAttributes
     */
    territorySchedules?: Array<AppEventAttributesTerritorySchedulesInner>;
    /**
     *
     * @type {Array<AppEventAttributesTerritorySchedulesInner>}
     * @memberof AppEventAttributes
     */
    archivedTerritorySchedules?: Array<AppEventAttributesTerritorySchedulesInner>;
}
/**
 * @export
 */
export declare const AppEventAttributesBadgeEnum: {
    readonly LiveEvent: "LIVE_EVENT";
    readonly Premiere: "PREMIERE";
    readonly Challenge: "CHALLENGE";
    readonly Competition: "COMPETITION";
    readonly NewSeason: "NEW_SEASON";
    readonly MajorUpdate: "MAJOR_UPDATE";
    readonly SpecialEvent: "SPECIAL_EVENT";
};
export type AppEventAttributesBadgeEnum = (typeof AppEventAttributesBadgeEnum)[keyof typeof AppEventAttributesBadgeEnum];
/**
 * @export
 */
export declare const AppEventAttributesEventStateEnum: {
    readonly Draft: "DRAFT";
    readonly ReadyForReview: "READY_FOR_REVIEW";
    readonly WaitingForReview: "WAITING_FOR_REVIEW";
    readonly InReview: "IN_REVIEW";
    readonly Rejected: "REJECTED";
    readonly Accepted: "ACCEPTED";
    readonly Approved: "APPROVED";
    readonly Published: "PUBLISHED";
    readonly Past: "PAST";
    readonly Archived: "ARCHIVED";
};
export type AppEventAttributesEventStateEnum = (typeof AppEventAttributesEventStateEnum)[keyof typeof AppEventAttributesEventStateEnum];
/**
 * @export
 */
export declare const AppEventAttributesPurchaseRequirementEnum: {
    readonly NoCostAssociated: "NO_COST_ASSOCIATED";
    readonly InAppPurchase: "IN_APP_PURCHASE";
    readonly Subscription: "SUBSCRIPTION";
    readonly InAppPurchaseAndSubscription: "IN_APP_PURCHASE_AND_SUBSCRIPTION";
    readonly InAppPurchaseOrSubscription: "IN_APP_PURCHASE_OR_SUBSCRIPTION";
};
export type AppEventAttributesPurchaseRequirementEnum = (typeof AppEventAttributesPurchaseRequirementEnum)[keyof typeof AppEventAttributesPurchaseRequirementEnum];
/**
 * @export
 */
export declare const AppEventAttributesPriorityEnum: {
    readonly High: "HIGH";
    readonly Normal: "NORMAL";
};
export type AppEventAttributesPriorityEnum = (typeof AppEventAttributesPriorityEnum)[keyof typeof AppEventAttributesPriorityEnum];
/**
 * @export
 */
export declare const AppEventAttributesPurposeEnum: {
    readonly AppropriateForAllUsers: "APPROPRIATE_FOR_ALL_USERS";
    readonly AttractNewUsers: "ATTRACT_NEW_USERS";
    readonly KeepActiveUsersInformed: "KEEP_ACTIVE_USERS_INFORMED";
    readonly BringBackLapsedUsers: "BRING_BACK_LAPSED_USERS";
};
export type AppEventAttributesPurposeEnum = (typeof AppEventAttributesPurposeEnum)[keyof typeof AppEventAttributesPurposeEnum];
/**
 * Check if a given object implements the AppEventAttributes interface.
 */
export declare function instanceOfAppEventAttributes(value: object): boolean;
export declare function AppEventAttributesFromJSON(json: any): AppEventAttributes;
export declare function AppEventAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventAttributes;
export declare function AppEventAttributesToJSON(value?: AppEventAttributes | null): any;
