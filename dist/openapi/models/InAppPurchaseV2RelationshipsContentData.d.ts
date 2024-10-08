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
 * @interface InAppPurchaseV2RelationshipsContentData
 */
export interface InAppPurchaseV2RelationshipsContentData {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsContentData
     */
    type: InAppPurchaseV2RelationshipsContentDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsContentData
     */
    id: string;
}
/**
 * @export
 */
export declare const InAppPurchaseV2RelationshipsContentDataTypeEnum: {
    readonly InAppPurchaseContents: "inAppPurchaseContents";
};
export type InAppPurchaseV2RelationshipsContentDataTypeEnum = (typeof InAppPurchaseV2RelationshipsContentDataTypeEnum)[keyof typeof InAppPurchaseV2RelationshipsContentDataTypeEnum];
/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsContentData interface.
 */
export declare function instanceOfInAppPurchaseV2RelationshipsContentData(value: object): boolean;
export declare function InAppPurchaseV2RelationshipsContentDataFromJSON(json: any): InAppPurchaseV2RelationshipsContentData;
export declare function InAppPurchaseV2RelationshipsContentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsContentData;
export declare function InAppPurchaseV2RelationshipsContentDataToJSON(value?: InAppPurchaseV2RelationshipsContentData | null): any;
