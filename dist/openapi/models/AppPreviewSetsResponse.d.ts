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
import type { AppPreviewSet } from "./AppPreviewSet";
import type { AppPreviewSetsResponseIncludedInner } from "./AppPreviewSetsResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppPreviewSetsResponse
 */
export interface AppPreviewSetsResponse {
    /**
     *
     * @type {Array<AppPreviewSet>}
     * @memberof AppPreviewSetsResponse
     */
    data: Array<AppPreviewSet>;
    /**
     *
     * @type {Array<AppPreviewSetsResponseIncludedInner>}
     * @memberof AppPreviewSetsResponse
     */
    included?: Array<AppPreviewSetsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppPreviewSetsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppPreviewSetsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AppPreviewSetsResponse interface.
 */
export declare function instanceOfAppPreviewSetsResponse(value: object): boolean;
export declare function AppPreviewSetsResponseFromJSON(json: any): AppPreviewSetsResponse;
export declare function AppPreviewSetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetsResponse;
export declare function AppPreviewSetsResponseToJSON(value?: AppPreviewSetsResponse | null): any;
