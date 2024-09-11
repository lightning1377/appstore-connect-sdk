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
import { ErrorSourceParameter } from "./ErrorSourceParameter";
import { ErrorSourcePointer } from "./ErrorSourcePointer";
/**
 * @type ErrorResponseErrorsInnerSource
 *
 * @export
 */
export type ErrorResponseErrorsInnerSource = ErrorSourceParameter | ErrorSourcePointer;
export declare function ErrorResponseErrorsInnerSourceFromJSON(json: any): ErrorResponseErrorsInnerSource;
export declare function ErrorResponseErrorsInnerSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponseErrorsInnerSource;
export declare function ErrorResponseErrorsInnerSourceToJSON(value?: ErrorResponseErrorsInnerSource | null): any;
