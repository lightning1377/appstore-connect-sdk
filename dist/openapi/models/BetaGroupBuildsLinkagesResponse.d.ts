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
import type { AppEncryptionDeclarationRelationshipsBuildsDataInner } from "./AppEncryptionDeclarationRelationshipsBuildsDataInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface BetaGroupBuildsLinkagesResponse
 */
export interface BetaGroupBuildsLinkagesResponse {
    /**
     *
     * @type {Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>}
     * @memberof BetaGroupBuildsLinkagesResponse
     */
    data: Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof BetaGroupBuildsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BetaGroupBuildsLinkagesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the BetaGroupBuildsLinkagesResponse interface.
 */
export declare function instanceOfBetaGroupBuildsLinkagesResponse(value: object): boolean;
export declare function BetaGroupBuildsLinkagesResponseFromJSON(json: any): BetaGroupBuildsLinkagesResponse;
export declare function BetaGroupBuildsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupBuildsLinkagesResponse;
export declare function BetaGroupBuildsLinkagesResponseToJSON(value?: BetaGroupBuildsLinkagesResponse | null): any;
