/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface AppPricePointV2RelationshipsPriceTierData
 */
export interface AppPricePointV2RelationshipsPriceTierData {
    /**
     *
     * @type {string}
     * @memberof AppPricePointV2RelationshipsPriceTierData
     */
    type: AppPricePointV2RelationshipsPriceTierDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPricePointV2RelationshipsPriceTierData
     */
    id: string;
}
/**
 * @export
 */
export declare const AppPricePointV2RelationshipsPriceTierDataTypeEnum: {
    readonly AppPriceTiers: "appPriceTiers";
};
export type AppPricePointV2RelationshipsPriceTierDataTypeEnum = typeof AppPricePointV2RelationshipsPriceTierDataTypeEnum[keyof typeof AppPricePointV2RelationshipsPriceTierDataTypeEnum];
/**
 * Check if a given object implements the AppPricePointV2RelationshipsPriceTierData interface.
 */
export declare function instanceOfAppPricePointV2RelationshipsPriceTierData(value: object): boolean;
export declare function AppPricePointV2RelationshipsPriceTierDataFromJSON(json: any): AppPricePointV2RelationshipsPriceTierData;
export declare function AppPricePointV2RelationshipsPriceTierDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV2RelationshipsPriceTierData;
export declare function AppPricePointV2RelationshipsPriceTierDataToJSON(value?: AppPricePointV2RelationshipsPriceTierData | null): any;
