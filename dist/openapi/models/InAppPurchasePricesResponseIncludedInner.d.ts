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
import { InAppPurchasePricePoint } from "./InAppPurchasePricePoint";
import { Territory } from "./Territory";
/**
 * @type InAppPurchasePricesResponseIncludedInner
 *
 * @export
 */
export type InAppPurchasePricesResponseIncludedInner = InAppPurchasePricePoint | Territory;
export declare function InAppPurchasePricesResponseIncludedInnerFromJSON(json: any): InAppPurchasePricesResponseIncludedInner;
export declare function InAppPurchasePricesResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePricesResponseIncludedInner;
export declare function InAppPurchasePricesResponseIncludedInnerToJSON(value?: InAppPurchasePricesResponseIncludedInner | null): any;
