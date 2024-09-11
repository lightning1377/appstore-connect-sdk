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
import type { CiGitUser } from "./CiGitUser";
/**
 *
 * @export
 * @interface CiBuildRunAttributesSourceCommit
 */
export interface CiBuildRunAttributesSourceCommit {
    /**
     *
     * @type {string}
     * @memberof CiBuildRunAttributesSourceCommit
     */
    commitSha?: string;
    /**
     *
     * @type {string}
     * @memberof CiBuildRunAttributesSourceCommit
     */
    message?: string;
    /**
     *
     * @type {CiGitUser}
     * @memberof CiBuildRunAttributesSourceCommit
     */
    author?: CiGitUser;
    /**
     *
     * @type {CiGitUser}
     * @memberof CiBuildRunAttributesSourceCommit
     */
    committer?: CiGitUser;
    /**
     *
     * @type {string}
     * @memberof CiBuildRunAttributesSourceCommit
     */
    webUrl?: string;
}
/**
 * Check if a given object implements the CiBuildRunAttributesSourceCommit interface.
 */
export declare function instanceOfCiBuildRunAttributesSourceCommit(value: object): boolean;
export declare function CiBuildRunAttributesSourceCommitFromJSON(json: any): CiBuildRunAttributesSourceCommit;
export declare function CiBuildRunAttributesSourceCommitFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunAttributesSourceCommit;
export declare function CiBuildRunAttributesSourceCommitToJSON(value?: CiBuildRunAttributesSourceCommit | null): any;
