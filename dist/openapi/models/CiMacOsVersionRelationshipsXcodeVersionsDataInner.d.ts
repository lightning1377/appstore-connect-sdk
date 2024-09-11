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
 * @interface CiMacOsVersionRelationshipsXcodeVersionsDataInner
 */
export interface CiMacOsVersionRelationshipsXcodeVersionsDataInner {
    /**
     *
     * @type {string}
     * @memberof CiMacOsVersionRelationshipsXcodeVersionsDataInner
     */
    type: CiMacOsVersionRelationshipsXcodeVersionsDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CiMacOsVersionRelationshipsXcodeVersionsDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const CiMacOsVersionRelationshipsXcodeVersionsDataInnerTypeEnum: {
    readonly CiXcodeVersions: "ciXcodeVersions";
};
export type CiMacOsVersionRelationshipsXcodeVersionsDataInnerTypeEnum = (typeof CiMacOsVersionRelationshipsXcodeVersionsDataInnerTypeEnum)[keyof typeof CiMacOsVersionRelationshipsXcodeVersionsDataInnerTypeEnum];
/**
 * Check if a given object implements the CiMacOsVersionRelationshipsXcodeVersionsDataInner interface.
 */
export declare function instanceOfCiMacOsVersionRelationshipsXcodeVersionsDataInner(value: object): boolean;
export declare function CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON(json: any): CiMacOsVersionRelationshipsXcodeVersionsDataInner;
export declare function CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiMacOsVersionRelationshipsXcodeVersionsDataInner;
export declare function CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON(value?: CiMacOsVersionRelationshipsXcodeVersionsDataInner | null): any;
