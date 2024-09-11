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
import type { App } from "./App";
import type { InAppPurchase } from "./InAppPurchase";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface InAppPurchasesResponse
 */
export interface InAppPurchasesResponse {
    /**
     *
     * @type {Array<InAppPurchase>}
     * @memberof InAppPurchasesResponse
     */
    data: Array<InAppPurchase>;
    /**
     *
     * @type {Array<App>}
     * @memberof InAppPurchasesResponse
     */
    included?: Array<App>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof InAppPurchasesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof InAppPurchasesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the InAppPurchasesResponse interface.
 */
export declare function instanceOfInAppPurchasesResponse(value: object): boolean;
export declare function InAppPurchasesResponseFromJSON(json: any): InAppPurchasesResponse;
export declare function InAppPurchasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasesResponse;
export declare function InAppPurchasesResponseToJSON(value?: InAppPurchasesResponse | null): any;
