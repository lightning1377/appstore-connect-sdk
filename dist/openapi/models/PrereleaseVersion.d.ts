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
import type { PrereleaseVersionAttributes } from "./PrereleaseVersionAttributes";
import type { PrereleaseVersionRelationships } from "./PrereleaseVersionRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface PrereleaseVersion
 */
export interface PrereleaseVersion {
    /**
     *
     * @type {string}
     * @memberof PrereleaseVersion
     */
    type: PrereleaseVersionTypeEnum;
    /**
     *
     * @type {string}
     * @memberof PrereleaseVersion
     */
    id: string;
    /**
     *
     * @type {PrereleaseVersionAttributes}
     * @memberof PrereleaseVersion
     */
    attributes?: PrereleaseVersionAttributes;
    /**
     *
     * @type {PrereleaseVersionRelationships}
     * @memberof PrereleaseVersion
     */
    relationships?: PrereleaseVersionRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof PrereleaseVersion
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const PrereleaseVersionTypeEnum: {
    readonly PreReleaseVersions: "preReleaseVersions";
};
export type PrereleaseVersionTypeEnum = (typeof PrereleaseVersionTypeEnum)[keyof typeof PrereleaseVersionTypeEnum];
/**
 * Check if a given object implements the PrereleaseVersion interface.
 */
export declare function instanceOfPrereleaseVersion(value: object): boolean;
export declare function PrereleaseVersionFromJSON(json: any): PrereleaseVersion;
export declare function PrereleaseVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrereleaseVersion;
export declare function PrereleaseVersionToJSON(value?: PrereleaseVersion | null): any;
