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
 * @interface AppRelationshipsGameCenterDetailData
 */
export interface AppRelationshipsGameCenterDetailData {
    /**
     *
     * @type {string}
     * @memberof AppRelationshipsGameCenterDetailData
     */
    type: AppRelationshipsGameCenterDetailDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppRelationshipsGameCenterDetailData
     */
    id: string;
}
/**
 * @export
 */
export declare const AppRelationshipsGameCenterDetailDataTypeEnum: {
    readonly GameCenterDetails: "gameCenterDetails";
};
export type AppRelationshipsGameCenterDetailDataTypeEnum = (typeof AppRelationshipsGameCenterDetailDataTypeEnum)[keyof typeof AppRelationshipsGameCenterDetailDataTypeEnum];
/**
 * Check if a given object implements the AppRelationshipsGameCenterDetailData interface.
 */
export declare function instanceOfAppRelationshipsGameCenterDetailData(value: object): boolean;
export declare function AppRelationshipsGameCenterDetailDataFromJSON(json: any): AppRelationshipsGameCenterDetailData;
export declare function AppRelationshipsGameCenterDetailDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsGameCenterDetailData;
export declare function AppRelationshipsGameCenterDetailDataToJSON(value?: AppRelationshipsGameCenterDetailData | null): any;
