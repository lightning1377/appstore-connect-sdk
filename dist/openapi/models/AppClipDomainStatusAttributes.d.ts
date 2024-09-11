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
import type { AppClipDomainStatusAttributesDomainsInner } from "./AppClipDomainStatusAttributesDomainsInner";
/**
 *
 * @export
 * @interface AppClipDomainStatusAttributes
 */
export interface AppClipDomainStatusAttributes {
    /**
     *
     * @type {Array<AppClipDomainStatusAttributesDomainsInner>}
     * @memberof AppClipDomainStatusAttributes
     */
    domains?: Array<AppClipDomainStatusAttributesDomainsInner>;
    /**
     *
     * @type {Date}
     * @memberof AppClipDomainStatusAttributes
     */
    lastUpdatedDate?: Date;
}
/**
 * Check if a given object implements the AppClipDomainStatusAttributes interface.
 */
export declare function instanceOfAppClipDomainStatusAttributes(value: object): boolean;
export declare function AppClipDomainStatusAttributesFromJSON(json: any): AppClipDomainStatusAttributes;
export declare function AppClipDomainStatusAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDomainStatusAttributes;
export declare function AppClipDomainStatusAttributesToJSON(value?: AppClipDomainStatusAttributes | null): any;
