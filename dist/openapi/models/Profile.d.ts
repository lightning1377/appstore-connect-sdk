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
import type { ProfileAttributes } from "./ProfileAttributes";
import type { ProfileRelationships } from "./ProfileRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface Profile
 */
export interface Profile {
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    type: ProfileTypeEnum;
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    id: string;
    /**
     *
     * @type {ProfileAttributes}
     * @memberof Profile
     */
    attributes?: ProfileAttributes;
    /**
     *
     * @type {ProfileRelationships}
     * @memberof Profile
     */
    relationships?: ProfileRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof Profile
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const ProfileTypeEnum: {
    readonly Profiles: "profiles";
};
export type ProfileTypeEnum = (typeof ProfileTypeEnum)[keyof typeof ProfileTypeEnum];
/**
 * Check if a given object implements the Profile interface.
 */
export declare function instanceOfProfile(value: object): boolean;
export declare function ProfileFromJSON(json: any): Profile;
export declare function ProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): Profile;
export declare function ProfileToJSON(value?: Profile | null): any;
