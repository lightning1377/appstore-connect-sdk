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
import type { AgeRatingDeclarationAttributes } from "./AgeRatingDeclarationAttributes";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AgeRatingDeclaration
 */
export interface AgeRatingDeclaration {
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclaration
     */
    type: AgeRatingDeclarationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclaration
     */
    id: string;
    /**
     *
     * @type {AgeRatingDeclarationAttributes}
     * @memberof AgeRatingDeclaration
     */
    attributes?: AgeRatingDeclarationAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AgeRatingDeclaration
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AgeRatingDeclarationTypeEnum: {
    readonly AgeRatingDeclarations: "ageRatingDeclarations";
};
export type AgeRatingDeclarationTypeEnum = (typeof AgeRatingDeclarationTypeEnum)[keyof typeof AgeRatingDeclarationTypeEnum];
/**
 * Check if a given object implements the AgeRatingDeclaration interface.
 */
export declare function instanceOfAgeRatingDeclaration(value: object): boolean;
export declare function AgeRatingDeclarationFromJSON(json: any): AgeRatingDeclaration;
export declare function AgeRatingDeclarationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgeRatingDeclaration;
export declare function AgeRatingDeclarationToJSON(value?: AgeRatingDeclaration | null): any;
