/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface AppPricePointV2Attributes
 */
export interface AppPricePointV2Attributes {
    /**
     *
     * @type {string}
     * @memberof AppPricePointV2Attributes
     */
    customerPrice?: string;
    /**
     *
     * @type {string}
     * @memberof AppPricePointV2Attributes
     */
    proceeds?: string;
}
/**
 * Check if a given object implements the AppPricePointV2Attributes interface.
 */
export declare function instanceOfAppPricePointV2Attributes(value: object): boolean;
export declare function AppPricePointV2AttributesFromJSON(json: any): AppPricePointV2Attributes;
export declare function AppPricePointV2AttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV2Attributes;
export declare function AppPricePointV2AttributesToJSON(value?: AppPricePointV2Attributes | null): any;
