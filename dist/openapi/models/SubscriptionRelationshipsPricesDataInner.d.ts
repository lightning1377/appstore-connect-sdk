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
 * @interface SubscriptionRelationshipsPricesDataInner
 */
export interface SubscriptionRelationshipsPricesDataInner {
    /**
     *
     * @type {string}
     * @memberof SubscriptionRelationshipsPricesDataInner
     */
    type: SubscriptionRelationshipsPricesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionRelationshipsPricesDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const SubscriptionRelationshipsPricesDataInnerTypeEnum: {
    readonly SubscriptionPrices: "subscriptionPrices";
};
export type SubscriptionRelationshipsPricesDataInnerTypeEnum = (typeof SubscriptionRelationshipsPricesDataInnerTypeEnum)[keyof typeof SubscriptionRelationshipsPricesDataInnerTypeEnum];
/**
 * Check if a given object implements the SubscriptionRelationshipsPricesDataInner interface.
 */
export declare function instanceOfSubscriptionRelationshipsPricesDataInner(value: object): boolean;
export declare function SubscriptionRelationshipsPricesDataInnerFromJSON(json: any): SubscriptionRelationshipsPricesDataInner;
export declare function SubscriptionRelationshipsPricesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsPricesDataInner;
export declare function SubscriptionRelationshipsPricesDataInnerToJSON(value?: SubscriptionRelationshipsPricesDataInner | null): any;
