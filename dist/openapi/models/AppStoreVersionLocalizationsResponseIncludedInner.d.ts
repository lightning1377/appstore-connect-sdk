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
import { AppPreviewSet } from "./AppPreviewSet";
import { AppScreenshotSet } from "./AppScreenshotSet";
import { AppStoreVersion } from "./AppStoreVersion";
/**
 * @type AppStoreVersionLocalizationsResponseIncludedInner
 *
 * @export
 */
export type AppStoreVersionLocalizationsResponseIncludedInner = AppPreviewSet | AppScreenshotSet | AppStoreVersion;
export declare function AppStoreVersionLocalizationsResponseIncludedInnerFromJSON(json: any): AppStoreVersionLocalizationsResponseIncludedInner;
export declare function AppStoreVersionLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationsResponseIncludedInner;
export declare function AppStoreVersionLocalizationsResponseIncludedInnerToJSON(value?: AppStoreVersionLocalizationsResponseIncludedInner | null): any;
