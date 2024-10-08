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
 */
export declare const AppEventAssetType: {
    readonly Card: "EVENT_CARD";
    readonly DetailsPage: "EVENT_DETAILS_PAGE";
};
export type AppEventAssetType = (typeof AppEventAssetType)[keyof typeof AppEventAssetType];
export declare function AppEventAssetTypeFromJSON(json: any): AppEventAssetType;
export declare function AppEventAssetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventAssetType;
export declare function AppEventAssetTypeToJSON(value?: AppEventAssetType | null): any;
