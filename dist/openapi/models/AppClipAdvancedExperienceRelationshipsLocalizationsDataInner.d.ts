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
 * @interface AppClipAdvancedExperienceRelationshipsLocalizationsDataInner
 */
export interface AppClipAdvancedExperienceRelationshipsLocalizationsDataInner {
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsLocalizationsDataInner
     */
    type: AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsLocalizationsDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum: {
    readonly AppClipAdvancedExperienceLocalizations: "appClipAdvancedExperienceLocalizations";
};
export type AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum = (typeof AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum)[keyof typeof AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerTypeEnum];
/**
 * Check if a given object implements the AppClipAdvancedExperienceRelationshipsLocalizationsDataInner interface.
 */
export declare function instanceOfAppClipAdvancedExperienceRelationshipsLocalizationsDataInner(value: object): boolean;
export declare function AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSON(json: any): AppClipAdvancedExperienceRelationshipsLocalizationsDataInner;
export declare function AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceRelationshipsLocalizationsDataInner;
export declare function AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerToJSON(value?: AppClipAdvancedExperienceRelationshipsLocalizationsDataInner | null): any;
