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

import { BundleId, instanceOfBundleId, BundleIdFromJSON, BundleIdFromJSONTyped, BundleIdToJSON } from "./BundleId";
import { Certificate, instanceOfCertificate, CertificateFromJSON, CertificateFromJSONTyped, CertificateToJSON } from "./Certificate";
import { Device, instanceOfDevice, DeviceFromJSON, DeviceFromJSONTyped, DeviceToJSON } from "./Device";

/**
 * @type ProfilesResponseIncludedInner
 *
 * @export
 */
export type ProfilesResponseIncludedInner = BundleId | Certificate | Device;

export function ProfilesResponseIncludedInnerFromJSON(json: any): ProfilesResponseIncludedInner {
    return ProfilesResponseIncludedInnerFromJSONTyped(json, false);
}

export function ProfilesResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfilesResponseIncludedInner {
    if (json === undefined || json === null) {
        return json;
    }
    return { ...BundleIdFromJSONTyped(json, true), ...CertificateFromJSONTyped(json, true), ...DeviceFromJSONTyped(json, true) };
}

export function ProfilesResponseIncludedInnerToJSON(value?: ProfilesResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfBundleId(value)) {
        return BundleIdToJSON(value as BundleId);
    }
    if (instanceOfCertificate(value)) {
        return CertificateToJSON(value as Certificate);
    }
    if (instanceOfDevice(value)) {
        return DeviceToJSON(value as Device);
    }

    return {};
}
