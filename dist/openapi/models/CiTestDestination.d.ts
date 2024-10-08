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
import type { CiTestDestinationKind } from "./CiTestDestinationKind";
/**
 *
 * @export
 * @interface CiTestDestination
 */
export interface CiTestDestination {
    /**
     *
     * @type {string}
     * @memberof CiTestDestination
     */
    deviceTypeName?: string;
    /**
     *
     * @type {string}
     * @memberof CiTestDestination
     */
    deviceTypeIdentifier?: string;
    /**
     *
     * @type {string}
     * @memberof CiTestDestination
     */
    runtimeName?: string;
    /**
     *
     * @type {string}
     * @memberof CiTestDestination
     */
    runtimeIdentifier?: string;
    /**
     *
     * @type {CiTestDestinationKind}
     * @memberof CiTestDestination
     */
    kind?: CiTestDestinationKind;
}
/**
 * Check if a given object implements the CiTestDestination interface.
 */
export declare function instanceOfCiTestDestination(value: object): boolean;
export declare function CiTestDestinationFromJSON(json: any): CiTestDestination;
export declare function CiTestDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiTestDestination;
export declare function CiTestDestinationToJSON(value?: CiTestDestination | null): any;
