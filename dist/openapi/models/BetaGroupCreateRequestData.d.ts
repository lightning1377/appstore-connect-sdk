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
import type { BetaGroupCreateRequestDataAttributes } from "./BetaGroupCreateRequestDataAttributes";
import type { BetaGroupCreateRequestDataRelationships } from "./BetaGroupCreateRequestDataRelationships";
/**
 *
 * @export
 * @interface BetaGroupCreateRequestData
 */
export interface BetaGroupCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof BetaGroupCreateRequestData
     */
    type: BetaGroupCreateRequestDataTypeEnum;
    /**
     *
     * @type {BetaGroupCreateRequestDataAttributes}
     * @memberof BetaGroupCreateRequestData
     */
    attributes: BetaGroupCreateRequestDataAttributes;
    /**
     *
     * @type {BetaGroupCreateRequestDataRelationships}
     * @memberof BetaGroupCreateRequestData
     */
    relationships: BetaGroupCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const BetaGroupCreateRequestDataTypeEnum: {
    readonly BetaGroups: "betaGroups";
};
export type BetaGroupCreateRequestDataTypeEnum = (typeof BetaGroupCreateRequestDataTypeEnum)[keyof typeof BetaGroupCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the BetaGroupCreateRequestData interface.
 */
export declare function instanceOfBetaGroupCreateRequestData(value: object): boolean;
export declare function BetaGroupCreateRequestDataFromJSON(json: any): BetaGroupCreateRequestData;
export declare function BetaGroupCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupCreateRequestData;
export declare function BetaGroupCreateRequestDataToJSON(value?: BetaGroupCreateRequestData | null): any;
