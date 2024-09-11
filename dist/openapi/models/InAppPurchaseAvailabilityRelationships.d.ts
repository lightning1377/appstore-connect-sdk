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
import type { AppAvailabilityRelationshipsAvailableTerritories } from "./AppAvailabilityRelationshipsAvailableTerritories";
/**
 *
 * @export
 * @interface InAppPurchaseAvailabilityRelationships
 */
export interface InAppPurchaseAvailabilityRelationships {
    /**
     *
     * @type {AppAvailabilityRelationshipsAvailableTerritories}
     * @memberof InAppPurchaseAvailabilityRelationships
     */
    availableTerritories?: AppAvailabilityRelationshipsAvailableTerritories;
}
/**
 * Check if a given object implements the InAppPurchaseAvailabilityRelationships interface.
 */
export declare function instanceOfInAppPurchaseAvailabilityRelationships(value: object): boolean;
export declare function InAppPurchaseAvailabilityRelationshipsFromJSON(json: any): InAppPurchaseAvailabilityRelationships;
export declare function InAppPurchaseAvailabilityRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAvailabilityRelationships;
export declare function InAppPurchaseAvailabilityRelationshipsToJSON(value?: InAppPurchaseAvailabilityRelationships | null): any;
