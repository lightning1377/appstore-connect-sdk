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
import type { AlternativeDistributionDomainAttributes } from "./AlternativeDistributionDomainAttributes";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AlternativeDistributionDomain
 */
export interface AlternativeDistributionDomain {
    /**
     *
     * @type {string}
     * @memberof AlternativeDistributionDomain
     */
    type: AlternativeDistributionDomainTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AlternativeDistributionDomain
     */
    id: string;
    /**
     *
     * @type {AlternativeDistributionDomainAttributes}
     * @memberof AlternativeDistributionDomain
     */
    attributes?: AlternativeDistributionDomainAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AlternativeDistributionDomain
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AlternativeDistributionDomainTypeEnum: {
    readonly AlternativeDistributionDomains: "alternativeDistributionDomains";
};
export type AlternativeDistributionDomainTypeEnum = (typeof AlternativeDistributionDomainTypeEnum)[keyof typeof AlternativeDistributionDomainTypeEnum];
/**
 * Check if a given object implements the AlternativeDistributionDomain interface.
 */
export declare function instanceOfAlternativeDistributionDomain(value: object): boolean;
export declare function AlternativeDistributionDomainFromJSON(json: any): AlternativeDistributionDomain;
export declare function AlternativeDistributionDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionDomain;
export declare function AlternativeDistributionDomainToJSON(value?: AlternativeDistributionDomain | null): any;
