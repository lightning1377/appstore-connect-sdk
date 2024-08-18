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

import { exists, mapValues } from "../runtime";
import type { BundleIdCapabilityCreateRequestDataRelationshipsBundleId } from "./BundleIdCapabilityCreateRequestDataRelationshipsBundleId";
import { BundleIdCapabilityCreateRequestDataRelationshipsBundleIdFromJSON, BundleIdCapabilityCreateRequestDataRelationshipsBundleIdFromJSONTyped, BundleIdCapabilityCreateRequestDataRelationshipsBundleIdToJSON } from "./BundleIdCapabilityCreateRequestDataRelationshipsBundleId";
import type { ProfileCreateRequestDataRelationshipsCertificates } from "./ProfileCreateRequestDataRelationshipsCertificates";
import { ProfileCreateRequestDataRelationshipsCertificatesFromJSON, ProfileCreateRequestDataRelationshipsCertificatesFromJSONTyped, ProfileCreateRequestDataRelationshipsCertificatesToJSON } from "./ProfileCreateRequestDataRelationshipsCertificates";
import type { ProfileCreateRequestDataRelationshipsDevices } from "./ProfileCreateRequestDataRelationshipsDevices";
import { ProfileCreateRequestDataRelationshipsDevicesFromJSON, ProfileCreateRequestDataRelationshipsDevicesFromJSONTyped, ProfileCreateRequestDataRelationshipsDevicesToJSON } from "./ProfileCreateRequestDataRelationshipsDevices";

/**
 *
 * @export
 * @interface ProfileCreateRequestDataRelationships
 */
export interface ProfileCreateRequestDataRelationships {
    /**
     *
     * @type {BundleIdCapabilityCreateRequestDataRelationshipsBundleId}
     * @memberof ProfileCreateRequestDataRelationships
     */
    bundleId: BundleIdCapabilityCreateRequestDataRelationshipsBundleId;
    /**
     *
     * @type {ProfileCreateRequestDataRelationshipsDevices}
     * @memberof ProfileCreateRequestDataRelationships
     */
    devices?: ProfileCreateRequestDataRelationshipsDevices;
    /**
     *
     * @type {ProfileCreateRequestDataRelationshipsCertificates}
     * @memberof ProfileCreateRequestDataRelationships
     */
    certificates: ProfileCreateRequestDataRelationshipsCertificates;
}

/**
 * Check if a given object implements the ProfileCreateRequestDataRelationships interface.
 */
export function instanceOfProfileCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bundleId" in value;
    isInstance = isInstance && "certificates" in value;

    return isInstance;
}

export function ProfileCreateRequestDataRelationshipsFromJSON(json: any): ProfileCreateRequestDataRelationships {
    return ProfileCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function ProfileCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCreateRequestDataRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        bundleId: BundleIdCapabilityCreateRequestDataRelationshipsBundleIdFromJSON(json["bundleId"]),
        devices: !exists(json, "devices") ? undefined : ProfileCreateRequestDataRelationshipsDevicesFromJSON(json["devices"]),
        certificates: ProfileCreateRequestDataRelationshipsCertificatesFromJSON(json["certificates"])
    };
}

export function ProfileCreateRequestDataRelationshipsToJSON(value?: ProfileCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        bundleId: BundleIdCapabilityCreateRequestDataRelationshipsBundleIdToJSON(value.bundleId),
        devices: ProfileCreateRequestDataRelationshipsDevicesToJSON(value.devices),
        certificates: ProfileCreateRequestDataRelationshipsCertificatesToJSON(value.certificates)
    };
}
