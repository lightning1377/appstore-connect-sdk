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
import type { BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner } from "./BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner";
/**
 *
 * @export
 * @interface BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations
 */
export interface BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations {
    /**
     *
     * @type {Array<BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner>}
     * @memberof BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations
     */
    data: Array<BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner>;
}
/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations interface.
 */
export declare function instanceOfBetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations(value: object): boolean;
export declare function BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsFromJSON(json: any): BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations;
export declare function BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations;
export declare function BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsToJSON(value?: BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations | null): any;
