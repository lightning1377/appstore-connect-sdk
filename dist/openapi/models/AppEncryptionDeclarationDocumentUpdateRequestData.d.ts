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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from "./AppClipAdvancedExperienceImageUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface AppEncryptionDeclarationDocumentUpdateRequestData
 */
export interface AppEncryptionDeclarationDocumentUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppEncryptionDeclarationDocumentUpdateRequestData
     */
    type: AppEncryptionDeclarationDocumentUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppEncryptionDeclarationDocumentUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof AppEncryptionDeclarationDocumentUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const AppEncryptionDeclarationDocumentUpdateRequestDataTypeEnum: {
    readonly AppEncryptionDeclarationDocuments: "appEncryptionDeclarationDocuments";
};
export type AppEncryptionDeclarationDocumentUpdateRequestDataTypeEnum = (typeof AppEncryptionDeclarationDocumentUpdateRequestDataTypeEnum)[keyof typeof AppEncryptionDeclarationDocumentUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentUpdateRequestData interface.
 */
export declare function instanceOfAppEncryptionDeclarationDocumentUpdateRequestData(value: object): boolean;
export declare function AppEncryptionDeclarationDocumentUpdateRequestDataFromJSON(json: any): AppEncryptionDeclarationDocumentUpdateRequestData;
export declare function AppEncryptionDeclarationDocumentUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentUpdateRequestData;
export declare function AppEncryptionDeclarationDocumentUpdateRequestDataToJSON(value?: AppEncryptionDeclarationDocumentUpdateRequestData | null): any;
