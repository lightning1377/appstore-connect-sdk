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
import type { AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData } from "./AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData";
/**
 *
 * @export
 * @interface BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration
 */
export interface BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration {
    /**
     *
     * @type {AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData}
     * @memberof BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration
     */
    data?: AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData;
}
/**
 * Check if a given object implements the BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration interface.
 */
export declare function instanceOfBuildUpdateRequestDataRelationshipsAppEncryptionDeclaration(value: object): boolean;
export declare function BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationFromJSON(json: any): BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration;
export declare function BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration;
export declare function BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationToJSON(value?: BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration | null): any;
