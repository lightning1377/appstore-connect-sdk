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
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AppStoreVersionBuildLinkageResponse
 */
export interface AppStoreVersionBuildLinkageResponse {
    /**
     *
     * @type {AppEncryptionDeclarationRelationshipsBuildsDataInner}
     * @memberof AppStoreVersionBuildLinkageResponse
     */
    data: AppEncryptionDeclarationRelationshipsBuildsDataInner;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppStoreVersionBuildLinkageResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppStoreVersionBuildLinkageResponse interface.
 */
export declare function instanceOfAppStoreVersionBuildLinkageResponse(value: object): boolean;
export declare function AppStoreVersionBuildLinkageResponseFromJSON(json: any): AppStoreVersionBuildLinkageResponse;
export declare function AppStoreVersionBuildLinkageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionBuildLinkageResponse;
export declare function AppStoreVersionBuildLinkageResponseToJSON(value?: AppStoreVersionBuildLinkageResponse | null): any;
