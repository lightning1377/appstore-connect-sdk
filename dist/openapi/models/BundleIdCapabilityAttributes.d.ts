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
import type { CapabilitySetting } from "./CapabilitySetting";
import type { CapabilityType } from "./CapabilityType";
/**
 *
 * @export
 * @interface BundleIdCapabilityAttributes
 */
export interface BundleIdCapabilityAttributes {
    /**
     *
     * @type {CapabilityType}
     * @memberof BundleIdCapabilityAttributes
     */
    capabilityType?: CapabilityType;
    /**
     *
     * @type {Array<CapabilitySetting>}
     * @memberof BundleIdCapabilityAttributes
     */
    settings?: Array<CapabilitySetting>;
}
/**
 * Check if a given object implements the BundleIdCapabilityAttributes interface.
 */
export declare function instanceOfBundleIdCapabilityAttributes(value: object): boolean;
export declare function BundleIdCapabilityAttributesFromJSON(json: any): BundleIdCapabilityAttributes;
export declare function BundleIdCapabilityAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapabilityAttributes;
export declare function BundleIdCapabilityAttributesToJSON(value?: BundleIdCapabilityAttributes | null): any;
