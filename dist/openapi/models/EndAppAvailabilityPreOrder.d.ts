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
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface EndAppAvailabilityPreOrder
 */
export interface EndAppAvailabilityPreOrder {
    /**
     *
     * @type {string}
     * @memberof EndAppAvailabilityPreOrder
     */
    type: EndAppAvailabilityPreOrderTypeEnum;
    /**
     *
     * @type {string}
     * @memberof EndAppAvailabilityPreOrder
     */
    id: string;
    /**
     *
     * @type {ResourceLinks}
     * @memberof EndAppAvailabilityPreOrder
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const EndAppAvailabilityPreOrderTypeEnum: {
    readonly EndAppAvailabilityPreOrders: "endAppAvailabilityPreOrders";
};
export type EndAppAvailabilityPreOrderTypeEnum = (typeof EndAppAvailabilityPreOrderTypeEnum)[keyof typeof EndAppAvailabilityPreOrderTypeEnum];
/**
 * Check if a given object implements the EndAppAvailabilityPreOrder interface.
 */
export declare function instanceOfEndAppAvailabilityPreOrder(value: object): boolean;
export declare function EndAppAvailabilityPreOrderFromJSON(json: any): EndAppAvailabilityPreOrder;
export declare function EndAppAvailabilityPreOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndAppAvailabilityPreOrder;
export declare function EndAppAvailabilityPreOrderToJSON(value?: EndAppAvailabilityPreOrder | null): any;
