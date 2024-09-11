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
exports.instanceOfCiWorkflowUpdateRequestDataAttributes = instanceOfCiWorkflowUpdateRequestDataAttributes;
exports.CiWorkflowUpdateRequestDataAttributesFromJSON = CiWorkflowUpdateRequestDataAttributesFromJSON;
exports.CiWorkflowUpdateRequestDataAttributesFromJSONTyped = CiWorkflowUpdateRequestDataAttributesFromJSONTyped;
exports.CiWorkflowUpdateRequestDataAttributesToJSON = CiWorkflowUpdateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
const CiAction_1 = require("./CiAction");
const CiBranchStartCondition_1 = require("./CiBranchStartCondition");
const CiManualBranchStartCondition_1 = require("./CiManualBranchStartCondition");
const CiManualPullRequestStartCondition_1 = require("./CiManualPullRequestStartCondition");
const CiManualTagStartCondition_1 = require("./CiManualTagStartCondition");
const CiPullRequestStartCondition_1 = require("./CiPullRequestStartCondition");
const CiScheduledStartCondition_1 = require("./CiScheduledStartCondition");
const CiTagStartCondition_1 = require("./CiTagStartCondition");
/**
 * Check if a given object implements the CiWorkflowUpdateRequestDataAttributes interface.
 */
function instanceOfCiWorkflowUpdateRequestDataAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function CiWorkflowUpdateRequestDataAttributesFromJSON(json) {
    return CiWorkflowUpdateRequestDataAttributesFromJSONTyped(json, false);
}
function CiWorkflowUpdateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, "name") ? undefined : json["name"],
        description: !(0, runtime_1.exists)(json, "description") ? undefined : json["description"],
        branchStartCondition: !(0, runtime_1.exists)(json, "branchStartCondition") ? undefined : (0, CiBranchStartCondition_1.CiBranchStartConditionFromJSON)(json["branchStartCondition"]),
        tagStartCondition: !(0, runtime_1.exists)(json, "tagStartCondition") ? undefined : (0, CiTagStartCondition_1.CiTagStartConditionFromJSON)(json["tagStartCondition"]),
        pullRequestStartCondition: !(0, runtime_1.exists)(json, "pullRequestStartCondition") ? undefined : (0, CiPullRequestStartCondition_1.CiPullRequestStartConditionFromJSON)(json["pullRequestStartCondition"]),
        scheduledStartCondition: !(0, runtime_1.exists)(json, "scheduledStartCondition") ? undefined : (0, CiScheduledStartCondition_1.CiScheduledStartConditionFromJSON)(json["scheduledStartCondition"]),
        manualBranchStartCondition: !(0, runtime_1.exists)(json, "manualBranchStartCondition") ? undefined : (0, CiManualBranchStartCondition_1.CiManualBranchStartConditionFromJSON)(json["manualBranchStartCondition"]),
        manualTagStartCondition: !(0, runtime_1.exists)(json, "manualTagStartCondition") ? undefined : (0, CiManualTagStartCondition_1.CiManualTagStartConditionFromJSON)(json["manualTagStartCondition"]),
        manualPullRequestStartCondition: !(0, runtime_1.exists)(json, "manualPullRequestStartCondition") ? undefined : (0, CiManualPullRequestStartCondition_1.CiManualPullRequestStartConditionFromJSON)(json["manualPullRequestStartCondition"]),
        actions: !(0, runtime_1.exists)(json, "actions") ? undefined : json["actions"].map(CiAction_1.CiActionFromJSON),
        isEnabled: !(0, runtime_1.exists)(json, "isEnabled") ? undefined : json["isEnabled"],
        isLockedForEditing: !(0, runtime_1.exists)(json, "isLockedForEditing") ? undefined : json["isLockedForEditing"],
        clean: !(0, runtime_1.exists)(json, "clean") ? undefined : json["clean"],
        containerFilePath: !(0, runtime_1.exists)(json, "containerFilePath") ? undefined : json["containerFilePath"]
    };
}
function CiWorkflowUpdateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        description: value.description,
        branchStartCondition: (0, CiBranchStartCondition_1.CiBranchStartConditionToJSON)(value.branchStartCondition),
        tagStartCondition: (0, CiTagStartCondition_1.CiTagStartConditionToJSON)(value.tagStartCondition),
        pullRequestStartCondition: (0, CiPullRequestStartCondition_1.CiPullRequestStartConditionToJSON)(value.pullRequestStartCondition),
        scheduledStartCondition: (0, CiScheduledStartCondition_1.CiScheduledStartConditionToJSON)(value.scheduledStartCondition),
        manualBranchStartCondition: (0, CiManualBranchStartCondition_1.CiManualBranchStartConditionToJSON)(value.manualBranchStartCondition),
        manualTagStartCondition: (0, CiManualTagStartCondition_1.CiManualTagStartConditionToJSON)(value.manualTagStartCondition),
        manualPullRequestStartCondition: (0, CiManualPullRequestStartCondition_1.CiManualPullRequestStartConditionToJSON)(value.manualPullRequestStartCondition),
        actions: value.actions === undefined ? undefined : value.actions.map(CiAction_1.CiActionToJSON),
        isEnabled: value.isEnabled,
        isLockedForEditing: value.isLockedForEditing,
        clean: value.clean,
        containerFilePath: value.containerFilePath
    };
}
