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
import type { AppStoreVersionLocalization } from "./AppStoreVersionLocalization";
import type { AppStoreVersionLocalizationsResponseIncludedInner } from "./AppStoreVersionLocalizationsResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppStoreVersionLocalizationsResponse
 */
export interface AppStoreVersionLocalizationsResponse {
    /**
     *
     * @type {Array<AppStoreVersionLocalization>}
     * @memberof AppStoreVersionLocalizationsResponse
     */
    data: Array<AppStoreVersionLocalization>;
    /**
     *
     * @type {Array<AppStoreVersionLocalizationsResponseIncludedInner>}
     * @memberof AppStoreVersionLocalizationsResponse
     */
    included?: Array<AppStoreVersionLocalizationsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppStoreVersionLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppStoreVersionLocalizationsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AppStoreVersionLocalizationsResponse interface.
 */
export declare function instanceOfAppStoreVersionLocalizationsResponse(value: object): boolean;
export declare function AppStoreVersionLocalizationsResponseFromJSON(json: any): AppStoreVersionLocalizationsResponse;
export declare function AppStoreVersionLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationsResponse;
export declare function AppStoreVersionLocalizationsResponseToJSON(value?: AppStoreVersionLocalizationsResponse | null): any;
