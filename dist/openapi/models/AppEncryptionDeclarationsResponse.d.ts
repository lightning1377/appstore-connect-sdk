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
import type { AppEncryptionDeclaration } from "./AppEncryptionDeclaration";
import type { AppEncryptionDeclarationsResponseIncludedInner } from "./AppEncryptionDeclarationsResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface AppEncryptionDeclarationsResponse
 */
export interface AppEncryptionDeclarationsResponse {
    /**
     *
     * @type {Array<AppEncryptionDeclaration>}
     * @memberof AppEncryptionDeclarationsResponse
     */
    data: Array<AppEncryptionDeclaration>;
    /**
     *
     * @type {Array<AppEncryptionDeclarationsResponseIncludedInner>}
     * @memberof AppEncryptionDeclarationsResponse
     */
    included?: Array<AppEncryptionDeclarationsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppEncryptionDeclarationsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppEncryptionDeclarationsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AppEncryptionDeclarationsResponse interface.
 */
export declare function instanceOfAppEncryptionDeclarationsResponse(value: object): boolean;
export declare function AppEncryptionDeclarationsResponseFromJSON(json: any): AppEncryptionDeclarationsResponse;
export declare function AppEncryptionDeclarationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationsResponse;
export declare function AppEncryptionDeclarationsResponseToJSON(value?: AppEncryptionDeclarationsResponse | null): any;
