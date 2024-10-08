/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
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
export const CertificateType = {
    IosDevelopment: "IOS_DEVELOPMENT",
    IosDistribution: "IOS_DISTRIBUTION",
    MacAppDistribution: "MAC_APP_DISTRIBUTION",
    MacInstallerDistribution: "MAC_INSTALLER_DISTRIBUTION",
    MacAppDevelopment: "MAC_APP_DEVELOPMENT",
    DeveloperIdKext: "DEVELOPER_ID_KEXT",
    DeveloperIdApplication: "DEVELOPER_ID_APPLICATION",
    Development: "DEVELOPMENT",
    Distribution: "DISTRIBUTION",
    PassTypeId: "PASS_TYPE_ID",
    PassTypeIdWithNfc: "PASS_TYPE_ID_WITH_NFC"
} as const;
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

export function CertificateTypeFromJSON(json: any): CertificateType {
    return CertificateTypeFromJSONTyped(json, false);
}

export function CertificateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateType {
    return json as CertificateType;
}

export function CertificateTypeToJSON(value?: CertificateType | null): any {
    return value as any;
}
