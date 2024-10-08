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
 * @interface BuildIconsWithoutIncludesResponse
 */
export interface BuildIconsWithoutIncludesResponse {
    /**
     *
     * @type {Array<BuildIcon>}
     * @memberof BuildIconsWithoutIncludesResponse
     */
    data: Array<BuildIcon>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof BuildIconsWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BuildIconsWithoutIncludesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the BuildIconsWithoutIncludesResponse interface.
 */
export declare function instanceOfBuildIconsWithoutIncludesResponse(value: object): boolean;
export declare function BuildIconsWithoutIncludesResponseFromJSON(json: any): BuildIconsWithoutIncludesResponse;
export declare function BuildIconsWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildIconsWithoutIncludesResponse;
export declare function BuildIconsWithoutIncludesResponseToJSON(value?: BuildIconsWithoutIncludesResponse | null): any;
