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
 * @interface InAppPurchaseV2UpdateRequestDataAttributes
 */
export interface InAppPurchaseV2UpdateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2UpdateRequestDataAttributes
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2UpdateRequestDataAttributes
     */
    reviewNote?: string;
    /**
     *
     * @type {boolean}
     * @memberof InAppPurchaseV2UpdateRequestDataAttributes
     */
    familySharable?: boolean;
}
/**
 * Check if a given object implements the InAppPurchaseV2UpdateRequestDataAttributes interface.
 */
export declare function instanceOfInAppPurchaseV2UpdateRequestDataAttributes(value: object): boolean;
export declare function InAppPurchaseV2UpdateRequestDataAttributesFromJSON(json: any): InAppPurchaseV2UpdateRequestDataAttributes;
export declare function InAppPurchaseV2UpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2UpdateRequestDataAttributes;
export declare function InAppPurchaseV2UpdateRequestDataAttributesToJSON(value?: InAppPurchaseV2UpdateRequestDataAttributes | null): any;
