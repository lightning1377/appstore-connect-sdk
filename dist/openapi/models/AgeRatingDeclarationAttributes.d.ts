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
import type { KidsAgeBand } from "./KidsAgeBand";
/**
 *
 * @export
 * @interface AgeRatingDeclarationAttributes
 */
export interface AgeRatingDeclarationAttributes {
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    alcoholTobaccoOrDrugUseOrReferences?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferencesEnum;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    contests?: AgeRatingDeclarationAttributesContestsEnum;
    /**
     *
     * @type {boolean}
     * @memberof AgeRatingDeclarationAttributes
     * @deprecated
     */
    gamblingAndContests?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AgeRatingDeclarationAttributes
     */
    gambling?: boolean;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    gamblingSimulated?: AgeRatingDeclarationAttributesGamblingSimulatedEnum;
    /**
     *
     * @type {KidsAgeBand}
     * @memberof AgeRatingDeclarationAttributes
     */
    kidsAgeBand?: KidsAgeBand;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    medicalOrTreatmentInformation?: AgeRatingDeclarationAttributesMedicalOrTreatmentInformationEnum;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    profanityOrCrudeHumor?: AgeRatingDeclarationAttributesProfanityOrCrudeHumorEnum;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    sexualContentGraphicAndNudity?: AgeRatingDeclarationAttributesSexualContentGraphicAndNudityEnum;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    sexualContentOrNudity?: AgeRatingDeclarationAttributesSexualContentOrNudityEnum;
    /**
     *
     * @type {boolean}
     * @memberof AgeRatingDeclarationAttributes
     * @deprecated
     */
    seventeenPlus?: boolean;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    ageRatingOverride?: AgeRatingDeclarationAttributesAgeRatingOverrideEnum;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    horrorOrFearThemes?: AgeRatingDeclarationAttributesHorrorOrFearThemesEnum;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    matureOrSuggestiveThemes?: AgeRatingDeclarationAttributesMatureOrSuggestiveThemesEnum;
    /**
     *
     * @type {boolean}
     * @memberof AgeRatingDeclarationAttributes
     */
    unrestrictedWebAccess?: boolean;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    violenceCartoonOrFantasy?: AgeRatingDeclarationAttributesViolenceCartoonOrFantasyEnum;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    violenceRealisticProlongedGraphicOrSadistic?: AgeRatingDeclarationAttributesViolenceRealisticProlongedGraphicOrSadisticEnum;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    violenceRealistic?: AgeRatingDeclarationAttributesViolenceRealisticEnum;
}
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferencesEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferencesEnum = (typeof AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferencesEnum)[keyof typeof AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferencesEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesContestsEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesContestsEnum = (typeof AgeRatingDeclarationAttributesContestsEnum)[keyof typeof AgeRatingDeclarationAttributesContestsEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesGamblingSimulatedEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesGamblingSimulatedEnum = (typeof AgeRatingDeclarationAttributesGamblingSimulatedEnum)[keyof typeof AgeRatingDeclarationAttributesGamblingSimulatedEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesMedicalOrTreatmentInformationEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesMedicalOrTreatmentInformationEnum = (typeof AgeRatingDeclarationAttributesMedicalOrTreatmentInformationEnum)[keyof typeof AgeRatingDeclarationAttributesMedicalOrTreatmentInformationEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesProfanityOrCrudeHumorEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesProfanityOrCrudeHumorEnum = (typeof AgeRatingDeclarationAttributesProfanityOrCrudeHumorEnum)[keyof typeof AgeRatingDeclarationAttributesProfanityOrCrudeHumorEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesSexualContentGraphicAndNudityEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesSexualContentGraphicAndNudityEnum = (typeof AgeRatingDeclarationAttributesSexualContentGraphicAndNudityEnum)[keyof typeof AgeRatingDeclarationAttributesSexualContentGraphicAndNudityEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesSexualContentOrNudityEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesSexualContentOrNudityEnum = (typeof AgeRatingDeclarationAttributesSexualContentOrNudityEnum)[keyof typeof AgeRatingDeclarationAttributesSexualContentOrNudityEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesAgeRatingOverrideEnum: {
    readonly None: "NONE";
    readonly SeventeenPlus: "SEVENTEEN_PLUS";
    readonly Unrated: "UNRATED";
};
export type AgeRatingDeclarationAttributesAgeRatingOverrideEnum = (typeof AgeRatingDeclarationAttributesAgeRatingOverrideEnum)[keyof typeof AgeRatingDeclarationAttributesAgeRatingOverrideEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesHorrorOrFearThemesEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesHorrorOrFearThemesEnum = (typeof AgeRatingDeclarationAttributesHorrorOrFearThemesEnum)[keyof typeof AgeRatingDeclarationAttributesHorrorOrFearThemesEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesMatureOrSuggestiveThemesEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesMatureOrSuggestiveThemesEnum = (typeof AgeRatingDeclarationAttributesMatureOrSuggestiveThemesEnum)[keyof typeof AgeRatingDeclarationAttributesMatureOrSuggestiveThemesEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesViolenceCartoonOrFantasyEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesViolenceCartoonOrFantasyEnum = (typeof AgeRatingDeclarationAttributesViolenceCartoonOrFantasyEnum)[keyof typeof AgeRatingDeclarationAttributesViolenceCartoonOrFantasyEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesViolenceRealisticProlongedGraphicOrSadisticEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesViolenceRealisticProlongedGraphicOrSadisticEnum = (typeof AgeRatingDeclarationAttributesViolenceRealisticProlongedGraphicOrSadisticEnum)[keyof typeof AgeRatingDeclarationAttributesViolenceRealisticProlongedGraphicOrSadisticEnum];
/**
 * @export
 */
export declare const AgeRatingDeclarationAttributesViolenceRealisticEnum: {
    readonly None: "NONE";
    readonly InfrequentOrMild: "INFREQUENT_OR_MILD";
    readonly FrequentOrIntense: "FREQUENT_OR_INTENSE";
};
export type AgeRatingDeclarationAttributesViolenceRealisticEnum = (typeof AgeRatingDeclarationAttributesViolenceRealisticEnum)[keyof typeof AgeRatingDeclarationAttributesViolenceRealisticEnum];
/**
 * Check if a given object implements the AgeRatingDeclarationAttributes interface.
 */
export declare function instanceOfAgeRatingDeclarationAttributes(value: object): boolean;
export declare function AgeRatingDeclarationAttributesFromJSON(json: any): AgeRatingDeclarationAttributes;
export declare function AgeRatingDeclarationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgeRatingDeclarationAttributes;
export declare function AgeRatingDeclarationAttributesToJSON(value?: AgeRatingDeclarationAttributes | null): any;
