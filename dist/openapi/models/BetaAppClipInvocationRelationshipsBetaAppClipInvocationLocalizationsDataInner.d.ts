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
 * @interface BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner
 */
export interface BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner {
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner
     */
    type: BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerTypeEnum: {
    readonly BetaAppClipInvocationLocalizations: "betaAppClipInvocationLocalizations";
};
export type BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerTypeEnum = (typeof BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerTypeEnum)[keyof typeof BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerTypeEnum];
/**
 * Check if a given object implements the BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner interface.
 */
export declare function instanceOfBetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner(value: object): boolean;
export declare function BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerFromJSON(json: any): BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner;
export declare function BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner;
export declare function BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerToJSON(value?: BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner | null): any;
