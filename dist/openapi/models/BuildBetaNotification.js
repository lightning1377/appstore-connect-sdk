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
exports.BuildBetaNotificationTypeEnum = void 0;
exports.instanceOfBuildBetaNotification = instanceOfBuildBetaNotification;
exports.BuildBetaNotificationFromJSON = BuildBetaNotificationFromJSON;
exports.BuildBetaNotificationFromJSONTyped = BuildBetaNotificationFromJSONTyped;
exports.BuildBetaNotificationToJSON = BuildBetaNotificationToJSON;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.BuildBetaNotificationTypeEnum = {
    BuildBetaNotifications: "buildBetaNotifications"
};
/**
 * Check if a given object implements the BuildBetaNotification interface.
 */
function instanceOfBuildBetaNotification(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function BuildBetaNotificationFromJSON(json) {
    return BuildBetaNotificationFromJSONTyped(json, false);
}
function BuildBetaNotificationFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function BuildBetaNotificationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
