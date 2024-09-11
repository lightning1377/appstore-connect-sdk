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
import type { DocumentLinks } from "./DocumentLinks";
import type { Profile } from "./Profile";
import type { ProfilesResponseIncludedInner } from "./ProfilesResponseIncludedInner";
/**
 *
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse {
    /**
     *
     * @type {Profile}
     * @memberof ProfileResponse
     */
    data: Profile;
    /**
     *
     * @type {Array<ProfilesResponseIncludedInner>}
     * @memberof ProfileResponse
     */
    included?: Array<ProfilesResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof ProfileResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the ProfileResponse interface.
 */
export declare function instanceOfProfileResponse(value: object): boolean;
export declare function ProfileResponseFromJSON(json: any): ProfileResponse;
export declare function ProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileResponse;
export declare function ProfileResponseToJSON(value?: ProfileResponse | null): any;
