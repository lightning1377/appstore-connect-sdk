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
 * @interface AppRelationshipsBetaAppLocalizationsDataInner
 */
export interface AppRelationshipsBetaAppLocalizationsDataInner {
    /**
     *
     * @type {string}
     * @memberof AppRelationshipsBetaAppLocalizationsDataInner
     */
    type: AppRelationshipsBetaAppLocalizationsDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppRelationshipsBetaAppLocalizationsDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const AppRelationshipsBetaAppLocalizationsDataInnerTypeEnum: {
    readonly BetaAppLocalizations: "betaAppLocalizations";
};
export type AppRelationshipsBetaAppLocalizationsDataInnerTypeEnum = (typeof AppRelationshipsBetaAppLocalizationsDataInnerTypeEnum)[keyof typeof AppRelationshipsBetaAppLocalizationsDataInnerTypeEnum];
/**
 * Check if a given object implements the AppRelationshipsBetaAppLocalizationsDataInner interface.
 */
export declare function instanceOfAppRelationshipsBetaAppLocalizationsDataInner(value: object): boolean;
export declare function AppRelationshipsBetaAppLocalizationsDataInnerFromJSON(json: any): AppRelationshipsBetaAppLocalizationsDataInner;
export declare function AppRelationshipsBetaAppLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsBetaAppLocalizationsDataInner;
export declare function AppRelationshipsBetaAppLocalizationsDataInnerToJSON(value?: AppRelationshipsBetaAppLocalizationsDataInner | null): any;
