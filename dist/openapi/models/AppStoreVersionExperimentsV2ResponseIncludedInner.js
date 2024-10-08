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
exports.AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSON = AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSON;
exports.AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSONTyped = AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSONTyped;
exports.AppStoreVersionExperimentsV2ResponseIncludedInnerToJSON = AppStoreVersionExperimentsV2ResponseIncludedInnerToJSON;
const App_1 = require("./App");
const AppStoreVersion_1 = require("./AppStoreVersion");
const AppStoreVersionExperimentTreatment_1 = require("./AppStoreVersionExperimentTreatment");
function AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSON(json) {
    return AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSONTyped(json, false);
}
function AppStoreVersionExperimentsV2ResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign({}, (0, App_1.AppFromJSONTyped)(json, true)), (0, AppStoreVersion_1.AppStoreVersionFromJSONTyped)(json, true)), (0, AppStoreVersionExperimentTreatment_1.AppStoreVersionExperimentTreatmentFromJSONTyped)(json, true));
}
function AppStoreVersionExperimentsV2ResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, App_1.instanceOfApp)(value)) {
        return (0, App_1.AppToJSON)(value);
    }
    if ((0, AppStoreVersion_1.instanceOfAppStoreVersion)(value)) {
        return (0, AppStoreVersion_1.AppStoreVersionToJSON)(value);
    }
    if ((0, AppStoreVersionExperimentTreatment_1.instanceOfAppStoreVersionExperimentTreatment)(value)) {
        return (0, AppStoreVersionExperimentTreatment_1.AppStoreVersionExperimentTreatmentToJSON)(value);
    }
    return {};
}
