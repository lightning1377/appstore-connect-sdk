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
import { ErrorLinksAssociatedOneOf } from "./ErrorLinksAssociatedOneOf";
/**
 * @type ErrorLinksAssociated
 *
 * @export
 */
export type ErrorLinksAssociated = ErrorLinksAssociatedOneOf | string;
export declare function ErrorLinksAssociatedFromJSON(json: any): ErrorLinksAssociated;
export declare function ErrorLinksAssociatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorLinksAssociated;
export declare function ErrorLinksAssociatedToJSON(value?: ErrorLinksAssociated | null): any;
