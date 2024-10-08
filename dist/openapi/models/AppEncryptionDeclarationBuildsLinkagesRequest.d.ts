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
/**
 *
 * @export
 * @interface AppEncryptionDeclarationBuildsLinkagesRequest
 */
export interface AppEncryptionDeclarationBuildsLinkagesRequest {
    /**
     *
     * @type {Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>}
     * @memberof AppEncryptionDeclarationBuildsLinkagesRequest
     */
    data: Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>;
}
/**
 * Check if a given object implements the AppEncryptionDeclarationBuildsLinkagesRequest interface.
 */
export declare function instanceOfAppEncryptionDeclarationBuildsLinkagesRequest(value: object): boolean;
export declare function AppEncryptionDeclarationBuildsLinkagesRequestFromJSON(json: any): AppEncryptionDeclarationBuildsLinkagesRequest;
export declare function AppEncryptionDeclarationBuildsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationBuildsLinkagesRequest;
export declare function AppEncryptionDeclarationBuildsLinkagesRequestToJSON(value?: AppEncryptionDeclarationBuildsLinkagesRequest | null): any;
