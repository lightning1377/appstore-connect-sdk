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
import type { AppStoreVersionSubmissionRelationships } from "./AppStoreVersionSubmissionRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AppStoreVersionSubmission
 */
export interface AppStoreVersionSubmission {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionSubmission
     */
    type: AppStoreVersionSubmissionTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionSubmission
     */
    id: string;
    /**
     *
     * @type {AppStoreVersionSubmissionRelationships}
     * @memberof AppStoreVersionSubmission
     */
    relationships?: AppStoreVersionSubmissionRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppStoreVersionSubmission
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AppStoreVersionSubmissionTypeEnum: {
    readonly AppStoreVersionSubmissions: "appStoreVersionSubmissions";
};
export type AppStoreVersionSubmissionTypeEnum = (typeof AppStoreVersionSubmissionTypeEnum)[keyof typeof AppStoreVersionSubmissionTypeEnum];
/**
 * Check if a given object implements the AppStoreVersionSubmission interface.
 */
export declare function instanceOfAppStoreVersionSubmission(value: object): boolean;
export declare function AppStoreVersionSubmissionFromJSON(json: any): AppStoreVersionSubmission;
export declare function AppStoreVersionSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionSubmission;
export declare function AppStoreVersionSubmissionToJSON(value?: AppStoreVersionSubmission | null): any;
