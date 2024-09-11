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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { InAppPurchasePriceRelationshipsInAppPurchasePricePointData } from "./InAppPurchasePriceRelationshipsInAppPurchasePricePointData";
/**
 *
 * @export
 * @interface InAppPurchasePriceRelationshipsInAppPurchasePricePoint
 */
export interface InAppPurchasePriceRelationshipsInAppPurchasePricePoint {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof InAppPurchasePriceRelationshipsInAppPurchasePricePoint
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {InAppPurchasePriceRelationshipsInAppPurchasePricePointData}
     * @memberof InAppPurchasePriceRelationshipsInAppPurchasePricePoint
     */
    data?: InAppPurchasePriceRelationshipsInAppPurchasePricePointData;
}
/**
 * Check if a given object implements the InAppPurchasePriceRelationshipsInAppPurchasePricePoint interface.
 */
export declare function instanceOfInAppPurchasePriceRelationshipsInAppPurchasePricePoint(value: object): boolean;
export declare function InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSON(json: any): InAppPurchasePriceRelationshipsInAppPurchasePricePoint;
export declare function InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceRelationshipsInAppPurchasePricePoint;
export declare function InAppPurchasePriceRelationshipsInAppPurchasePricePointToJSON(value?: InAppPurchasePriceRelationshipsInAppPurchasePricePoint | null): any;
