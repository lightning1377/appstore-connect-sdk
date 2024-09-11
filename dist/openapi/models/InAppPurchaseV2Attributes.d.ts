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
import type { InAppPurchaseState } from "./InAppPurchaseState";
import type { InAppPurchaseType } from "./InAppPurchaseType";
/**
 *
 * @export
 * @interface InAppPurchaseV2Attributes
 */
export interface InAppPurchaseV2Attributes {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2Attributes
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2Attributes
     */
    productId?: string;
    /**
     *
     * @type {InAppPurchaseType}
     * @memberof InAppPurchaseV2Attributes
     */
    inAppPurchaseType?: InAppPurchaseType;
    /**
     *
     * @type {InAppPurchaseState}
     * @memberof InAppPurchaseV2Attributes
     */
    state?: InAppPurchaseState;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2Attributes
     */
    reviewNote?: string;
    /**
     *
     * @type {boolean}
     * @memberof InAppPurchaseV2Attributes
     */
    familySharable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InAppPurchaseV2Attributes
     */
    contentHosting?: boolean;
}
/**
 * Check if a given object implements the InAppPurchaseV2Attributes interface.
 */
export declare function instanceOfInAppPurchaseV2Attributes(value: object): boolean;
export declare function InAppPurchaseV2AttributesFromJSON(json: any): InAppPurchaseV2Attributes;
export declare function InAppPurchaseV2AttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2Attributes;
export declare function InAppPurchaseV2AttributesToJSON(value?: InAppPurchaseV2Attributes | null): any;
