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
 * @interface AppClipRelationshipsAppData
 */
export interface AppClipRelationshipsAppData {
    /**
     *
     * @type {string}
     * @memberof AppClipRelationshipsAppData
     */
    type: AppClipRelationshipsAppDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipRelationshipsAppData
     */
    id: string;
}
/**
 * @export
 */
export declare const AppClipRelationshipsAppDataTypeEnum: {
    readonly Apps: "apps";
};
export type AppClipRelationshipsAppDataTypeEnum = typeof AppClipRelationshipsAppDataTypeEnum[keyof typeof AppClipRelationshipsAppDataTypeEnum];
/**
 * Check if a given object implements the AppClipRelationshipsAppData interface.
 */
export declare function instanceOfAppClipRelationshipsAppData(value: object): boolean;
export declare function AppClipRelationshipsAppDataFromJSON(json: any): AppClipRelationshipsAppData;
export declare function AppClipRelationshipsAppDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipRelationshipsAppData;
export declare function AppClipRelationshipsAppDataToJSON(value?: AppClipRelationshipsAppData | null): any;
