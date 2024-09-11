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
import type { PhasedReleaseState } from "./PhasedReleaseState";
/**
 *
 * @export
 * @interface AppStoreVersionPhasedReleaseAttributes
 */
export interface AppStoreVersionPhasedReleaseAttributes {
    /**
     *
     * @type {PhasedReleaseState}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    phasedReleaseState?: PhasedReleaseState;
    /**
     *
     * @type {Date}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    startDate?: Date;
    /**
     *
     * @type {number}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    totalPauseDuration?: number;
    /**
     *
     * @type {number}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    currentDayNumber?: number;
}
/**
 * Check if a given object implements the AppStoreVersionPhasedReleaseAttributes interface.
 */
export declare function instanceOfAppStoreVersionPhasedReleaseAttributes(value: object): boolean;
export declare function AppStoreVersionPhasedReleaseAttributesFromJSON(json: any): AppStoreVersionPhasedReleaseAttributes;
export declare function AppStoreVersionPhasedReleaseAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPhasedReleaseAttributes;
export declare function AppStoreVersionPhasedReleaseAttributesToJSON(value?: AppStoreVersionPhasedReleaseAttributes | null): any;
