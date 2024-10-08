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
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsAppData } from "./AlternativeDistributionKeyCreateRequestDataRelationshipsAppData";
/**
 *
 * @export
 * @interface UserInvitationCreateRequestDataRelationshipsVisibleApps
 */
export interface UserInvitationCreateRequestDataRelationshipsVisibleApps {
    /**
     *
     * @type {Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>}
     * @memberof UserInvitationCreateRequestDataRelationshipsVisibleApps
     */
    data?: Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>;
}
/**
 * Check if a given object implements the UserInvitationCreateRequestDataRelationshipsVisibleApps interface.
 */
export declare function instanceOfUserInvitationCreateRequestDataRelationshipsVisibleApps(value: object): boolean;
export declare function UserInvitationCreateRequestDataRelationshipsVisibleAppsFromJSON(json: any): UserInvitationCreateRequestDataRelationshipsVisibleApps;
export declare function UserInvitationCreateRequestDataRelationshipsVisibleAppsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInvitationCreateRequestDataRelationshipsVisibleApps;
export declare function UserInvitationCreateRequestDataRelationshipsVisibleAppsToJSON(value?: UserInvitationCreateRequestDataRelationshipsVisibleApps | null): any;
