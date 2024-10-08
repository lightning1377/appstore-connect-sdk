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
 * @interface SubscriptionOfferCodeRelationshipsCustomCodesDataInner
 */
export interface SubscriptionOfferCodeRelationshipsCustomCodesDataInner {
    /**
     *
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsCustomCodesDataInner
     */
    type: SubscriptionOfferCodeRelationshipsCustomCodesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsCustomCodesDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const SubscriptionOfferCodeRelationshipsCustomCodesDataInnerTypeEnum: {
    readonly SubscriptionOfferCodeCustomCodes: "subscriptionOfferCodeCustomCodes";
};
export type SubscriptionOfferCodeRelationshipsCustomCodesDataInnerTypeEnum = (typeof SubscriptionOfferCodeRelationshipsCustomCodesDataInnerTypeEnum)[keyof typeof SubscriptionOfferCodeRelationshipsCustomCodesDataInnerTypeEnum];
/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsCustomCodesDataInner interface.
 */
export declare function instanceOfSubscriptionOfferCodeRelationshipsCustomCodesDataInner(value: object): boolean;
export declare function SubscriptionOfferCodeRelationshipsCustomCodesDataInnerFromJSON(json: any): SubscriptionOfferCodeRelationshipsCustomCodesDataInner;
export declare function SubscriptionOfferCodeRelationshipsCustomCodesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsCustomCodesDataInner;
export declare function SubscriptionOfferCodeRelationshipsCustomCodesDataInnerToJSON(value?: SubscriptionOfferCodeRelationshipsCustomCodesDataInner | null): any;
