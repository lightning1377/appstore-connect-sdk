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
 * @interface AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData
 */
export interface AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData {
    /**
     *
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData
     */
    type: AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData
     */
    id: string;
}
/**
 * @export
 */
export declare const AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataTypeEnum: {
    readonly AppClipHeaderImages: "appClipHeaderImages";
};
export type AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataTypeEnum = (typeof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataTypeEnum)[keyof typeof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataTypeEnum];
/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData interface.
 */
export declare function instanceOfAppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData(value: object): boolean;
export declare function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSON(json: any): AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData;
export declare function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData;
export declare function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataToJSON(value?: AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData | null): any;
