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
import type { InAppPurchasePricePointRelationships } from "./InAppPurchasePricePointRelationships";
import type { ResourceLinks } from "./ResourceLinks";
import type { SubscriptionPricePointAttributes } from "./SubscriptionPricePointAttributes";
/**
 *
 * @export
 * @interface SubscriptionPricePoint
 */
export interface SubscriptionPricePoint {
    /**
     *
     * @type {string}
     * @memberof SubscriptionPricePoint
     */
    type: SubscriptionPricePointTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPricePoint
     */
    id: string;
    /**
     *
     * @type {SubscriptionPricePointAttributes}
     * @memberof SubscriptionPricePoint
     */
    attributes?: SubscriptionPricePointAttributes;
    /**
     *
     * @type {InAppPurchasePricePointRelationships}
     * @memberof SubscriptionPricePoint
     */
    relationships?: InAppPurchasePricePointRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof SubscriptionPricePoint
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const SubscriptionPricePointTypeEnum: {
    readonly SubscriptionPricePoints: "subscriptionPricePoints";
};
export type SubscriptionPricePointTypeEnum = (typeof SubscriptionPricePointTypeEnum)[keyof typeof SubscriptionPricePointTypeEnum];
/**
 * Check if a given object implements the SubscriptionPricePoint interface.
 */
export declare function instanceOfSubscriptionPricePoint(value: object): boolean;
export declare function SubscriptionPricePointFromJSON(json: any): SubscriptionPricePoint;
export declare function SubscriptionPricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPricePoint;
export declare function SubscriptionPricePointToJSON(value?: SubscriptionPricePoint | null): any;
