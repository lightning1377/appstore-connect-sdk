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
 * @interface AppCustomProductPageAttributes
 */
export interface AppCustomProductPageAttributes {
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageAttributes
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageAttributes
     */
    url?: string;
    /**
     *
     * @type {boolean}
     * @memberof AppCustomProductPageAttributes
     */
    visible?: boolean;
}
/**
 * Check if a given object implements the AppCustomProductPageAttributes interface.
 */
export declare function instanceOfAppCustomProductPageAttributes(value: object): boolean;
export declare function AppCustomProductPageAttributesFromJSON(json: any): AppCustomProductPageAttributes;
export declare function AppCustomProductPageAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageAttributes;
export declare function AppCustomProductPageAttributesToJSON(value?: AppCustomProductPageAttributes | null): any;
