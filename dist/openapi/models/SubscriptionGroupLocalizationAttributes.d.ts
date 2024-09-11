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
 * @interface SubscriptionGroupLocalizationAttributes
 */
export interface SubscriptionGroupLocalizationAttributes {
    /**
     *
     * @type {string}
     * @memberof SubscriptionGroupLocalizationAttributes
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionGroupLocalizationAttributes
     */
    customAppName?: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionGroupLocalizationAttributes
     */
    locale?: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionGroupLocalizationAttributes
     */
    state?: SubscriptionGroupLocalizationAttributesStateEnum;
}
/**
 * @export
 */
export declare const SubscriptionGroupLocalizationAttributesStateEnum: {
    readonly PrepareForSubmission: "PREPARE_FOR_SUBMISSION";
    readonly WaitingForReview: "WAITING_FOR_REVIEW";
    readonly Approved: "APPROVED";
    readonly Rejected: "REJECTED";
};
export type SubscriptionGroupLocalizationAttributesStateEnum = (typeof SubscriptionGroupLocalizationAttributesStateEnum)[keyof typeof SubscriptionGroupLocalizationAttributesStateEnum];
/**
 * Check if a given object implements the SubscriptionGroupLocalizationAttributes interface.
 */
export declare function instanceOfSubscriptionGroupLocalizationAttributes(value: object): boolean;
export declare function SubscriptionGroupLocalizationAttributesFromJSON(json: any): SubscriptionGroupLocalizationAttributes;
export declare function SubscriptionGroupLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationAttributes;
export declare function SubscriptionGroupLocalizationAttributesToJSON(value?: SubscriptionGroupLocalizationAttributes | null): any;
