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
import type { AppClipDefaultExperienceAttributes } from "./AppClipDefaultExperienceAttributes";
import type { AppClipDefaultExperienceRelationships } from "./AppClipDefaultExperienceRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AppClipDefaultExperience
 */
export interface AppClipDefaultExperience {
    /**
     *
     * @type {string}
     * @memberof AppClipDefaultExperience
     */
    type: AppClipDefaultExperienceTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipDefaultExperience
     */
    id: string;
    /**
     *
     * @type {AppClipDefaultExperienceAttributes}
     * @memberof AppClipDefaultExperience
     */
    attributes?: AppClipDefaultExperienceAttributes;
    /**
     *
     * @type {AppClipDefaultExperienceRelationships}
     * @memberof AppClipDefaultExperience
     */
    relationships?: AppClipDefaultExperienceRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppClipDefaultExperience
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AppClipDefaultExperienceTypeEnum: {
    readonly AppClipDefaultExperiences: "appClipDefaultExperiences";
};
export type AppClipDefaultExperienceTypeEnum = (typeof AppClipDefaultExperienceTypeEnum)[keyof typeof AppClipDefaultExperienceTypeEnum];
/**
 * Check if a given object implements the AppClipDefaultExperience interface.
 */
export declare function instanceOfAppClipDefaultExperience(value: object): boolean;
export declare function AppClipDefaultExperienceFromJSON(json: any): AppClipDefaultExperience;
export declare function AppClipDefaultExperienceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperience;
export declare function AppClipDefaultExperienceToJSON(value?: AppClipDefaultExperience | null): any;
