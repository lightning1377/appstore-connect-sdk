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
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppsWithoutIncludesResponse
 */
export interface AppsWithoutIncludesResponse {
    /**
     *
     * @type {Array<App>}
     * @memberof AppsWithoutIncludesResponse
     */
    data: Array<App>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppsWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppsWithoutIncludesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AppsWithoutIncludesResponse interface.
 */
export declare function instanceOfAppsWithoutIncludesResponse(value: object): boolean;
export declare function AppsWithoutIncludesResponseFromJSON(json: any): AppsWithoutIncludesResponse;
export declare function AppsWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppsWithoutIncludesResponse;
export declare function AppsWithoutIncludesResponseToJSON(value?: AppsWithoutIncludesResponse | null): any;
