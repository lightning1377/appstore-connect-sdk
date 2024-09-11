/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AppPrice } from './AppPrice';
import type { AppPricesResponseIncludedInner } from './AppPricesResponseIncludedInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
/**
 *
 * @export
 * @interface AppPricesResponse
 */
export interface AppPricesResponse {
    /**
     *
     * @type {Array<AppPrice>}
     * @memberof AppPricesResponse
     */
    data: Array<AppPrice>;
    /**
     *
     * @type {Array<AppPricesResponseIncludedInner>}
     * @memberof AppPricesResponse
     */
    included?: Array<AppPricesResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppPricesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppPricesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AppPricesResponse interface.
 */
export declare function instanceOfAppPricesResponse(value: object): boolean;
export declare function AppPricesResponseFromJSON(json: any): AppPricesResponse;
export declare function AppPricesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricesResponse;
export declare function AppPricesResponseToJSON(value?: AppPricesResponse | null): any;
