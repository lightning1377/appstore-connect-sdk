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
import type { AlternativeDistributionKeyCreateRequestDataAttributes } from "./AlternativeDistributionKeyCreateRequestDataAttributes";
import type { AlternativeDistributionKeyCreateRequestDataRelationships } from "./AlternativeDistributionKeyCreateRequestDataRelationships";
/**
 *
 * @export
 * @interface AlternativeDistributionKeyCreateRequestData
 */
export interface AlternativeDistributionKeyCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof AlternativeDistributionKeyCreateRequestData
     */
    type: AlternativeDistributionKeyCreateRequestDataTypeEnum;
    /**
     *
     * @type {AlternativeDistributionKeyCreateRequestDataAttributes}
     * @memberof AlternativeDistributionKeyCreateRequestData
     */
    attributes: AlternativeDistributionKeyCreateRequestDataAttributes;
    /**
     *
     * @type {AlternativeDistributionKeyCreateRequestDataRelationships}
     * @memberof AlternativeDistributionKeyCreateRequestData
     */
    relationships?: AlternativeDistributionKeyCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const AlternativeDistributionKeyCreateRequestDataTypeEnum: {
    readonly AlternativeDistributionKeys: "alternativeDistributionKeys";
};
export type AlternativeDistributionKeyCreateRequestDataTypeEnum = (typeof AlternativeDistributionKeyCreateRequestDataTypeEnum)[keyof typeof AlternativeDistributionKeyCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the AlternativeDistributionKeyCreateRequestData interface.
 */
export declare function instanceOfAlternativeDistributionKeyCreateRequestData(value: object): boolean;
export declare function AlternativeDistributionKeyCreateRequestDataFromJSON(json: any): AlternativeDistributionKeyCreateRequestData;
export declare function AlternativeDistributionKeyCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionKeyCreateRequestData;
export declare function AlternativeDistributionKeyCreateRequestDataToJSON(value?: AlternativeDistributionKeyCreateRequestData | null): any;
