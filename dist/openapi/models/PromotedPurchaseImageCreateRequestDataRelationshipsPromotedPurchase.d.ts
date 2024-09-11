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
import type { AppRelationshipsPromotedPurchasesDataInner } from "./AppRelationshipsPromotedPurchasesDataInner";
/**
 *
 * @export
 * @interface PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase
 */
export interface PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase {
    /**
     *
     * @type {AppRelationshipsPromotedPurchasesDataInner}
     * @memberof PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase
     */
    data: AppRelationshipsPromotedPurchasesDataInner;
}
/**
 * Check if a given object implements the PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase interface.
 */
export declare function instanceOfPromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase(value: object): boolean;
export declare function PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSON(json: any): PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase;
export declare function PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase;
export declare function PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseToJSON(value?: PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase | null): any;
