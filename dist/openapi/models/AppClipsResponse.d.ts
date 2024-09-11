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
import type { AppClip } from "./AppClip";
import type { AppClipsResponseIncludedInner } from "./AppClipsResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppClipsResponse
 */
export interface AppClipsResponse {
    /**
     *
     * @type {Array<AppClip>}
     * @memberof AppClipsResponse
     */
    data: Array<AppClip>;
    /**
     *
     * @type {Array<AppClipsResponseIncludedInner>}
     * @memberof AppClipsResponse
     */
    included?: Array<AppClipsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppClipsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppClipsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AppClipsResponse interface.
 */
export declare function instanceOfAppClipsResponse(value: object): boolean;
export declare function AppClipsResponseFromJSON(json: any): AppClipsResponse;
export declare function AppClipsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipsResponse;
export declare function AppClipsResponseToJSON(value?: AppClipsResponse | null): any;
