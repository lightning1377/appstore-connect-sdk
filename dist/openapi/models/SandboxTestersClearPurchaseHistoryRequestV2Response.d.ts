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
import type { DocumentLinks } from "./DocumentLinks";
import type { SandboxTestersClearPurchaseHistoryRequestV2 } from "./SandboxTestersClearPurchaseHistoryRequestV2";
/**
 *
 * @export
 * @interface SandboxTestersClearPurchaseHistoryRequestV2Response
 */
export interface SandboxTestersClearPurchaseHistoryRequestV2Response {
    /**
     *
     * @type {SandboxTestersClearPurchaseHistoryRequestV2}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2Response
     */
    data: SandboxTestersClearPurchaseHistoryRequestV2;
    /**
     *
     * @type {DocumentLinks}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2Response
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2Response interface.
 */
export declare function instanceOfSandboxTestersClearPurchaseHistoryRequestV2Response(value: object): boolean;
export declare function SandboxTestersClearPurchaseHistoryRequestV2ResponseFromJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2Response;
export declare function SandboxTestersClearPurchaseHistoryRequestV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersClearPurchaseHistoryRequestV2Response;
export declare function SandboxTestersClearPurchaseHistoryRequestV2ResponseToJSON(value?: SandboxTestersClearPurchaseHistoryRequestV2Response | null): any;
