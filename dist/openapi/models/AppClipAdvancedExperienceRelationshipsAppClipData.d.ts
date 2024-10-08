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
 * @interface AppClipAdvancedExperienceRelationshipsAppClipData
 */
export interface AppClipAdvancedExperienceRelationshipsAppClipData {
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsAppClipData
     */
    type: AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsAppClipData
     */
    id: string;
}
/**
 * @export
 */
export declare const AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum: {
    readonly AppClips: "appClips";
};
export type AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum = (typeof AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum)[keyof typeof AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum];
/**
 * Check if a given object implements the AppClipAdvancedExperienceRelationshipsAppClipData interface.
 */
export declare function instanceOfAppClipAdvancedExperienceRelationshipsAppClipData(value: object): boolean;
export declare function AppClipAdvancedExperienceRelationshipsAppClipDataFromJSON(json: any): AppClipAdvancedExperienceRelationshipsAppClipData;
export declare function AppClipAdvancedExperienceRelationshipsAppClipDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceRelationshipsAppClipData;
export declare function AppClipAdvancedExperienceRelationshipsAppClipDataToJSON(value?: AppClipAdvancedExperienceRelationshipsAppClipData | null): any;
