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
import { AppStoreVersionExperimentTreatment } from "./AppStoreVersionExperimentTreatment";
/**
 * @type AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner
 *
 * @export
 */
export type AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner = AppPreviewSet | AppScreenshotSet | AppStoreVersionExperimentTreatment;
export declare function AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInnerFromJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner;
export declare function AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner;
export declare function AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInnerToJSON(value?: AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner | null): any;
