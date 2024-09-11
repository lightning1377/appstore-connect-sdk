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
 */
export declare const UserRole: {
    readonly Admin: "ADMIN";
    readonly Finance: "FINANCE";
    readonly AccountHolder: "ACCOUNT_HOLDER";
    readonly Sales: "SALES";
    readonly Marketing: "MARKETING";
    readonly AppManager: "APP_MANAGER";
    readonly Developer: "DEVELOPER";
    readonly AccessToReports: "ACCESS_TO_REPORTS";
    readonly CustomerSupport: "CUSTOMER_SUPPORT";
    readonly CreateApps: "CREATE_APPS";
    readonly CloudManagedDeveloperId: "CLOUD_MANAGED_DEVELOPER_ID";
    readonly CloudManagedAppDistribution: "CLOUD_MANAGED_APP_DISTRIBUTION";
    readonly GenerateIndividualKeys: "GENERATE_INDIVIDUAL_KEYS";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare function UserRoleFromJSON(json: any): UserRole;
export declare function UserRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRole;
export declare function UserRoleToJSON(value?: UserRole | null): any;
