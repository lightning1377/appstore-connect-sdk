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
import * as runtime from "../runtime";
import type { GameCenterLeaderboardSetCreateRequest, GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest, GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse, GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest, GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse, GameCenterLeaderboardSetLocalizationsResponse, GameCenterLeaderboardSetReleasesResponse, GameCenterLeaderboardSetResponse, GameCenterLeaderboardSetUpdateRequest, GameCenterLeaderboardsResponse } from "../models";
export interface GameCenterLeaderboardSetsCreateInstanceRequest {
    gameCenterLeaderboardSetCreateRequest: GameCenterLeaderboardSetCreateRequest;
}
export interface GameCenterLeaderboardSetsDeleteInstanceRequest {
    id: string;
}
export interface GameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationshipRequest {
    id: string;
    gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest: GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest;
}
export interface GameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationshipRequest {
    id: string;
    gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest: GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest;
}
export interface GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedRequest {
    id: string;
    filterArchived?: Array<string>;
    filterReferenceName?: Array<string>;
    filterId?: Array<string>;
    fieldsGameCenterLeaderboardLocalizations?: Array<GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardLocalizationsEnum>;
    fieldsGameCenterLeaderboardSets?: Array<GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum>;
    fieldsGameCenterGroups?: Array<GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterGroupsEnum>;
    fieldsGameCenterDetails?: Array<GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterDetailsEnum>;
    fieldsGameCenterLeaderboards?: Array<GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardsEnum>;
    fieldsGameCenterLeaderboardReleases?: Array<GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardReleasesEnum>;
    limit?: number;
    limitGameCenterLeaderboardSets?: number;
    limitLocalizations?: number;
    limitReleases?: number;
    include?: Array<GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedIncludeEnum>;
}
export interface GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationshipRequest {
    id: string;
    limit?: number;
}
export interface GameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationshipRequest {
    id: string;
    gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest: GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest;
}
export interface GameCenterLeaderboardSetsGetInstanceRequest {
    id: string;
    fieldsGameCenterLeaderboardSets?: Array<GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetsEnum>;
    include?: Array<GameCenterLeaderboardSetsGetInstanceIncludeEnum>;
    fieldsGameCenterLeaderboardSetLocalizations?: Array<GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetLocalizationsEnum>;
    fieldsGameCenterLeaderboardSetReleases?: Array<GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetReleasesEnum>;
    fieldsGameCenterLeaderboards?: Array<GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardsEnum>;
    limitGameCenterLeaderboards?: number;
    limitLocalizations?: number;
    limitReleases?: number;
}
export interface GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedRequest {
    id: string;
    fieldsGameCenterLeaderboardSetLocalizations?: Array<GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetLocalizationsEnum>;
    fieldsGameCenterLeaderboardSetReleases?: Array<GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetReleasesEnum>;
    fieldsGameCenterLeaderboardSets?: Array<GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetsEnum>;
    fieldsGameCenterGroups?: Array<GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterGroupsEnum>;
    fieldsGameCenterDetails?: Array<GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterDetailsEnum>;
    fieldsGameCenterLeaderboards?: Array<GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardsEnum>;
    limitLocalizations?: number;
    limitGameCenterLeaderboards?: number;
    limitReleases?: number;
    include?: Array<GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedIncludeEnum>;
}
export interface GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationshipRequest {
    id: string;
}
export interface GameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationshipRequest {
    id: string;
    gameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest: GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest;
}
export interface GameCenterLeaderboardSetsLocalizationsGetToManyRelatedRequest {
    id: string;
    fieldsGameCenterLeaderboardSetLocalizations?: Array<GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetLocalizationsEnum>;
    fieldsGameCenterLeaderboardSets?: Array<GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum>;
    fieldsGameCenterLeaderboardSetImages?: Array<GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetImagesEnum>;
    limit?: number;
    include?: Array<GameCenterLeaderboardSetsLocalizationsGetToManyRelatedIncludeEnum>;
}
export interface GameCenterLeaderboardSetsReleasesGetToManyRelatedRequest {
    id: string;
    filterLive?: Array<string>;
    filterGameCenterDetail?: Array<string>;
    fieldsGameCenterLeaderboardSetReleases?: Array<GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterLeaderboardSetReleasesEnum>;
    fieldsGameCenterLeaderboardSets?: Array<GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum>;
    fieldsGameCenterDetails?: Array<GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterDetailsEnum>;
    limit?: number;
    include?: Array<GameCenterLeaderboardSetsReleasesGetToManyRelatedIncludeEnum>;
}
export interface GameCenterLeaderboardSetsUpdateInstanceRequest {
    id: string;
    gameCenterLeaderboardSetUpdateRequest: GameCenterLeaderboardSetUpdateRequest;
}
/**
 *
 */
