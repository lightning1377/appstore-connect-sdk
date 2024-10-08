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
import type { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion } from "./AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion";
import type { AppStoreReviewDetailRelationshipsAppStoreReviewAttachments } from "./AppStoreReviewDetailRelationshipsAppStoreReviewAttachments";
/**
 *
 * @export
 * @interface AppStoreReviewDetailRelationships
 */
export interface AppStoreReviewDetailRelationships {
    /**
     *
     * @type {AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion}
     * @memberof AppStoreReviewDetailRelationships
     */
    appStoreVersion?: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion;
    /**
     *
     * @type {AppStoreReviewDetailRelationshipsAppStoreReviewAttachments}
     * @memberof AppStoreReviewDetailRelationships
     */
    appStoreReviewAttachments?: AppStoreReviewDetailRelationshipsAppStoreReviewAttachments;
}
/**
 * Check if a given object implements the AppStoreReviewDetailRelationships interface.
 */
export declare function instanceOfAppStoreReviewDetailRelationships(value: object): boolean;
export declare function AppStoreReviewDetailRelationshipsFromJSON(json: any): AppStoreReviewDetailRelationships;
export declare function AppStoreReviewDetailRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewDetailRelationships;
export declare function AppStoreReviewDetailRelationshipsToJSON(value?: AppStoreReviewDetailRelationships | null): any;
