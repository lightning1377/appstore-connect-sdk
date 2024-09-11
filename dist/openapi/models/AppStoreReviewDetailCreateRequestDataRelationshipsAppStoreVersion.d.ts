/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData } from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData';
/**
 *
 * @export
 * @interface AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion
 */
export interface AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion {
    /**
     *
     * @type {AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData}
     * @memberof AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion
     */
    data: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData;
}
/**
 * Check if a given object implements the AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion interface.
 */
export declare function instanceOfAppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion(value: object): boolean;
export declare function AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSON(json: any): AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion;
export declare function AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion;
export declare function AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionToJSON(value?: AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion | null): any;
