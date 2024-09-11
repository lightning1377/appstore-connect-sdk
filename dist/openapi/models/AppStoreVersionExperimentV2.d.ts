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
import type { AppStoreVersionExperimentV2Attributes } from "./AppStoreVersionExperimentV2Attributes";
import type { AppStoreVersionExperimentV2Relationships } from "./AppStoreVersionExperimentV2Relationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AppStoreVersionExperimentV2
 */
export interface AppStoreVersionExperimentV2 {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentV2
     */
    type: AppStoreVersionExperimentV2TypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentV2
     */
    id: string;
    /**
     *
     * @type {AppStoreVersionExperimentV2Attributes}
     * @memberof AppStoreVersionExperimentV2
     */
    attributes?: AppStoreVersionExperimentV2Attributes;
    /**
     *
     * @type {AppStoreVersionExperimentV2Relationships}
     * @memberof AppStoreVersionExperimentV2
     */
    relationships?: AppStoreVersionExperimentV2Relationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppStoreVersionExperimentV2
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AppStoreVersionExperimentV2TypeEnum: {
    readonly AppStoreVersionExperiments: "appStoreVersionExperiments";
};
export type AppStoreVersionExperimentV2TypeEnum = (typeof AppStoreVersionExperimentV2TypeEnum)[keyof typeof AppStoreVersionExperimentV2TypeEnum];
/**
 * Check if a given object implements the AppStoreVersionExperimentV2 interface.
 */
export declare function instanceOfAppStoreVersionExperimentV2(value: object): boolean;
export declare function AppStoreVersionExperimentV2FromJSON(json: any): AppStoreVersionExperimentV2;
export declare function AppStoreVersionExperimentV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2;
export declare function AppStoreVersionExperimentV2ToJSON(value?: AppStoreVersionExperimentV2 | null): any;
