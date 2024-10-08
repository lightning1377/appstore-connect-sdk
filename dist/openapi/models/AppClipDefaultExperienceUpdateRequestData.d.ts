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
import type { AppClipDefaultExperienceUpdateRequestDataRelationships } from "./AppClipDefaultExperienceUpdateRequestDataRelationships";
/**
 *
 * @export
 * @interface AppClipDefaultExperienceUpdateRequestData
 */
export interface AppClipDefaultExperienceUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppClipDefaultExperienceUpdateRequestData
     */
    type: AppClipDefaultExperienceUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipDefaultExperienceUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppClipDefaultExperienceAttributes}
     * @memberof AppClipDefaultExperienceUpdateRequestData
     */
    attributes?: AppClipDefaultExperienceAttributes;
    /**
     *
     * @type {AppClipDefaultExperienceUpdateRequestDataRelationships}
     * @memberof AppClipDefaultExperienceUpdateRequestData
     */
    relationships?: AppClipDefaultExperienceUpdateRequestDataRelationships;
}
/**
 * @export
 */
export declare const AppClipDefaultExperienceUpdateRequestDataTypeEnum: {
    readonly AppClipDefaultExperiences: "appClipDefaultExperiences";
};
export type AppClipDefaultExperienceUpdateRequestDataTypeEnum = (typeof AppClipDefaultExperienceUpdateRequestDataTypeEnum)[keyof typeof AppClipDefaultExperienceUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppClipDefaultExperienceUpdateRequestData interface.
 */
export declare function instanceOfAppClipDefaultExperienceUpdateRequestData(value: object): boolean;
export declare function AppClipDefaultExperienceUpdateRequestDataFromJSON(json: any): AppClipDefaultExperienceUpdateRequestData;
export declare function AppClipDefaultExperienceUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceUpdateRequestData;
export declare function AppClipDefaultExperienceUpdateRequestDataToJSON(value?: AppClipDefaultExperienceUpdateRequestData | null): any;
