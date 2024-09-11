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
import type { AppStoreVersionExperiment } from "./AppStoreVersionExperiment";
import type { AppStoreVersionExperimentsResponseIncludedInner } from "./AppStoreVersionExperimentsResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppStoreVersionExperimentsResponse
 */
export interface AppStoreVersionExperimentsResponse {
    /**
     *
     * @type {Array<AppStoreVersionExperiment>}
     * @memberof AppStoreVersionExperimentsResponse
     */
    data: Array<AppStoreVersionExperiment>;
    /**
     *
     * @type {Array<AppStoreVersionExperimentsResponseIncludedInner>}
     * @memberof AppStoreVersionExperimentsResponse
     */
    included?: Array<AppStoreVersionExperimentsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppStoreVersionExperimentsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppStoreVersionExperimentsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AppStoreVersionExperimentsResponse interface.
 */
export declare function instanceOfAppStoreVersionExperimentsResponse(value: object): boolean;
export declare function AppStoreVersionExperimentsResponseFromJSON(json: any): AppStoreVersionExperimentsResponse;
export declare function AppStoreVersionExperimentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentsResponse;
export declare function AppStoreVersionExperimentsResponseToJSON(value?: AppStoreVersionExperimentsResponse | null): any;
