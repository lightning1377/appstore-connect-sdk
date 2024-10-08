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
 * @interface PromotedPurchaseUpdateRequestDataAttributes
 */
export interface PromotedPurchaseUpdateRequestDataAttributes {
    /**
     *
     * @type {boolean}
     * @memberof PromotedPurchaseUpdateRequestDataAttributes
     */
    visibleForAllUsers?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PromotedPurchaseUpdateRequestDataAttributes
     */
    enabled?: boolean;
}
/**
 * Check if a given object implements the PromotedPurchaseUpdateRequestDataAttributes interface.
 */
export declare function instanceOfPromotedPurchaseUpdateRequestDataAttributes(value: object): boolean;
export declare function PromotedPurchaseUpdateRequestDataAttributesFromJSON(json: any): PromotedPurchaseUpdateRequestDataAttributes;
export declare function PromotedPurchaseUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseUpdateRequestDataAttributes;
export declare function PromotedPurchaseUpdateRequestDataAttributesToJSON(value?: PromotedPurchaseUpdateRequestDataAttributes | null): any;
