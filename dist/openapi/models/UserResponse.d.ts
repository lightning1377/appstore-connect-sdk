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
import type { App } from "./App";
import type { DocumentLinks } from "./DocumentLinks";
import type { User } from "./User";
/**
 *
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     *
     * @type {User}
     * @memberof UserResponse
     */
    data: User;
    /**
     *
     * @type {Array<App>}
     * @memberof UserResponse
     */
    included?: Array<App>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof UserResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the UserResponse interface.
 */
export declare function instanceOfUserResponse(value: object): boolean;
export declare function UserResponseFromJSON(json: any): UserResponse;
export declare function UserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResponse;
export declare function UserResponseToJSON(value?: UserResponse | null): any;
