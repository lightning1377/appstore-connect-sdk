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
 * @interface AppAvailabilityV2CreateRequestDataAttributes
 */
export interface AppAvailabilityV2CreateRequestDataAttributes {
    /**
     *
     * @type {boolean}
     * @memberof AppAvailabilityV2CreateRequestDataAttributes
     */
    availableInNewTerritories: boolean;
}
/**
 * Check if a given object implements the AppAvailabilityV2CreateRequestDataAttributes interface.
 */
export declare function instanceOfAppAvailabilityV2CreateRequestDataAttributes(value: object): boolean;
export declare function AppAvailabilityV2CreateRequestDataAttributesFromJSON(json: any): AppAvailabilityV2CreateRequestDataAttributes;
export declare function AppAvailabilityV2CreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2CreateRequestDataAttributes;
export declare function AppAvailabilityV2CreateRequestDataAttributesToJSON(value?: AppAvailabilityV2CreateRequestDataAttributes | null): any;
