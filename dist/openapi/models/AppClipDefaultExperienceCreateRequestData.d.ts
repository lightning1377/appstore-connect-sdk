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
import type { AppClipDefaultExperienceCreateRequestDataRelationships } from "./AppClipDefaultExperienceCreateRequestDataRelationships";
/**
 *
 * @export
 * @interface AppClipDefaultExperienceCreateRequestData
 */
export interface AppClipDefaultExperienceCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppClipDefaultExperienceCreateRequestData
     */
    type: AppClipDefaultExperienceCreateRequestDataTypeEnum;
    /**
     *
     * @type {AppClipDefaultExperienceAttributes}
     * @memberof AppClipDefaultExperienceCreateRequestData
     */
    attributes?: AppClipDefaultExperienceAttributes;
    /**
     *
     * @type {AppClipDefaultExperienceCreateRequestDataRelationships}
     * @memberof AppClipDefaultExperienceCreateRequestData
     */
    relationships: AppClipDefaultExperienceCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const AppClipDefaultExperienceCreateRequestDataTypeEnum: {
    readonly AppClipDefaultExperiences: "appClipDefaultExperiences";
};
export type AppClipDefaultExperienceCreateRequestDataTypeEnum = (typeof AppClipDefaultExperienceCreateRequestDataTypeEnum)[keyof typeof AppClipDefaultExperienceCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppClipDefaultExperienceCreateRequestData interface.
 */
export declare function instanceOfAppClipDefaultExperienceCreateRequestData(value: object): boolean;
export declare function AppClipDefaultExperienceCreateRequestDataFromJSON(json: any): AppClipDefaultExperienceCreateRequestData;
export declare function AppClipDefaultExperienceCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceCreateRequestData;
export declare function AppClipDefaultExperienceCreateRequestDataToJSON(value?: AppClipDefaultExperienceCreateRequestData | null): any;
