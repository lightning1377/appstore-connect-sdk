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
 * @interface SubscriptionRelationshipsIntroductoryOffersDataInner
 */
export interface SubscriptionRelationshipsIntroductoryOffersDataInner {
    /**
     *
     * @type {string}
     * @memberof SubscriptionRelationshipsIntroductoryOffersDataInner
     */
    type: SubscriptionRelationshipsIntroductoryOffersDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionRelationshipsIntroductoryOffersDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const SubscriptionRelationshipsIntroductoryOffersDataInnerTypeEnum: {
    readonly SubscriptionIntroductoryOffers: "subscriptionIntroductoryOffers";
};
export type SubscriptionRelationshipsIntroductoryOffersDataInnerTypeEnum = (typeof SubscriptionRelationshipsIntroductoryOffersDataInnerTypeEnum)[keyof typeof SubscriptionRelationshipsIntroductoryOffersDataInnerTypeEnum];
/**
 * Check if a given object implements the SubscriptionRelationshipsIntroductoryOffersDataInner interface.
 */
export declare function instanceOfSubscriptionRelationshipsIntroductoryOffersDataInner(value: object): boolean;
export declare function SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSON(json: any): SubscriptionRelationshipsIntroductoryOffersDataInner;
export declare function SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsIntroductoryOffersDataInner;
export declare function SubscriptionRelationshipsIntroductoryOffersDataInnerToJSON(value?: SubscriptionRelationshipsIntroductoryOffersDataInner | null): any;
