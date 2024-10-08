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
import type { AppCustomProductPageVersion } from "./AppCustomProductPageVersion";
import type { AppCustomProductPageVersionsResponseIncludedInner } from "./AppCustomProductPageVersionsResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppCustomProductPageVersionsResponse
 */
export interface AppCustomProductPageVersionsResponse {
    /**
     *
     * @type {Array<AppCustomProductPageVersion>}
     * @memberof AppCustomProductPageVersionsResponse
     */
    data: Array<AppCustomProductPageVersion>;
    /**
     *
     * @type {Array<AppCustomProductPageVersionsResponseIncludedInner>}
     * @memberof AppCustomProductPageVersionsResponse
     */
    included?: Array<AppCustomProductPageVersionsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppCustomProductPageVersionsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppCustomProductPageVersionsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AppCustomProductPageVersionsResponse interface.
 */
export declare function instanceOfAppCustomProductPageVersionsResponse(value: object): boolean;
export declare function AppCustomProductPageVersionsResponseFromJSON(json: any): AppCustomProductPageVersionsResponse;
export declare function AppCustomProductPageVersionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionsResponse;
export declare function AppCustomProductPageVersionsResponseToJSON(value?: AppCustomProductPageVersionsResponse | null): any;
