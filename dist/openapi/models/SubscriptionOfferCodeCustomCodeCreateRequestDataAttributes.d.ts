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
 * @interface SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes
 */
export interface SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes
     */
    customCode: string;
    /**
     *
     * @type {number}
     * @memberof SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes
     */
    numberOfCodes: number;
    /**
     *
     * @type {Date}
     * @memberof SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes
     */
    expirationDate?: Date;
}
/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes interface.
 */
export declare function instanceOfSubscriptionOfferCodeCustomCodeCreateRequestDataAttributes(value: object): boolean;
export declare function SubscriptionOfferCodeCustomCodeCreateRequestDataAttributesFromJSON(json: any): SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes;
export declare function SubscriptionOfferCodeCustomCodeCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes;
export declare function SubscriptionOfferCodeCustomCodeCreateRequestDataAttributesToJSON(value?: SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes | null): any;
