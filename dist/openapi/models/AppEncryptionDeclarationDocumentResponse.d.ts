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
import type { AppEncryptionDeclarationDocument } from "./AppEncryptionDeclarationDocument";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AppEncryptionDeclarationDocumentResponse
 */
export interface AppEncryptionDeclarationDocumentResponse {
    /**
     *
     * @type {AppEncryptionDeclarationDocument}
     * @memberof AppEncryptionDeclarationDocumentResponse
     */
    data: AppEncryptionDeclarationDocument;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppEncryptionDeclarationDocumentResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentResponse interface.
 */
export declare function instanceOfAppEncryptionDeclarationDocumentResponse(value: object): boolean;
export declare function AppEncryptionDeclarationDocumentResponseFromJSON(json: any): AppEncryptionDeclarationDocumentResponse;
export declare function AppEncryptionDeclarationDocumentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentResponse;
export declare function AppEncryptionDeclarationDocumentResponseToJSON(value?: AppEncryptionDeclarationDocumentResponse | null): any;
