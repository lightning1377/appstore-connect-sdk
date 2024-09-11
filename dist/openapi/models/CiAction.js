"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiActionPlatformEnum = exports.CiActionDestinationEnum = void 0;
exports.instanceOfCiAction = instanceOfCiAction;
exports.CiActionFromJSON = CiActionFromJSON;
exports.CiActionFromJSONTyped = CiActionFromJSONTyped;
exports.CiActionToJSON = CiActionToJSON;
const runtime_1 = require("../runtime");
const BuildAudienceType_1 = require("./BuildAudienceType");
const CiActionTestConfiguration_1 = require("./CiActionTestConfiguration");
const CiActionType_1 = require("./CiActionType");
/**
 * @export
 */
exports.CiActionDestinationEnum = {
    IosDevice: "ANY_IOS_DEVICE",
    IosSimulator: "ANY_IOS_SIMULATOR",
    TvosDevice: "ANY_TVOS_DEVICE",
    TvosSimulator: "ANY_TVOS_SIMULATOR",
    WatchosDevice: "ANY_WATCHOS_DEVICE",
    WatchosSimulator: "ANY_WATCHOS_SIMULATOR",
    Mac: "ANY_MAC",
    MacCatalyst: "ANY_MAC_CATALYST",
    VisionosDevice: "ANY_VISIONOS_DEVICE",
    VisionosSimulator: "ANY_VISIONOS_SIMULATOR"
};
/**
 * @export
 */
exports.CiActionPlatformEnum = {
    Macos: "MACOS",
    Ios: "IOS",
    Tvos: "TVOS",
    Watchos: "WATCHOS",
    Visionos: "VISIONOS"
};
/**
 * Check if a given object implements the CiAction interface.
 */
function instanceOfCiAction(value) {
    let isInstance = true;
    return isInstance;
}
function CiActionFromJSON(json) {
    return CiActionFromJSONTyped(json, false);
}
function CiActionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, "name") ? undefined : json["name"],
        actionType: !(0, runtime_1.exists)(json, "actionType") ? undefined : (0, CiActionType_1.CiActionTypeFromJSON)(json["actionType"]),
        destination: !(0, runtime_1.exists)(json, "destination") ? undefined : json["destination"],
        buildDistributionAudience: !(0, runtime_1.exists)(json, "buildDistributionAudience") ? undefined : (0, BuildAudienceType_1.BuildAudienceTypeFromJSON)(json["buildDistributionAudience"]),
        testConfiguration: !(0, runtime_1.exists)(json, "testConfiguration") ? undefined : (0, CiActionTestConfiguration_1.CiActionTestConfigurationFromJSON)(json["testConfiguration"]),
        scheme: !(0, runtime_1.exists)(json, "scheme") ? undefined : json["scheme"],
        platform: !(0, runtime_1.exists)(json, "platform") ? undefined : json["platform"],
        isRequiredToPass: !(0, runtime_1.exists)(json, "isRequiredToPass") ? undefined : json["isRequiredToPass"]
    };
}
function CiActionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        actionType: (0, CiActionType_1.CiActionTypeToJSON)(value.actionType),
        destination: value.destination,
        buildDistributionAudience: (0, BuildAudienceType_1.BuildAudienceTypeToJSON)(value.buildDistributionAudience),
        testConfiguration: (0, CiActionTestConfiguration_1.CiActionTestConfigurationToJSON)(value.testConfiguration),
        scheme: value.scheme,
        platform: value.platform,
        isRequiredToPass: value.isRequiredToPass
    };
}
