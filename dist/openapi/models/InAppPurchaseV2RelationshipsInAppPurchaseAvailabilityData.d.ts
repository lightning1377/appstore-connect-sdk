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
 * @interface InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData
 */
export interface InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData
     */
    type: InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData
     */
    id: string;
}
/**
 * @export
 */
export declare const InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataTypeEnum: {
    readonly InAppPurchaseAvailabilities: "inAppPurchaseAvailabilities";
};
export type InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataTypeEnum = (typeof InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataTypeEnum)[keyof typeof InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataTypeEnum];
/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData interface.
 */
export declare function instanceOfInAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData(value: object): boolean;
export declare function InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataFromJSON(json: any): InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData;
export declare function InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData;
export declare function InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityDataToJSON(value?: InAppPurchaseV2RelationshipsInAppPurchaseAvailabilityData | null): any;
