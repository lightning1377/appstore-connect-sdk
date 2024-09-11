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
 * @interface AppPreOrderCreateRequestDataAttributes
 */
export interface AppPreOrderCreateRequestDataAttributes {
    /**
     *
     * @type {Date}
     * @memberof AppPreOrderCreateRequestDataAttributes
     */
    appReleaseDate?: Date;
}
/**
 * Check if a given object implements the AppPreOrderCreateRequestDataAttributes interface.
 */
export declare function instanceOfAppPreOrderCreateRequestDataAttributes(value: object): boolean;
export declare function AppPreOrderCreateRequestDataAttributesFromJSON(json: any): AppPreOrderCreateRequestDataAttributes;
export declare function AppPreOrderCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrderCreateRequestDataAttributes;
export declare function AppPreOrderCreateRequestDataAttributesToJSON(value?: AppPreOrderCreateRequestDataAttributes | null): any;
