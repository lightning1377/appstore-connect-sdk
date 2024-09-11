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
import type { BetaTesterRelationshipsApps } from "./BetaTesterRelationshipsApps";
/**
 *
 * @export
 * @interface UserInvitationRelationships
 */
export interface UserInvitationRelationships {
    /**
     *
     * @type {BetaTesterRelationshipsApps}
     * @memberof UserInvitationRelationships
     */
    visibleApps?: BetaTesterRelationshipsApps;
}
/**
 * Check if a given object implements the UserInvitationRelationships interface.
 */
export declare function instanceOfUserInvitationRelationships(value: object): boolean;
export declare function UserInvitationRelationshipsFromJSON(json: any): UserInvitationRelationships;
export declare function UserInvitationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInvitationRelationships;
export declare function UserInvitationRelationshipsToJSON(value?: UserInvitationRelationships | null): any;
