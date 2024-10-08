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
import { InAppPurchasePrice } from "./InAppPurchasePrice";
import { InAppPurchaseV2 } from "./InAppPurchaseV2";
import { Territory } from "./Territory";
/**
 * @type InAppPurchasePriceScheduleResponseIncludedInner
 *
 * @export
 */
export type InAppPurchasePriceScheduleResponseIncludedInner = InAppPurchasePrice | InAppPurchaseV2 | Territory;
export declare function InAppPurchasePriceScheduleResponseIncludedInnerFromJSON(json: any): InAppPurchasePriceScheduleResponseIncludedInner;
export declare function InAppPurchasePriceScheduleResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleResponseIncludedInner;
export declare function InAppPurchasePriceScheduleResponseIncludedInnerToJSON(value?: InAppPurchasePriceScheduleResponseIncludedInner | null): any;
