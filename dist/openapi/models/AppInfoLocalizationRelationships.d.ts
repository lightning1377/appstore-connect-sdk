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
import type { AppInfoLocalizationRelationshipsAppInfo } from "./AppInfoLocalizationRelationshipsAppInfo";
/**
 *
 * @export
 * @interface AppInfoLocalizationRelationships
 */
export interface AppInfoLocalizationRelationships {
    /**
     *
     * @type {AppInfoLocalizationRelationshipsAppInfo}
     * @memberof AppInfoLocalizationRelationships
     */
    appInfo?: AppInfoLocalizationRelationshipsAppInfo;
}
/**
 * Check if a given object implements the AppInfoLocalizationRelationships interface.
 */
export declare function instanceOfAppInfoLocalizationRelationships(value: object): boolean;
export declare function AppInfoLocalizationRelationshipsFromJSON(json: any): AppInfoLocalizationRelationships;
export declare function AppInfoLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationRelationships;
export declare function AppInfoLocalizationRelationshipsToJSON(value?: AppInfoLocalizationRelationships | null): any;
