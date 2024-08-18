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
/**
 *
 * @export
 * @interface BetaAppLocalizationCreateRequestDataAttributes
 */
export interface BetaAppLocalizationCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    feedbackEmail?: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    marketingUrl?: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    privacyPolicyUrl?: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    tvOsPrivacyPolicy?: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    locale: string;
}

/**
 * Check if a given object implements the BetaAppLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfBetaAppLocalizationCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "locale" in value;

    return isInstance;
}

export function BetaAppLocalizationCreateRequestDataAttributesFromJSON(json: any): BetaAppLocalizationCreateRequestDataAttributes {
    return BetaAppLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function BetaAppLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppLocalizationCreateRequestDataAttributes {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        feedbackEmail: !exists(json, "feedbackEmail") ? undefined : json["feedbackEmail"],
        marketingUrl: !exists(json, "marketingUrl") ? undefined : json["marketingUrl"],
        privacyPolicyUrl: !exists(json, "privacyPolicyUrl") ? undefined : json["privacyPolicyUrl"],
        tvOsPrivacyPolicy: !exists(json, "tvOsPrivacyPolicy") ? undefined : json["tvOsPrivacyPolicy"],
        description: !exists(json, "description") ? undefined : json["description"],
        locale: json["locale"]
    };
}

export function BetaAppLocalizationCreateRequestDataAttributesToJSON(value?: BetaAppLocalizationCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        feedbackEmail: value.feedbackEmail,
        marketingUrl: value.marketingUrl,
        privacyPolicyUrl: value.privacyPolicyUrl,
        tvOsPrivacyPolicy: value.tvOsPrivacyPolicy,
        description: value.description,
        locale: value.locale
    };
}