export declare class GameCenterLeaderboardSetsApi extends runtime.BaseAPI {
    /**
     */
    gameCenterLeaderboardSetsCreateInstanceRaw(requestParameters: GameCenterLeaderboardSetsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetResponse>>;
    /**
     */
    gameCenterLeaderboardSetsCreateInstance(requestParameters: GameCenterLeaderboardSetsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetResponse>;
    /**
     */
    gameCenterLeaderboardSetsDeleteInstanceRaw(requestParameters: GameCenterLeaderboardSetsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterLeaderboardSetsDeleteInstance(requestParameters: GameCenterLeaderboardSetsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationshipRaw(requestParameters: GameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship(requestParameters: GameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationshipRaw(requestParameters: GameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship(requestParameters: GameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedRaw(requestParameters: GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardsResponse>>;
    /**
     */
    gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated(requestParameters: GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardsResponse>;
    /**
     */
    gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationshipRaw(requestParameters: GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse>>;
    /**
     */
    gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship(requestParameters: GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse>;
    /**
     */
    gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationshipRaw(requestParameters: GameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship(requestParameters: GameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    gameCenterLeaderboardSetsGetInstanceRaw(requestParameters: GameCenterLeaderboardSetsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetResponse>>;
    /**
     */
    gameCenterLeaderboardSetsGetInstance(requestParameters: GameCenterLeaderboardSetsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetResponse>;
    /**
     */
    gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedRaw(requestParameters: GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetResponse>>;
    /**
     */
    gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated(requestParameters: GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetResponse>;
    /**
     */
    gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationshipRaw(requestParameters: GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse>>;
    /**
     */
    gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship(requestParameters: GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse>;
    /**
     */
    gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationshipRaw(requestParameters: GameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship(requestParameters: GameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    gameCenterLeaderboardSetsLocalizationsGetToManyRelatedRaw(requestParameters: GameCenterLeaderboardSetsLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetLocalizationsResponse>>;
    /**
     */
    gameCenterLeaderboardSetsLocalizationsGetToManyRelated(requestParameters: GameCenterLeaderboardSetsLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetLocalizationsResponse>;
    /**
     */
    gameCenterLeaderboardSetsReleasesGetToManyRelatedRaw(requestParameters: GameCenterLeaderboardSetsReleasesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetReleasesResponse>>;
    /**
     */
    gameCenterLeaderboardSetsReleasesGetToManyRelated(requestParameters: GameCenterLeaderboardSetsReleasesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetReleasesResponse>;
    /**
     */
    gameCenterLeaderboardSetsUpdateInstanceRaw(requestParameters: GameCenterLeaderboardSetsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetResponse>>;
    /**
     */
    gameCenterLeaderboardSetsUpdateInstance(requestParameters: GameCenterLeaderboardSetsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetResponse>;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardLocalizationsEnum: {
    readonly FormatterOverride: "formatterOverride";
    readonly FormatterSuffix: "formatterSuffix";
    readonly FormatterSuffixSingular: "formatterSuffixSingular";
    readonly GameCenterLeaderboard: "gameCenterLeaderboard";
    readonly GameCenterLeaderboardImage: "gameCenterLeaderboardImage";
    readonly Locale: "locale";
    readonly Name: "name";
};
export type GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardLocalizationsEnum = (typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardLocalizationsEnum)[keyof typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardLocalizationsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly GroupLeaderboardSet: "groupLeaderboardSet";
    readonly Localizations: "localizations";
    readonly ReferenceName: "referenceName";
    readonly Releases: "releases";
    readonly VendorIdentifier: "vendorIdentifier";
};
export type GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum = (typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum)[keyof typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterGroupsEnum: {
    readonly GameCenterAchievements: "gameCenterAchievements";
    readonly GameCenterDetails: "gameCenterDetails";
    readonly GameCenterLeaderboardSets: "gameCenterLeaderboardSets";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly ReferenceName: "referenceName";
};
export type GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterGroupsEnum = (typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterGroupsEnum)[keyof typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterGroupsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterDetailsEnum: {
    readonly AchievementReleases: "achievementReleases";
    readonly App: "app";
    readonly ArcadeEnabled: "arcadeEnabled";
    readonly ChallengeEnabled: "challengeEnabled";
    readonly DefaultGroupLeaderboard: "defaultGroupLeaderboard";
    readonly DefaultLeaderboard: "defaultLeaderboard";
    readonly GameCenterAchievements: "gameCenterAchievements";
    readonly GameCenterAppVersions: "gameCenterAppVersions";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboardSets: "gameCenterLeaderboardSets";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly LeaderboardReleases: "leaderboardReleases";
    readonly LeaderboardSetReleases: "leaderboardSetReleases";
};
export type GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterDetailsEnum = (typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterDetailsEnum)[keyof typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterDetailsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardsEnum: {
    readonly Archived: "archived";
    readonly DefaultFormatter: "defaultFormatter";
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboardSets: "gameCenterLeaderboardSets";
    readonly GroupLeaderboard: "groupLeaderboard";
    readonly Localizations: "localizations";
    readonly RecurrenceDuration: "recurrenceDuration";
    readonly RecurrenceRule: "recurrenceRule";
    readonly RecurrenceStartDate: "recurrenceStartDate";
    readonly ReferenceName: "referenceName";
    readonly Releases: "releases";
    readonly ScoreRangeEnd: "scoreRangeEnd";
    readonly ScoreRangeStart: "scoreRangeStart";
    readonly ScoreSortType: "scoreSortType";
    readonly SubmissionType: "submissionType";
    readonly VendorIdentifier: "vendorIdentifier";
};
export type GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardsEnum = (typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardsEnum)[keyof typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardReleasesEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterLeaderboard: "gameCenterLeaderboard";
    readonly Live: "live";
};
export type GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardReleasesEnum = (typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardReleasesEnum)[keyof typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedFieldsGameCenterLeaderboardReleasesEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedIncludeEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboardSets: "gameCenterLeaderboardSets";
    readonly GroupLeaderboard: "groupLeaderboard";
    readonly Localizations: "localizations";
    readonly Releases: "releases";
};
export type GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedIncludeEnum = (typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedIncludeEnum)[keyof typeof GameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetsEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly GroupLeaderboardSet: "groupLeaderboardSet";
    readonly Localizations: "localizations";
    readonly ReferenceName: "referenceName";
    readonly Releases: "releases";
    readonly VendorIdentifier: "vendorIdentifier";
};
export type GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetsEnum = (typeof GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetsEnum)[keyof typeof GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGetInstanceIncludeEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly GroupLeaderboardSet: "groupLeaderboardSet";
    readonly Localizations: "localizations";
    readonly Releases: "releases";
};
export type GameCenterLeaderboardSetsGetInstanceIncludeEnum = (typeof GameCenterLeaderboardSetsGetInstanceIncludeEnum)[keyof typeof GameCenterLeaderboardSetsGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetLocalizationsEnum: {
    readonly GameCenterLeaderboardSet: "gameCenterLeaderboardSet";
    readonly GameCenterLeaderboardSetImage: "gameCenterLeaderboardSetImage";
    readonly Locale: "locale";
    readonly Name: "name";
};
export type GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetLocalizationsEnum = (typeof GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetLocalizationsEnum)[keyof typeof GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetLocalizationsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetReleasesEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterLeaderboardSet: "gameCenterLeaderboardSet";
    readonly Live: "live";
};
export type GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetReleasesEnum = (typeof GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetReleasesEnum)[keyof typeof GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardSetReleasesEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardsEnum: {
    readonly Archived: "archived";
    readonly DefaultFormatter: "defaultFormatter";
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboardSets: "gameCenterLeaderboardSets";
    readonly GroupLeaderboard: "groupLeaderboard";
    readonly Localizations: "localizations";
    readonly RecurrenceDuration: "recurrenceDuration";
    readonly RecurrenceRule: "recurrenceRule";
    readonly RecurrenceStartDate: "recurrenceStartDate";
    readonly ReferenceName: "referenceName";
    readonly Releases: "releases";
    readonly ScoreRangeEnd: "scoreRangeEnd";
    readonly ScoreRangeStart: "scoreRangeStart";
    readonly ScoreSortType: "scoreSortType";
    readonly SubmissionType: "submissionType";
    readonly VendorIdentifier: "vendorIdentifier";
};
export type GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardsEnum = (typeof GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardsEnum)[keyof typeof GameCenterLeaderboardSetsGetInstanceFieldsGameCenterLeaderboardsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetLocalizationsEnum: {
    readonly GameCenterLeaderboardSet: "gameCenterLeaderboardSet";
    readonly GameCenterLeaderboardSetImage: "gameCenterLeaderboardSetImage";
    readonly Locale: "locale";
    readonly Name: "name";
};
export type GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetLocalizationsEnum = (typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetLocalizationsEnum)[keyof typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetLocalizationsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetReleasesEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterLeaderboardSet: "gameCenterLeaderboardSet";
    readonly Live: "live";
};
export type GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetReleasesEnum = (typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetReleasesEnum)[keyof typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetReleasesEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetsEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly GroupLeaderboardSet: "groupLeaderboardSet";
    readonly Localizations: "localizations";
    readonly ReferenceName: "referenceName";
    readonly Releases: "releases";
    readonly VendorIdentifier: "vendorIdentifier";
};
export type GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetsEnum = (typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetsEnum)[keyof typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardSetsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterGroupsEnum: {
    readonly GameCenterAchievements: "gameCenterAchievements";
    readonly GameCenterDetails: "gameCenterDetails";
    readonly GameCenterLeaderboardSets: "gameCenterLeaderboardSets";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly ReferenceName: "referenceName";
};
export type GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterGroupsEnum = (typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterGroupsEnum)[keyof typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterGroupsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterDetailsEnum: {
    readonly AchievementReleases: "achievementReleases";
    readonly App: "app";
    readonly ArcadeEnabled: "arcadeEnabled";
    readonly ChallengeEnabled: "challengeEnabled";
    readonly DefaultGroupLeaderboard: "defaultGroupLeaderboard";
    readonly DefaultLeaderboard: "defaultLeaderboard";
    readonly GameCenterAchievements: "gameCenterAchievements";
    readonly GameCenterAppVersions: "gameCenterAppVersions";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboardSets: "gameCenterLeaderboardSets";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly LeaderboardReleases: "leaderboardReleases";
    readonly LeaderboardSetReleases: "leaderboardSetReleases";
};
export type GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterDetailsEnum = (typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterDetailsEnum)[keyof typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterDetailsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardsEnum: {
    readonly Archived: "archived";
    readonly DefaultFormatter: "defaultFormatter";
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboardSets: "gameCenterLeaderboardSets";
    readonly GroupLeaderboard: "groupLeaderboard";
    readonly Localizations: "localizations";
    readonly RecurrenceDuration: "recurrenceDuration";
    readonly RecurrenceRule: "recurrenceRule";
    readonly RecurrenceStartDate: "recurrenceStartDate";
    readonly ReferenceName: "referenceName";
    readonly Releases: "releases";
    readonly ScoreRangeEnd: "scoreRangeEnd";
    readonly ScoreRangeStart: "scoreRangeStart";
    readonly ScoreSortType: "scoreSortType";
    readonly SubmissionType: "submissionType";
    readonly VendorIdentifier: "vendorIdentifier";
};
export type GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardsEnum = (typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardsEnum)[keyof typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedFieldsGameCenterLeaderboardsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedIncludeEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly GroupLeaderboardSet: "groupLeaderboardSet";
    readonly Localizations: "localizations";
    readonly Releases: "releases";
};
export type GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedIncludeEnum = (typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedIncludeEnum)[keyof typeof GameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedIncludeEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetLocalizationsEnum: {
    readonly GameCenterLeaderboardSet: "gameCenterLeaderboardSet";
    readonly GameCenterLeaderboardSetImage: "gameCenterLeaderboardSetImage";
    readonly Locale: "locale";
    readonly Name: "name";
};
export type GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetLocalizationsEnum = (typeof GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetLocalizationsEnum)[keyof typeof GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetLocalizationsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly GroupLeaderboardSet: "groupLeaderboardSet";
    readonly Localizations: "localizations";
    readonly ReferenceName: "referenceName";
    readonly Releases: "releases";
    readonly VendorIdentifier: "vendorIdentifier";
};
export type GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum = (typeof GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum)[keyof typeof GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetImagesEnum: {
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly GameCenterLeaderboardSetLocalization: "gameCenterLeaderboardSetLocalization";
    readonly ImageAsset: "imageAsset";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
};
export type GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetImagesEnum = (typeof GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetImagesEnum)[keyof typeof GameCenterLeaderboardSetsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardSetImagesEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsLocalizationsGetToManyRelatedIncludeEnum: {
    readonly GameCenterLeaderboardSet: "gameCenterLeaderboardSet";
    readonly GameCenterLeaderboardSetImage: "gameCenterLeaderboardSetImage";
};
export type GameCenterLeaderboardSetsLocalizationsGetToManyRelatedIncludeEnum = (typeof GameCenterLeaderboardSetsLocalizationsGetToManyRelatedIncludeEnum)[keyof typeof GameCenterLeaderboardSetsLocalizationsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterLeaderboardSetReleasesEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterLeaderboardSet: "gameCenterLeaderboardSet";
    readonly Live: "live";
};
export type GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterLeaderboardSetReleasesEnum = (typeof GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterLeaderboardSetReleasesEnum)[keyof typeof GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterLeaderboardSetReleasesEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly GroupLeaderboardSet: "groupLeaderboardSet";
    readonly Localizations: "localizations";
    readonly ReferenceName: "referenceName";
    readonly Releases: "releases";
    readonly VendorIdentifier: "vendorIdentifier";
};
export type GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum = (typeof GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum)[keyof typeof GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterLeaderboardSetsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterDetailsEnum: {
    readonly AchievementReleases: "achievementReleases";
    readonly App: "app";
    readonly ArcadeEnabled: "arcadeEnabled";
    readonly ChallengeEnabled: "challengeEnabled";
    readonly DefaultGroupLeaderboard: "defaultGroupLeaderboard";
    readonly DefaultLeaderboard: "defaultLeaderboard";
    readonly GameCenterAchievements: "gameCenterAchievements";
    readonly GameCenterAppVersions: "gameCenterAppVersions";
    readonly GameCenterGroup: "gameCenterGroup";
    readonly GameCenterLeaderboardSets: "gameCenterLeaderboardSets";
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
    readonly LeaderboardReleases: "leaderboardReleases";
    readonly LeaderboardSetReleases: "leaderboardSetReleases";
};
export type GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterDetailsEnum = (typeof GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterDetailsEnum)[keyof typeof GameCenterLeaderboardSetsReleasesGetToManyRelatedFieldsGameCenterDetailsEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetsReleasesGetToManyRelatedIncludeEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterLeaderboardSet: "gameCenterLeaderboardSet";
};
export type GameCenterLeaderboardSetsReleasesGetToManyRelatedIncludeEnum = (typeof GameCenterLeaderboardSetsReleasesGetToManyRelatedIncludeEnum)[keyof typeof GameCenterLeaderboardSetsReleasesGetToManyRelatedIncludeEnum];
