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
import type { InAppPurchaseV2RelationshipsPromotedPurchase } from "./InAppPurchaseV2RelationshipsPromotedPurchase";
/**
 *
 * @export
 * @interface PromotedPurchaseImageRelationships
 */
export interface PromotedPurchaseImageRelationships {
    /**
     *
     * @type {InAppPurchaseV2RelationshipsPromotedPurchase}
     * @memberof PromotedPurchaseImageRelationships
     */
    promotedPurchase?: InAppPurchaseV2RelationshipsPromotedPurchase;
}
/**
 * Check if a given object implements the PromotedPurchaseImageRelationships interface.
 */
export declare function instanceOfPromotedPurchaseImageRelationships(value: object): boolean;
export declare function PromotedPurchaseImageRelationshipsFromJSON(json: any): PromotedPurchaseImageRelationships;
export declare function PromotedPurchaseImageRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageRelationships;
export declare function PromotedPurchaseImageRelationshipsToJSON(value?: PromotedPurchaseImageRelationships | null): any;
