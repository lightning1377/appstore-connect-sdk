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
import type { BuildBundleAttributes } from "./BuildBundleAttributes";
import type { BuildBundleRelationships } from "./BuildBundleRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface BuildBundle
 */
export interface BuildBundle {
    /**
     *
     * @type {string}
     * @memberof BuildBundle
     */
    type: BuildBundleTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BuildBundle
     */
    id: string;
    /**
     *
     * @type {BuildBundleAttributes}
     * @memberof BuildBundle
     */
    attributes?: BuildBundleAttributes;
    /**
     *
     * @type {BuildBundleRelationships}
     * @memberof BuildBundle
     */
    relationships?: BuildBundleRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof BuildBundle
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const BuildBundleTypeEnum: {
    readonly BuildBundles: "buildBundles";
};
export type BuildBundleTypeEnum = (typeof BuildBundleTypeEnum)[keyof typeof BuildBundleTypeEnum];
/**
 * Check if a given object implements the BuildBundle interface.
 */
export declare function instanceOfBuildBundle(value: object): boolean;
export declare function BuildBundleFromJSON(json: any): BuildBundle;
export declare function BuildBundleFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundle;
export declare function BuildBundleToJSON(value?: BuildBundle | null): any;
