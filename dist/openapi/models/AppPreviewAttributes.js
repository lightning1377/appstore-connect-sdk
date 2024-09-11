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
exports.instanceOfAppPreviewAttributes = instanceOfAppPreviewAttributes;
exports.AppPreviewAttributesFromJSON = AppPreviewAttributesFromJSON;
exports.AppPreviewAttributesFromJSONTyped = AppPreviewAttributesFromJSONTyped;
exports.AppPreviewAttributesToJSON = AppPreviewAttributesToJSON;
const runtime_1 = require("../runtime");
const AppMediaAssetState_1 = require("./AppMediaAssetState");
const ImageAsset_1 = require("./ImageAsset");
const UploadOperation_1 = require("./UploadOperation");
/**
 * Check if a given object implements the AppPreviewAttributes interface.
 */
function instanceOfAppPreviewAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppPreviewAttributesFromJSON(json) {
    return AppPreviewAttributesFromJSONTyped(json, false);
}
function AppPreviewAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        fileSize: !(0, runtime_1.exists)(json, "fileSize") ? undefined : json["fileSize"],
        fileName: !(0, runtime_1.exists)(json, "fileName") ? undefined : json["fileName"],
        sourceFileChecksum: !(0, runtime_1.exists)(json, "sourceFileChecksum") ? undefined : json["sourceFileChecksum"],
        previewFrameTimeCode: !(0, runtime_1.exists)(json, "previewFrameTimeCode") ? undefined : json["previewFrameTimeCode"],
        mimeType: !(0, runtime_1.exists)(json, "mimeType") ? undefined : json["mimeType"],
        videoUrl: !(0, runtime_1.exists)(json, "videoUrl") ? undefined : json["videoUrl"],
        previewImage: !(0, runtime_1.exists)(json, "previewImage") ? undefined : (0, ImageAsset_1.ImageAssetFromJSON)(json["previewImage"]),
        uploadOperations: !(0, runtime_1.exists)(json, "uploadOperations") ? undefined : json["uploadOperations"].map(UploadOperation_1.UploadOperationFromJSON),
        assetDeliveryState: !(0, runtime_1.exists)(json, "assetDeliveryState") ? undefined : (0, AppMediaAssetState_1.AppMediaAssetStateFromJSON)(json["assetDeliveryState"])
    };
}
function AppPreviewAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        fileSize: value.fileSize,
        fileName: value.fileName,
        sourceFileChecksum: value.sourceFileChecksum,
        previewFrameTimeCode: value.previewFrameTimeCode,
        mimeType: value.mimeType,
        videoUrl: value.videoUrl,
        previewImage: (0, ImageAsset_1.ImageAssetToJSON)(value.previewImage),
        uploadOperations: value.uploadOperations === undefined ? undefined : value.uploadOperations.map(UploadOperation_1.UploadOperationToJSON),
        assetDeliveryState: (0, AppMediaAssetState_1.AppMediaAssetStateToJSON)(value.assetDeliveryState)
    };
}
