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
import type { AppAvailabilityRelationshipsAvailableTerritoriesDataInner } from "./AppAvailabilityRelationshipsAvailableTerritoriesDataInner";
/**
 *
 * @export
 * @interface AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory
 */
export interface AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory {
    /**
     *
     * @type {AppAvailabilityRelationshipsAvailableTerritoriesDataInner}
     * @memberof AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory
     */
    data: AppAvailabilityRelationshipsAvailableTerritoriesDataInner;
}
/**
 * Check if a given object implements the AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory interface.
 */
export declare function instanceOfAppPriceScheduleCreateRequestDataRelationshipsBaseTerritory(value: object): boolean;
export declare function AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON(json: any): AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory;
export declare function AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory;
export declare function AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON(value?: AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory | null): any;
