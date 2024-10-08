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
import type { AppEncryptionDeclarationDocumentUpdateRequestData } from "./AppEncryptionDeclarationDocumentUpdateRequestData";
/**
 *
 * @export
 * @interface AppEncryptionDeclarationDocumentUpdateRequest
 */
export interface AppEncryptionDeclarationDocumentUpdateRequest {
    /**
     *
     * @type {AppEncryptionDeclarationDocumentUpdateRequestData}
     * @memberof AppEncryptionDeclarationDocumentUpdateRequest
     */
    data: AppEncryptionDeclarationDocumentUpdateRequestData;
}
/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentUpdateRequest interface.
 */
export declare function instanceOfAppEncryptionDeclarationDocumentUpdateRequest(value: object): boolean;
export declare function AppEncryptionDeclarationDocumentUpdateRequestFromJSON(json: any): AppEncryptionDeclarationDocumentUpdateRequest;
export declare function AppEncryptionDeclarationDocumentUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentUpdateRequest;
export declare function AppEncryptionDeclarationDocumentUpdateRequestToJSON(value?: AppEncryptionDeclarationDocumentUpdateRequest | null): any;
