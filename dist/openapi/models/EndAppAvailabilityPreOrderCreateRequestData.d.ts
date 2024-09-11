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
import type { EndAppAvailabilityPreOrderCreateRequestDataRelationships } from "./EndAppAvailabilityPreOrderCreateRequestDataRelationships";
/**
 *
 * @export
 * @interface EndAppAvailabilityPreOrderCreateRequestData
 */
export interface EndAppAvailabilityPreOrderCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof EndAppAvailabilityPreOrderCreateRequestData
     */
    type: EndAppAvailabilityPreOrderCreateRequestDataTypeEnum;
    /**
     *
     * @type {EndAppAvailabilityPreOrderCreateRequestDataRelationships}
     * @memberof EndAppAvailabilityPreOrderCreateRequestData
     */
    relationships: EndAppAvailabilityPreOrderCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const EndAppAvailabilityPreOrderCreateRequestDataTypeEnum: {
    readonly EndAppAvailabilityPreOrders: "endAppAvailabilityPreOrders";
};
export type EndAppAvailabilityPreOrderCreateRequestDataTypeEnum = (typeof EndAppAvailabilityPreOrderCreateRequestDataTypeEnum)[keyof typeof EndAppAvailabilityPreOrderCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the EndAppAvailabilityPreOrderCreateRequestData interface.
 */
export declare function instanceOfEndAppAvailabilityPreOrderCreateRequestData(value: object): boolean;
export declare function EndAppAvailabilityPreOrderCreateRequestDataFromJSON(json: any): EndAppAvailabilityPreOrderCreateRequestData;
export declare function EndAppAvailabilityPreOrderCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndAppAvailabilityPreOrderCreateRequestData;
export declare function EndAppAvailabilityPreOrderCreateRequestDataToJSON(value?: EndAppAvailabilityPreOrderCreateRequestData | null): any;
