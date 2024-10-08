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
 * @interface InAppPurchaseAttributes
 */
export interface InAppPurchaseAttributes {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseAttributes
     */
    referenceName?: string;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseAttributes
     */
    productId?: string;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseAttributes
     */
    inAppPurchaseType?: InAppPurchaseAttributesInAppPurchaseTypeEnum;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseAttributes
     */
    state?: InAppPurchaseAttributesStateEnum;
}
/**
 * @export
 */
export declare const InAppPurchaseAttributesInAppPurchaseTypeEnum: {
    readonly AutomaticallyRenewableSubscription: "AUTOMATICALLY_RENEWABLE_SUBSCRIPTION";
    readonly NonConsumable: "NON_CONSUMABLE";
    readonly Consumable: "CONSUMABLE";
    readonly NonRenewingSubscription: "NON_RENEWING_SUBSCRIPTION";
    readonly FreeSubscription: "FREE_SUBSCRIPTION";
};
export type InAppPurchaseAttributesInAppPurchaseTypeEnum = (typeof InAppPurchaseAttributesInAppPurchaseTypeEnum)[keyof typeof InAppPurchaseAttributesInAppPurchaseTypeEnum];
/**
 * @export
 */
export declare const InAppPurchaseAttributesStateEnum: {
    readonly Created: "CREATED";
    readonly DeveloperSignedOff: "DEVELOPER_SIGNED_OFF";
    readonly DeveloperActionNeeded: "DEVELOPER_ACTION_NEEDED";
    readonly DeletionInProgress: "DELETION_IN_PROGRESS";
    readonly Approved: "APPROVED";
    readonly Deleted: "DELETED";
    readonly RemovedFromSale: "REMOVED_FROM_SALE";
    readonly DeveloperRemovedFromSale: "DEVELOPER_REMOVED_FROM_SALE";
    readonly WaitingForUpload: "WAITING_FOR_UPLOAD";
    readonly ProcessingContent: "PROCESSING_CONTENT";
    readonly Replaced: "REPLACED";
    readonly Rejected: "REJECTED";
    readonly WaitingForScreenshot: "WAITING_FOR_SCREENSHOT";
    readonly PrepareForSubmission: "PREPARE_FOR_SUBMISSION";
    readonly MissingMetadata: "MISSING_METADATA";
    readonly ReadyToSubmit: "READY_TO_SUBMIT";
    readonly WaitingForReview: "WAITING_FOR_REVIEW";
    readonly InReview: "IN_REVIEW";
    readonly PendingDeveloperRelease: "PENDING_DEVELOPER_RELEASE";
};
export type InAppPurchaseAttributesStateEnum = (typeof InAppPurchaseAttributesStateEnum)[keyof typeof InAppPurchaseAttributesStateEnum];
/**
 * Check if a given object implements the InAppPurchaseAttributes interface.
 */
export declare function instanceOfInAppPurchaseAttributes(value: object): boolean;
export declare function InAppPurchaseAttributesFromJSON(json: any): InAppPurchaseAttributes;
export declare function InAppPurchaseAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAttributes;
export declare function InAppPurchaseAttributesToJSON(value?: InAppPurchaseAttributes | null): any;
