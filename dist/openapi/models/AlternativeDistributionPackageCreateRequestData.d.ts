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
import type { AlternativeDistributionPackageCreateRequestDataRelationships } from "./AlternativeDistributionPackageCreateRequestDataRelationships";
/**
 *
 * @export
 * @interface AlternativeDistributionPackageCreateRequestData
 */
export interface AlternativeDistributionPackageCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof AlternativeDistributionPackageCreateRequestData
     */
    type: AlternativeDistributionPackageCreateRequestDataTypeEnum;
    /**
     *
     * @type {AlternativeDistributionPackageCreateRequestDataRelationships}
     * @memberof AlternativeDistributionPackageCreateRequestData
     */
    relationships: AlternativeDistributionPackageCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const AlternativeDistributionPackageCreateRequestDataTypeEnum: {
    readonly AlternativeDistributionPackages: "alternativeDistributionPackages";
};
export type AlternativeDistributionPackageCreateRequestDataTypeEnum = (typeof AlternativeDistributionPackageCreateRequestDataTypeEnum)[keyof typeof AlternativeDistributionPackageCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequestData interface.
 */
export declare function instanceOfAlternativeDistributionPackageCreateRequestData(value: object): boolean;
export declare function AlternativeDistributionPackageCreateRequestDataFromJSON(json: any): AlternativeDistributionPackageCreateRequestData;
export declare function AlternativeDistributionPackageCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageCreateRequestData;
export declare function AlternativeDistributionPackageCreateRequestDataToJSON(value?: AlternativeDistributionPackageCreateRequestData | null): any;
