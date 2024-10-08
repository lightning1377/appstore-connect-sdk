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
import type { BundleIdCapability } from "./BundleIdCapability";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface BundleIdCapabilitiesWithoutIncludesResponse
 */
export interface BundleIdCapabilitiesWithoutIncludesResponse {
    /**
     *
     * @type {Array<BundleIdCapability>}
     * @memberof BundleIdCapabilitiesWithoutIncludesResponse
     */
    data: Array<BundleIdCapability>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof BundleIdCapabilitiesWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BundleIdCapabilitiesWithoutIncludesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the BundleIdCapabilitiesWithoutIncludesResponse interface.
 */
export declare function instanceOfBundleIdCapabilitiesWithoutIncludesResponse(value: object): boolean;
export declare function BundleIdCapabilitiesWithoutIncludesResponseFromJSON(json: any): BundleIdCapabilitiesWithoutIncludesResponse;
export declare function BundleIdCapabilitiesWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapabilitiesWithoutIncludesResponse;
export declare function BundleIdCapabilitiesWithoutIncludesResponseToJSON(value?: BundleIdCapabilitiesWithoutIncludesResponse | null): any;
