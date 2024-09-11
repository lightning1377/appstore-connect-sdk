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
import type { SubscriptionOfferCodeCustomCodeCreateRequestDataRelationships } from "./SubscriptionOfferCodeCustomCodeCreateRequestDataRelationships";
import type { SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributes } from "./SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributes";
/**
 *
 * @export
 * @interface SubscriptionOfferCodeOneTimeUseCodeCreateRequestData
 */
export interface SubscriptionOfferCodeOneTimeUseCodeCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeCreateRequestData
     */
    type: SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataTypeEnum;
    /**
     *
     * @type {SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributes}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeCreateRequestData
     */
    attributes: SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataAttributes;
    /**
     *
     * @type {SubscriptionOfferCodeCustomCodeCreateRequestDataRelationships}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeCreateRequestData
     */
    relationships: SubscriptionOfferCodeCustomCodeCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataTypeEnum: {
    readonly SubscriptionOfferCodeOneTimeUseCodes: "subscriptionOfferCodeOneTimeUseCodes";
};
export type SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataTypeEnum = (typeof SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataTypeEnum)[keyof typeof SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodeCreateRequestData interface.
 */
export declare function instanceOfSubscriptionOfferCodeOneTimeUseCodeCreateRequestData(value: object): boolean;
export declare function SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataFromJSON(json: any): SubscriptionOfferCodeOneTimeUseCodeCreateRequestData;
export declare function SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeOneTimeUseCodeCreateRequestData;
export declare function SubscriptionOfferCodeOneTimeUseCodeCreateRequestDataToJSON(value?: SubscriptionOfferCodeOneTimeUseCodeCreateRequestData | null): any;
