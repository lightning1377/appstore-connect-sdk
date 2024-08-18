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
export const AppClipAdvancedExperienceLanguage = {
    Ar: "AR",
    Ca: "CA",
    Cs: "CS",
    Da: "DA",
    De: "DE",
    El: "EL",
    En: "EN",
    Es: "ES",
    Fi: "FI",
    Fr: "FR",
    He: "HE",
    Hi: "HI",
    Hr: "HR",
    Hu: "HU",
    Id: "ID",
    It: "IT",
    Ja: "JA",
    Ko: "KO",
    Ms: "MS",
    Nl: "NL",
    No: "NO",
    Pl: "PL",
    Pt: "PT",
    Ro: "RO",
    Ru: "RU",
    Sk: "SK",
    Sv: "SV",
    Th: "TH",
    Tr: "TR",
    Uk: "UK",
    Vi: "VI",
    Zh: "ZH"
} as const;
export type AppClipAdvancedExperienceLanguage = (typeof AppClipAdvancedExperienceLanguage)[keyof typeof AppClipAdvancedExperienceLanguage];

export function AppClipAdvancedExperienceLanguageFromJSON(json: any): AppClipAdvancedExperienceLanguage {
    return AppClipAdvancedExperienceLanguageFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceLanguageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceLanguage {
    return json as AppClipAdvancedExperienceLanguage;
}

export function AppClipAdvancedExperienceLanguageToJSON(value?: AppClipAdvancedExperienceLanguage | null): any {
    return value as any;
}
