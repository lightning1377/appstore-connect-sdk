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
 * @interface AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner
 */
export interface AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner {
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner
     */
    type: AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerTypeEnum: {
    readonly AppScreenshotSets: "appScreenshotSets";
};
export type AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerTypeEnum = (typeof AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerTypeEnum)[keyof typeof AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerTypeEnum];
/**
 * Check if a given object implements the AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner interface.
 */
export declare function instanceOfAppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner(value: object): boolean;
export declare function AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSON(json: any): AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner;
export declare function AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner;
export declare function AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerToJSON(value?: AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner | null): any;
