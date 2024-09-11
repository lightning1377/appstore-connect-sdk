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
import type { AppStoreVersionPhasedReleaseAttributes } from "./AppStoreVersionPhasedReleaseAttributes";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AppStoreVersionPhasedRelease
 */
export interface AppStoreVersionPhasedRelease {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionPhasedRelease
     */
    type: AppStoreVersionPhasedReleaseTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionPhasedRelease
     */
    id: string;
    /**
     *
     * @type {AppStoreVersionPhasedReleaseAttributes}
     * @memberof AppStoreVersionPhasedRelease
     */
    attributes?: AppStoreVersionPhasedReleaseAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppStoreVersionPhasedRelease
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AppStoreVersionPhasedReleaseTypeEnum: {
    readonly AppStoreVersionPhasedReleases: "appStoreVersionPhasedReleases";
};
export type AppStoreVersionPhasedReleaseTypeEnum = (typeof AppStoreVersionPhasedReleaseTypeEnum)[keyof typeof AppStoreVersionPhasedReleaseTypeEnum];
/**
 * Check if a given object implements the AppStoreVersionPhasedRelease interface.
 */
export declare function instanceOfAppStoreVersionPhasedRelease(value: object): boolean;
export declare function AppStoreVersionPhasedReleaseFromJSON(json: any): AppStoreVersionPhasedRelease;
export declare function AppStoreVersionPhasedReleaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPhasedRelease;
export declare function AppStoreVersionPhasedReleaseToJSON(value?: AppStoreVersionPhasedRelease | null): any;
