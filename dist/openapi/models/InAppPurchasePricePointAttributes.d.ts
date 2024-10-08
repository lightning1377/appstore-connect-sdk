/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface InAppPurchasePricePointAttributes
 */
export interface InAppPurchasePricePointAttributes {
    /**
     *
     * @type {string}
     * @memberof InAppPurchasePricePointAttributes
     */
    customerPrice?: string;
    /**
     *
     * @type {string}
     * @memberof InAppPurchasePricePointAttributes
     */
    proceeds?: string;
    /**
     *
     * @type {string}
     * @memberof InAppPurchasePricePointAttributes
     */
    priceTier?: string;
}
/**
 * Check if a given object implements the InAppPurchasePricePointAttributes interface.
 */
export declare function instanceOfInAppPurchasePricePointAttributes(value: object): boolean;
export declare function InAppPurchasePricePointAttributesFromJSON(json: any): InAppPurchasePricePointAttributes;
export declare function InAppPurchasePricePointAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePricePointAttributes;
export declare function InAppPurchasePricePointAttributesToJSON(value?: InAppPurchasePricePointAttributes | null): any;
