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
/**
 *
 * @export
 * @interface AppStoreVersionExperimentCreateRequestDataAttributes
 */
export interface AppStoreVersionExperimentCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentCreateRequestDataAttributes
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof AppStoreVersionExperimentCreateRequestDataAttributes
     */
    trafficProportion: number;
}
/**
 * Check if a given object implements the AppStoreVersionExperimentCreateRequestDataAttributes interface.
 */
export declare function instanceOfAppStoreVersionExperimentCreateRequestDataAttributes(value: object): boolean;
export declare function AppStoreVersionExperimentCreateRequestDataAttributesFromJSON(json: any): AppStoreVersionExperimentCreateRequestDataAttributes;
export declare function AppStoreVersionExperimentCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentCreateRequestDataAttributes;
export declare function AppStoreVersionExperimentCreateRequestDataAttributesToJSON(value?: AppStoreVersionExperimentCreateRequestDataAttributes | null): any;
