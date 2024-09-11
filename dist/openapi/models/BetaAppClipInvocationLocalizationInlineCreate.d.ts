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
import type { BetaAppClipInvocationLocalizationInlineCreateAttributes } from "./BetaAppClipInvocationLocalizationInlineCreateAttributes";
import type { BetaAppClipInvocationLocalizationInlineCreateRelationships } from "./BetaAppClipInvocationLocalizationInlineCreateRelationships";
/**
 *
 * @export
 * @interface BetaAppClipInvocationLocalizationInlineCreate
 */
export interface BetaAppClipInvocationLocalizationInlineCreate {
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationInlineCreate
     */
    type: BetaAppClipInvocationLocalizationInlineCreateTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationInlineCreate
     */
    id?: string;
    /**
     *
     * @type {BetaAppClipInvocationLocalizationInlineCreateAttributes}
     * @memberof BetaAppClipInvocationLocalizationInlineCreate
     */
    attributes: BetaAppClipInvocationLocalizationInlineCreateAttributes;
    /**
     *
     * @type {BetaAppClipInvocationLocalizationInlineCreateRelationships}
     * @memberof BetaAppClipInvocationLocalizationInlineCreate
     */
    relationships?: BetaAppClipInvocationLocalizationInlineCreateRelationships;
}
/**
 * @export
 */
export declare const BetaAppClipInvocationLocalizationInlineCreateTypeEnum: {
    readonly BetaAppClipInvocationLocalizations: "betaAppClipInvocationLocalizations";
};
export type BetaAppClipInvocationLocalizationInlineCreateTypeEnum = (typeof BetaAppClipInvocationLocalizationInlineCreateTypeEnum)[keyof typeof BetaAppClipInvocationLocalizationInlineCreateTypeEnum];
/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationInlineCreate interface.
 */
export declare function instanceOfBetaAppClipInvocationLocalizationInlineCreate(value: object): boolean;
export declare function BetaAppClipInvocationLocalizationInlineCreateFromJSON(json: any): BetaAppClipInvocationLocalizationInlineCreate;
export declare function BetaAppClipInvocationLocalizationInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationInlineCreate;
export declare function BetaAppClipInvocationLocalizationInlineCreateToJSON(value?: BetaAppClipInvocationLocalizationInlineCreate | null): any;
