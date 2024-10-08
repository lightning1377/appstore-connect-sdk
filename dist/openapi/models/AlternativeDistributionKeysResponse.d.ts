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
import type { AlternativeDistributionKey } from "./AlternativeDistributionKey";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AlternativeDistributionKeysResponse
 */
export interface AlternativeDistributionKeysResponse {
    /**
     *
     * @type {Array<AlternativeDistributionKey>}
     * @memberof AlternativeDistributionKeysResponse
     */
    data: Array<AlternativeDistributionKey>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AlternativeDistributionKeysResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AlternativeDistributionKeysResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AlternativeDistributionKeysResponse interface.
 */
export declare function instanceOfAlternativeDistributionKeysResponse(value: object): boolean;
export declare function AlternativeDistributionKeysResponseFromJSON(json: any): AlternativeDistributionKeysResponse;
export declare function AlternativeDistributionKeysResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionKeysResponse;
export declare function AlternativeDistributionKeysResponseToJSON(value?: AlternativeDistributionKeysResponse | null): any;
