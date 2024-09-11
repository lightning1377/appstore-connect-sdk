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
/**
 *
 * @export
 * @interface AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData
 */
export interface AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData {
    /**
     *
     * @type {string}
     * @memberof AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData
     */
    type: AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData
     */
    id: string;
}
/**
 * @export
 */
export declare const AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataTypeEnum: {
    readonly AppStoreVersions: "appStoreVersions";
};
export type AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataTypeEnum = (typeof AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataTypeEnum)[keyof typeof AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataTypeEnum];
/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData interface.
 */
export declare function instanceOfAlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData(value: object): boolean;
export declare function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON(json: any): AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData;
export declare function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData;
export declare function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON(value?: AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData | null): any;
