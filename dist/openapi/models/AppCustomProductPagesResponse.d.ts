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
import type { AppCustomProductPage } from "./AppCustomProductPage";
import type { AppCustomProductPagesResponseIncludedInner } from "./AppCustomProductPagesResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppCustomProductPagesResponse
 */
export interface AppCustomProductPagesResponse {
    /**
     *
     * @type {Array<AppCustomProductPage>}
     * @memberof AppCustomProductPagesResponse
     */
    data: Array<AppCustomProductPage>;
    /**
     *
     * @type {Array<AppCustomProductPagesResponseIncludedInner>}
     * @memberof AppCustomProductPagesResponse
     */
    included?: Array<AppCustomProductPagesResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppCustomProductPagesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppCustomProductPagesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AppCustomProductPagesResponse interface.
 */
export declare function instanceOfAppCustomProductPagesResponse(value: object): boolean;
export declare function AppCustomProductPagesResponseFromJSON(json: any): AppCustomProductPagesResponse;
export declare function AppCustomProductPagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPagesResponse;
export declare function AppCustomProductPagesResponseToJSON(value?: AppCustomProductPagesResponse | null): any;
