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
import type { DocumentLinks } from "./DocumentLinks";
import type { PromotedPurchase } from "./PromotedPurchase";
import type { PromotedPurchaseImage } from "./PromotedPurchaseImage";
/**
 *
 * @export
 * @interface PromotedPurchaseImageResponse
 */
export interface PromotedPurchaseImageResponse {
    /**
     *
     * @type {PromotedPurchaseImage}
     * @memberof PromotedPurchaseImageResponse
     */
    data: PromotedPurchaseImage;
    /**
     *
     * @type {Array<PromotedPurchase>}
     * @memberof PromotedPurchaseImageResponse
     */
    included?: Array<PromotedPurchase>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof PromotedPurchaseImageResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the PromotedPurchaseImageResponse interface.
 */
export declare function instanceOfPromotedPurchaseImageResponse(value: object): boolean;
export declare function PromotedPurchaseImageResponseFromJSON(json: any): PromotedPurchaseImageResponse;
export declare function PromotedPurchaseImageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageResponse;
export declare function PromotedPurchaseImageResponseToJSON(value?: PromotedPurchaseImageResponse | null): any;
