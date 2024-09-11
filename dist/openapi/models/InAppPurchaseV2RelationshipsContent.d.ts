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
import type { InAppPurchaseV2RelationshipsContentData } from "./InAppPurchaseV2RelationshipsContentData";
/**
 *
 * @export
 * @interface InAppPurchaseV2RelationshipsContent
 */
export interface InAppPurchaseV2RelationshipsContent {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof InAppPurchaseV2RelationshipsContent
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {InAppPurchaseV2RelationshipsContentData}
     * @memberof InAppPurchaseV2RelationshipsContent
     */
    data?: InAppPurchaseV2RelationshipsContentData;
}
/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsContent interface.
 */
export declare function instanceOfInAppPurchaseV2RelationshipsContent(value: object): boolean;
export declare function InAppPurchaseV2RelationshipsContentFromJSON(json: any): InAppPurchaseV2RelationshipsContent;
export declare function InAppPurchaseV2RelationshipsContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsContent;
export declare function InAppPurchaseV2RelationshipsContentToJSON(value?: InAppPurchaseV2RelationshipsContent | null): any;
