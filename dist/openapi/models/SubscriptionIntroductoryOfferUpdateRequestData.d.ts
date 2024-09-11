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
import type { SubscriptionIntroductoryOfferUpdateRequestDataAttributes } from "./SubscriptionIntroductoryOfferUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface SubscriptionIntroductoryOfferUpdateRequestData
 */
export interface SubscriptionIntroductoryOfferUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof SubscriptionIntroductoryOfferUpdateRequestData
     */
    type: SubscriptionIntroductoryOfferUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionIntroductoryOfferUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {SubscriptionIntroductoryOfferUpdateRequestDataAttributes}
     * @memberof SubscriptionIntroductoryOfferUpdateRequestData
     */
    attributes?: SubscriptionIntroductoryOfferUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const SubscriptionIntroductoryOfferUpdateRequestDataTypeEnum: {
    readonly SubscriptionIntroductoryOffers: "subscriptionIntroductoryOffers";
};
export type SubscriptionIntroductoryOfferUpdateRequestDataTypeEnum = (typeof SubscriptionIntroductoryOfferUpdateRequestDataTypeEnum)[keyof typeof SubscriptionIntroductoryOfferUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the SubscriptionIntroductoryOfferUpdateRequestData interface.
 */
export declare function instanceOfSubscriptionIntroductoryOfferUpdateRequestData(value: object): boolean;
export declare function SubscriptionIntroductoryOfferUpdateRequestDataFromJSON(json: any): SubscriptionIntroductoryOfferUpdateRequestData;
export declare function SubscriptionIntroductoryOfferUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferUpdateRequestData;
export declare function SubscriptionIntroductoryOfferUpdateRequestDataToJSON(value?: SubscriptionIntroductoryOfferUpdateRequestData | null): any;
