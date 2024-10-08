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
import type { DocumentLinks } from "./DocumentLinks";
import type { InAppPurchaseAvailability } from "./InAppPurchaseAvailability";
import type { Territory } from "./Territory";
/**
 *
 * @export
 * @interface InAppPurchaseAvailabilityResponse
 */
export interface InAppPurchaseAvailabilityResponse {
    /**
     *
     * @type {InAppPurchaseAvailability}
     * @memberof InAppPurchaseAvailabilityResponse
     */
    data: InAppPurchaseAvailability;
    /**
     *
     * @type {Array<Territory>}
     * @memberof InAppPurchaseAvailabilityResponse
     */
    included?: Array<Territory>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof InAppPurchaseAvailabilityResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the InAppPurchaseAvailabilityResponse interface.
 */
export declare function instanceOfInAppPurchaseAvailabilityResponse(value: object): boolean;
export declare function InAppPurchaseAvailabilityResponseFromJSON(json: any): InAppPurchaseAvailabilityResponse;
export declare function InAppPurchaseAvailabilityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAvailabilityResponse;
export declare function InAppPurchaseAvailabilityResponseToJSON(value?: InAppPurchaseAvailabilityResponse | null): any;
