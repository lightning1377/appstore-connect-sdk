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
import type { PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase } from "./PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase";
/**
 *
 * @export
 * @interface PromotedPurchaseImageCreateRequestDataRelationships
 */
export interface PromotedPurchaseImageCreateRequestDataRelationships {
    /**
     *
     * @type {PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase}
     * @memberof PromotedPurchaseImageCreateRequestDataRelationships
     */
    promotedPurchase: PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase;
}
/**
 * Check if a given object implements the PromotedPurchaseImageCreateRequestDataRelationships interface.
 */
export declare function instanceOfPromotedPurchaseImageCreateRequestDataRelationships(value: object): boolean;
export declare function PromotedPurchaseImageCreateRequestDataRelationshipsFromJSON(json: any): PromotedPurchaseImageCreateRequestDataRelationships;
export declare function PromotedPurchaseImageCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageCreateRequestDataRelationships;
export declare function PromotedPurchaseImageCreateRequestDataRelationshipsToJSON(value?: PromotedPurchaseImageCreateRequestDataRelationships | null): any;
