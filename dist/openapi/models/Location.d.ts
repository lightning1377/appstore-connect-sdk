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
 * @interface Location
 */
export interface Location {
    /**
     *
     * @type {number}
     * @memberof Location
     */
    latitude?: number;
    /**
     *
     * @type {number}
     * @memberof Location
     */
    longitude?: number;
}
/**
 * Check if a given object implements the Location interface.
 */
export declare function instanceOfLocation(value: object): boolean;
export declare function LocationFromJSON(json: any): Location;
export declare function LocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Location;
export declare function LocationToJSON(value?: Location | null): any;
