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
 * @interface CiMacOsVersionAttributes
 */
export interface CiMacOsVersionAttributes {
    /**
     *
     * @type {string}
     * @memberof CiMacOsVersionAttributes
     */
    version?: string;
    /**
     *
     * @type {string}
     * @memberof CiMacOsVersionAttributes
     */
    name?: string;
}
/**
 * Check if a given object implements the CiMacOsVersionAttributes interface.
 */
export declare function instanceOfCiMacOsVersionAttributes(value: object): boolean;
export declare function CiMacOsVersionAttributesFromJSON(json: any): CiMacOsVersionAttributes;
export declare function CiMacOsVersionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiMacOsVersionAttributes;
export declare function CiMacOsVersionAttributesToJSON(value?: CiMacOsVersionAttributes | null): any;
