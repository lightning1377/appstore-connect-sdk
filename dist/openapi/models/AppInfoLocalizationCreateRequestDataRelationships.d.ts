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
import type { AppInfoLocalizationCreateRequestDataRelationshipsAppInfo } from "./AppInfoLocalizationCreateRequestDataRelationshipsAppInfo";
/**
 *
 * @export
 * @interface AppInfoLocalizationCreateRequestDataRelationships
 */
export interface AppInfoLocalizationCreateRequestDataRelationships {
    /**
     *
     * @type {AppInfoLocalizationCreateRequestDataRelationshipsAppInfo}
     * @memberof AppInfoLocalizationCreateRequestDataRelationships
     */
    appInfo: AppInfoLocalizationCreateRequestDataRelationshipsAppInfo;
}
/**
 * Check if a given object implements the AppInfoLocalizationCreateRequestDataRelationships interface.
 */
export declare function instanceOfAppInfoLocalizationCreateRequestDataRelationships(value: object): boolean;
export declare function AppInfoLocalizationCreateRequestDataRelationshipsFromJSON(json: any): AppInfoLocalizationCreateRequestDataRelationships;
export declare function AppInfoLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationCreateRequestDataRelationships;
export declare function AppInfoLocalizationCreateRequestDataRelationshipsToJSON(value?: AppInfoLocalizationCreateRequestDataRelationships | null): any;
