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
exports.instanceOfAppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate = instanceOfAppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate;
exports.AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateFromJSON = AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateFromJSON;
exports.AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateFromJSONTyped = AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateFromJSONTyped;
exports.AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateToJSON = AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateToJSON;
const runtime_1 = require("../runtime");
const AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData_1 = require("./AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData");
/**
 * Check if a given object implements the AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate interface.
 */
function instanceOfAppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate(value) {
    let isInstance = true;
    return isInstance;
}
function AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateFromJSON(json) {
    return AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateFromJSONTyped(json, false);
}
function AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData_1.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON)(json["data"])
    };
}
function AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData_1.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON)(value.data)
    };
}
