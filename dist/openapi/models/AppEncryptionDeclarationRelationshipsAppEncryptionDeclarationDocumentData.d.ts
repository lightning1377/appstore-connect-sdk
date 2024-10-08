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
/**
 *
 * @export
 * @interface AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData
 */
export interface AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData {
    /**
     *
     * @type {string}
     * @memberof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData
     */
    type: AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData
     */
    id: string;
}
/**
 * @export
 */
export declare const AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataTypeEnum: {
    readonly AppEncryptionDeclarationDocuments: "appEncryptionDeclarationDocuments";
};
export type AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataTypeEnum = (typeof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataTypeEnum)[keyof typeof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataTypeEnum];
/**
 * Check if a given object implements the AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData interface.
 */
export declare function instanceOfAppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData(value: object): boolean;
export declare function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataFromJSON(json: any): AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData;
export declare function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData;
export declare function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataToJSON(value?: AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData | null): any;
