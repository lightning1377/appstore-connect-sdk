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
 * @interface InAppPurchaseLocalizationAttributes
 */
export interface InAppPurchaseLocalizationAttributes {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseLocalizationAttributes
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseLocalizationAttributes
     */
    locale?: string;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseLocalizationAttributes
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseLocalizationAttributes
     */
    state?: InAppPurchaseLocalizationAttributesStateEnum;
}
/**
 * @export
 */
export declare const InAppPurchaseLocalizationAttributesStateEnum: {
    readonly PrepareForSubmission: "PREPARE_FOR_SUBMISSION";
    readonly WaitingForReview: "WAITING_FOR_REVIEW";
    readonly Approved: "APPROVED";
    readonly Rejected: "REJECTED";
};
export type InAppPurchaseLocalizationAttributesStateEnum = (typeof InAppPurchaseLocalizationAttributesStateEnum)[keyof typeof InAppPurchaseLocalizationAttributesStateEnum];
/**
 * Check if a given object implements the InAppPurchaseLocalizationAttributes interface.
 */
export declare function instanceOfInAppPurchaseLocalizationAttributes(value: object): boolean;
export declare function InAppPurchaseLocalizationAttributesFromJSON(json: any): InAppPurchaseLocalizationAttributes;
export declare function InAppPurchaseLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseLocalizationAttributes;
export declare function InAppPurchaseLocalizationAttributesToJSON(value?: InAppPurchaseLocalizationAttributes | null): any;
