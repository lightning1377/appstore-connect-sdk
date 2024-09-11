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
import type { AppPreview } from "./AppPreview";
import type { AppPreviewSet } from "./AppPreviewSet";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppPreviewsResponse
 */
export interface AppPreviewsResponse {
    /**
     *
     * @type {Array<AppPreview>}
     * @memberof AppPreviewsResponse
     */
    data: Array<AppPreview>;
    /**
     *
     * @type {Array<AppPreviewSet>}
     * @memberof AppPreviewsResponse
     */
    included?: Array<AppPreviewSet>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppPreviewsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppPreviewsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AppPreviewsResponse interface.
 */
export declare function instanceOfAppPreviewsResponse(value: object): boolean;
export declare function AppPreviewsResponseFromJSON(json: any): AppPreviewsResponse;
export declare function AppPreviewsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewsResponse;
export declare function AppPreviewsResponseToJSON(value?: AppPreviewsResponse | null): any;
