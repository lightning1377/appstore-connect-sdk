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
import { AppCustomProductPage } from "./AppCustomProductPage";
import { AppCustomProductPageLocalization } from "./AppCustomProductPageLocalization";
/**
 * @type AppCustomProductPageVersionsResponseIncludedInner
 *
 * @export
 */
export type AppCustomProductPageVersionsResponseIncludedInner = AppCustomProductPage | AppCustomProductPageLocalization;
export declare function AppCustomProductPageVersionsResponseIncludedInnerFromJSON(json: any): AppCustomProductPageVersionsResponseIncludedInner;
export declare function AppCustomProductPageVersionsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionsResponseIncludedInner;
export declare function AppCustomProductPageVersionsResponseIncludedInnerToJSON(value?: AppCustomProductPageVersionsResponseIncludedInner | null): any;
