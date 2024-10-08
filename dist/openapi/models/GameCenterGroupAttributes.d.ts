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
 * @interface GameCenterGroupAttributes
 */
export interface GameCenterGroupAttributes {
    /**
     *
     * @type {string}
     * @memberof GameCenterGroupAttributes
     */
    referenceName?: string;
}
/**
 * Check if a given object implements the GameCenterGroupAttributes interface.
 */
export declare function instanceOfGameCenterGroupAttributes(value: object): boolean;
export declare function GameCenterGroupAttributesFromJSON(json: any): GameCenterGroupAttributes;
export declare function GameCenterGroupAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupAttributes;
export declare function GameCenterGroupAttributesToJSON(value?: GameCenterGroupAttributes | null): any;
