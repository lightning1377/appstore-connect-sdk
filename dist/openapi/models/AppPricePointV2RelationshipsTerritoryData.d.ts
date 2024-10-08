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
 * @interface AppPricePointV2RelationshipsTerritoryData
 */
export interface AppPricePointV2RelationshipsTerritoryData {
    /**
     *
     * @type {string}
     * @memberof AppPricePointV2RelationshipsTerritoryData
     */
    type: AppPricePointV2RelationshipsTerritoryDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPricePointV2RelationshipsTerritoryData
     */
    id: string;
}
/**
 * @export
 */
export declare const AppPricePointV2RelationshipsTerritoryDataTypeEnum: {
    readonly Territories: "territories";
};
export type AppPricePointV2RelationshipsTerritoryDataTypeEnum = typeof AppPricePointV2RelationshipsTerritoryDataTypeEnum[keyof typeof AppPricePointV2RelationshipsTerritoryDataTypeEnum];
/**
 * Check if a given object implements the AppPricePointV2RelationshipsTerritoryData interface.
 */
export declare function instanceOfAppPricePointV2RelationshipsTerritoryData(value: object): boolean;
export declare function AppPricePointV2RelationshipsTerritoryDataFromJSON(json: any): AppPricePointV2RelationshipsTerritoryData;
export declare function AppPricePointV2RelationshipsTerritoryDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV2RelationshipsTerritoryData;
export declare function AppPricePointV2RelationshipsTerritoryDataToJSON(value?: AppPricePointV2RelationshipsTerritoryData | null): any;
