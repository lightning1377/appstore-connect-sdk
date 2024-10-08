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
import type { AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner } from "./AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner";
/**
 *
 * @export
 * @interface AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities
 */
export interface AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities {
    /**
     *
     * @type {Array<AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner>}
     * @memberof AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities
     */
    data: Array<AppAvailabilityV2RelationshipsTerritoryAvailabilitiesDataInner>;
}
/**
 * Check if a given object implements the AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities interface.
 */
export declare function instanceOfAppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities(value: object): boolean;
export declare function AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesFromJSON(json: any): AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities;
export declare function AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities;
export declare function AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilitiesToJSON(value?: AppAvailabilityV2CreateRequestDataRelationshipsTerritoryAvailabilities | null): any;
