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
import type { BuildBundleFileSize } from "./BuildBundleFileSize";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface BuildBundleFileSizesResponse
 */
export interface BuildBundleFileSizesResponse {
    /**
     *
     * @type {Array<BuildBundleFileSize>}
     * @memberof BuildBundleFileSizesResponse
     */
    data: Array<BuildBundleFileSize>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof BuildBundleFileSizesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BuildBundleFileSizesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the BuildBundleFileSizesResponse interface.
 */
export declare function instanceOfBuildBundleFileSizesResponse(value: object): boolean;
export declare function BuildBundleFileSizesResponseFromJSON(json: any): BuildBundleFileSizesResponse;
export declare function BuildBundleFileSizesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleFileSizesResponse;
export declare function BuildBundleFileSizesResponseToJSON(value?: BuildBundleFileSizesResponse | null): any;
