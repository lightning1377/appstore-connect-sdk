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
/**
 *
 * @export
 * @interface CiProductRelationshipsPrimaryRepositoriesDataInner
 */
export interface CiProductRelationshipsPrimaryRepositoriesDataInner {
    /**
     *
     * @type {string}
     * @memberof CiProductRelationshipsPrimaryRepositoriesDataInner
     */
    type: CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CiProductRelationshipsPrimaryRepositoriesDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum: {
    readonly ScmRepositories: "scmRepositories";
};
export type CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum = (typeof CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum)[keyof typeof CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum];
/**
 * Check if a given object implements the CiProductRelationshipsPrimaryRepositoriesDataInner interface.
 */
export declare function instanceOfCiProductRelationshipsPrimaryRepositoriesDataInner(value: object): boolean;
export declare function CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSON(json: any): CiProductRelationshipsPrimaryRepositoriesDataInner;
export declare function CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductRelationshipsPrimaryRepositoriesDataInner;
export declare function CiProductRelationshipsPrimaryRepositoriesDataInnerToJSON(value?: CiProductRelationshipsPrimaryRepositoriesDataInner | null): any;
