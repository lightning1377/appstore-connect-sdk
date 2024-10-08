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
import type { ProfileCreateRequestData } from "./ProfileCreateRequestData";
/**
 *
 * @export
 * @interface ProfileCreateRequest
 */
export interface ProfileCreateRequest {
    /**
     *
     * @type {ProfileCreateRequestData}
     * @memberof ProfileCreateRequest
     */
    data: ProfileCreateRequestData;
}
/**
 * Check if a given object implements the ProfileCreateRequest interface.
 */
export declare function instanceOfProfileCreateRequest(value: object): boolean;
export declare function ProfileCreateRequestFromJSON(json: any): ProfileCreateRequest;
export declare function ProfileCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCreateRequest;
export declare function ProfileCreateRequestToJSON(value?: ProfileCreateRequest | null): any;
