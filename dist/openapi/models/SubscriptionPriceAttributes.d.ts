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
 * @interface SubscriptionPriceAttributes
 */
export interface SubscriptionPriceAttributes {
    /**
     *
     * @type {Date}
     * @memberof SubscriptionPriceAttributes
     */
    startDate?: Date;
    /**
     *
     * @type {boolean}
     * @memberof SubscriptionPriceAttributes
     */
    preserved?: boolean;
}
/**
 * Check if a given object implements the SubscriptionPriceAttributes interface.
 */
export declare function instanceOfSubscriptionPriceAttributes(value: object): boolean;
export declare function SubscriptionPriceAttributesFromJSON(json: any): SubscriptionPriceAttributes;
export declare function SubscriptionPriceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPriceAttributes;
export declare function SubscriptionPriceAttributesToJSON(value?: SubscriptionPriceAttributes | null): any;
