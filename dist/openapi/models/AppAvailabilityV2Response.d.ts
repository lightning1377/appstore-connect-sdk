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
import type { AppAvailabilityV2 } from "./AppAvailabilityV2";
import type { DocumentLinks } from "./DocumentLinks";
import type { TerritoryAvailability } from "./TerritoryAvailability";
/**
 *
 * @export
 * @interface AppAvailabilityV2Response
 */
export interface AppAvailabilityV2Response {
    /**
     *
     * @type {AppAvailabilityV2}
     * @memberof AppAvailabilityV2Response
     */
    data: AppAvailabilityV2;
    /**
     *
     * @type {Array<TerritoryAvailability>}
     * @memberof AppAvailabilityV2Response
     */
    included?: Array<TerritoryAvailability>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppAvailabilityV2Response
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppAvailabilityV2Response interface.
 */
export declare function instanceOfAppAvailabilityV2Response(value: object): boolean;
export declare function AppAvailabilityV2ResponseFromJSON(json: any): AppAvailabilityV2Response;
export declare function AppAvailabilityV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2Response;
export declare function AppAvailabilityV2ResponseToJSON(value?: AppAvailabilityV2Response | null): any;
