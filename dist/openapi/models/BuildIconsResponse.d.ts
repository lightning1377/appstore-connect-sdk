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
import type { BuildIcon } from "./BuildIcon";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface BuildIconsResponse
 */
export interface BuildIconsResponse {
    /**
     *
     * @type {Array<BuildIcon>}
     * @memberof BuildIconsResponse
     */
    data: Array<BuildIcon>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof BuildIconsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BuildIconsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the BuildIconsResponse interface.
 */
export declare function instanceOfBuildIconsResponse(value: object): boolean;
export declare function BuildIconsResponseFromJSON(json: any): BuildIconsResponse;
export declare function BuildIconsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildIconsResponse;
export declare function BuildIconsResponseToJSON(value?: BuildIconsResponse | null): any;
