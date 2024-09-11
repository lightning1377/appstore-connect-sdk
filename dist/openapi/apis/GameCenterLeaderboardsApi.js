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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCenterLeaderboardsReleasesGetToManyRelatedIncludeEnum = exports.GameCenterLeaderboardsReleasesGetToManyRelatedFieldsGameCenterLeaderboardReleasesEnum = exports.GameCenterLeaderboardsReleasesGetToManyRelatedFieldsGameCenterLeaderboardsEnum = exports.GameCenterLeaderboardsReleasesGetToManyRelatedFieldsGameCenterDetailsEnum = exports.GameCenterLeaderboardsLocalizationsGetToManyRelatedIncludeEnum = exports.GameCenterLeaderboardsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardsEnum = exports.GameCenterLeaderboardsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardImagesEnum = exports.GameCenterLeaderboardsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardLocalizationsEnum = exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedIncludeEnum = exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterLeaderboardReleasesEnum = exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterLeaderboardsEnum = exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterDetailsEnum = exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterGroupsEnum = exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterLeaderboardSetsEnum = exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterLeaderboardLocalizationsEnum = exports.GameCenterLeaderboardsGetInstanceFieldsGameCenterLeaderboardReleasesEnum = exports.GameCenterLeaderboardsGetInstanceFieldsGameCenterLeaderboardLocalizationsEnum = exports.GameCenterLeaderboardsGetInstanceIncludeEnum = exports.GameCenterLeaderboardsGetInstanceFieldsGameCenterLeaderboardsEnum = exports.GameCenterLeaderboardsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class GameCenterLeaderboardsApi extends runtime.BaseAPI {
    /**
     */
    gameCenterLeaderboardsCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.gameCenterLeaderboardCreateRequest === null || requestParameters.gameCenterLeaderboardCreateRequest === undefined) {
                throw new runtime.RequiredError("gameCenterLeaderboardCreateRequest", "Required parameter requestParameters.gameCenterLeaderboardCreateRequest was null or undefined when calling gameCenterLeaderboardsCreateInstance.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/gameCenterLeaderboards`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.GameCenterLeaderboardCreateRequestToJSON)(requestParameters.gameCenterLeaderboardCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GameCenterLeaderboardResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    gameCenterLeaderboardsCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.gameCenterLeaderboardsCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    gameCenterLeaderboardsDeleteInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardsDeleteInstance.");
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/gameCenterLeaderboards/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    gameCenterLeaderboardsDeleteInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gameCenterLeaderboardsDeleteInstanceRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    gameCenterLeaderboardsGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardsGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsGameCenterLeaderboards) {
                queryParameters["fields[gameCenterLeaderboards]"] = requestParameters.fieldsGameCenterLeaderboards.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterLeaderboardLocalizations) {
                queryParameters["fields[gameCenterLeaderboardLocalizations]"] = requestParameters.fieldsGameCenterLeaderboardLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterLeaderboardReleases) {
                queryParameters["fields[gameCenterLeaderboardReleases]"] = requestParameters.fieldsGameCenterLeaderboardReleases.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitGameCenterLeaderboardSets !== undefined) {
                queryParameters["limit[gameCenterLeaderboardSets]"] = requestParameters.limitGameCenterLeaderboardSets;
            }
            if (requestParameters.limitLocalizations !== undefined) {
                queryParameters["limit[localizations]"] = requestParameters.limitLocalizations;
            }
            if (requestParameters.limitReleases !== undefined) {
                queryParameters["limit[releases]"] = requestParameters.limitReleases;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/gameCenterLeaderboards/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GameCenterLeaderboardResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    gameCenterLeaderboardsGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.gameCenterLeaderboardsGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    gameCenterLeaderboardsGroupLeaderboardGetToOneRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardsGroupLeaderboardGetToOneRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsGameCenterLeaderboardLocalizations) {
                queryParameters["fields[gameCenterLeaderboardLocalizations]"] = requestParameters.fieldsGameCenterLeaderboardLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterLeaderboardSets) {
                queryParameters["fields[gameCenterLeaderboardSets]"] = requestParameters.fieldsGameCenterLeaderboardSets.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterGroups) {
                queryParameters["fields[gameCenterGroups]"] = requestParameters.fieldsGameCenterGroups.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterDetails) {
                queryParameters["fields[gameCenterDetails]"] = requestParameters.fieldsGameCenterDetails.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterLeaderboards) {
                queryParameters["fields[gameCenterLeaderboards]"] = requestParameters.fieldsGameCenterLeaderboards.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterLeaderboardReleases) {
                queryParameters["fields[gameCenterLeaderboardReleases]"] = requestParameters.fieldsGameCenterLeaderboardReleases.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitGameCenterLeaderboardSets !== undefined) {
                queryParameters["limit[gameCenterLeaderboardSets]"] = requestParameters.limitGameCenterLeaderboardSets;
            }
            if (requestParameters.limitLocalizations !== undefined) {
                queryParameters["limit[localizations]"] = requestParameters.limitLocalizations;
            }
            if (requestParameters.limitReleases !== undefined) {
                queryParameters["limit[releases]"] = requestParameters.limitReleases;
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/gameCenterLeaderboards/{id}/groupLeaderboard`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GameCenterLeaderboardResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    gameCenterLeaderboardsGroupLeaderboardGetToOneRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.gameCenterLeaderboardsGroupLeaderboardGetToOneRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    gameCenterLeaderboardsGroupLeaderboardGetToOneRelationshipRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship.");
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/gameCenterLeaderboards/{id}/relationships/groupLeaderboard`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GameCenterLeaderboardGroupLeaderboardLinkageResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.gameCenterLeaderboardsGroupLeaderboardGetToOneRelationshipRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationshipRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship.");
            }
            if (requestParameters.gameCenterLeaderboardGroupLeaderboardLinkageRequest === null || requestParameters.gameCenterLeaderboardGroupLeaderboardLinkageRequest === undefined) {
                throw new runtime.RequiredError("gameCenterLeaderboardGroupLeaderboardLinkageRequest", "Required parameter requestParameters.gameCenterLeaderboardGroupLeaderboardLinkageRequest was null or undefined when calling gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/gameCenterLeaderboards/{id}/relationships/groupLeaderboard`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.GameCenterLeaderboardGroupLeaderboardLinkageRequestToJSON)(requestParameters.gameCenterLeaderboardGroupLeaderboardLinkageRequest)
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationshipRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    gameCenterLeaderboardsLocalizationsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardsLocalizationsGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsGameCenterLeaderboardLocalizations) {
                queryParameters["fields[gameCenterLeaderboardLocalizations]"] = requestParameters.fieldsGameCenterLeaderboardLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterLeaderboardImages) {
                queryParameters["fields[gameCenterLeaderboardImages]"] = requestParameters.fieldsGameCenterLeaderboardImages.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterLeaderboards) {
                queryParameters["fields[gameCenterLeaderboards]"] = requestParameters.fieldsGameCenterLeaderboards.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters["limit"] = requestParameters.limit;
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/gameCenterLeaderboards/{id}/localizations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GameCenterLeaderboardLocalizationsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    gameCenterLeaderboardsLocalizationsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.gameCenterLeaderboardsLocalizationsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    gameCenterLeaderboardsReleasesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardsReleasesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.filterLive) {
                queryParameters["filter[live]"] = requestParameters.filterLive.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterGameCenterDetail) {
                queryParameters["filter[gameCenterDetail]"] = requestParameters.filterGameCenterDetail.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterDetails) {
                queryParameters["fields[gameCenterDetails]"] = requestParameters.fieldsGameCenterDetails.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterLeaderboards) {
                queryParameters["fields[gameCenterLeaderboards]"] = requestParameters.fieldsGameCenterLeaderboards.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsGameCenterLeaderboardReleases) {
                queryParameters["fields[gameCenterLeaderboardReleases]"] = requestParameters.fieldsGameCenterLeaderboardReleases.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters["limit"] = requestParameters.limit;
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/gameCenterLeaderboards/{id}/releases`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GameCenterLeaderboardReleasesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    gameCenterLeaderboardsReleasesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.gameCenterLeaderboardsReleasesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    gameCenterLeaderboardsUpdateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardsUpdateInstance.");
            }
            if (requestParameters.gameCenterLeaderboardUpdateRequest === null || requestParameters.gameCenterLeaderboardUpdateRequest === undefined) {
                throw new runtime.RequiredError("gameCenterLeaderboardUpdateRequest", "Required parameter requestParameters.gameCenterLeaderboardUpdateRequest was null or undefined when calling gameCenterLeaderboardsUpdateInstance.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/gameCenterLeaderboards/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.GameCenterLeaderboardUpdateRequestToJSON)(requestParameters.gameCenterLeaderboardUpdateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GameCenterLeaderboardResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    gameCenterLeaderboardsUpdateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.gameCenterLeaderboardsUpdateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.GameCenterLeaderboardsApi = GameCenterLeaderboardsApi;
/**
 * @export
 */
exports.GameCenterLeaderboardsGetInstanceFieldsGameCenterLeaderboardsEnum = {
    Archived: "archived",
    DefaultFormatter: "defaultFormatter",
    GameCenterDetail: "gameCenterDetail",
    GameCenterGroup: "gameCenterGroup",
    GameCenterLeaderboardSets: "gameCenterLeaderboardSets",
    GroupLeaderboard: "groupLeaderboard",
    Localizations: "localizations",
    RecurrenceDuration: "recurrenceDuration",
    RecurrenceRule: "recurrenceRule",
    RecurrenceStartDate: "recurrenceStartDate",
    ReferenceName: "referenceName",
    Releases: "releases",
    ScoreRangeEnd: "scoreRangeEnd",
    ScoreRangeStart: "scoreRangeStart",
    ScoreSortType: "scoreSortType",
    SubmissionType: "submissionType",
    VendorIdentifier: "vendorIdentifier"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsGetInstanceIncludeEnum = {
    GameCenterDetail: "gameCenterDetail",
    GameCenterGroup: "gameCenterGroup",
    GameCenterLeaderboardSets: "gameCenterLeaderboardSets",
    GroupLeaderboard: "groupLeaderboard",
    Localizations: "localizations",
    Releases: "releases"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsGetInstanceFieldsGameCenterLeaderboardLocalizationsEnum = {
    FormatterOverride: "formatterOverride",
    FormatterSuffix: "formatterSuffix",
    FormatterSuffixSingular: "formatterSuffixSingular",
    GameCenterLeaderboard: "gameCenterLeaderboard",
    GameCenterLeaderboardImage: "gameCenterLeaderboardImage",
    Locale: "locale",
    Name: "name"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsGetInstanceFieldsGameCenterLeaderboardReleasesEnum = {
    GameCenterDetail: "gameCenterDetail",
    GameCenterLeaderboard: "gameCenterLeaderboard",
    Live: "live"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterLeaderboardLocalizationsEnum = {
    FormatterOverride: "formatterOverride",
    FormatterSuffix: "formatterSuffix",
    FormatterSuffixSingular: "formatterSuffixSingular",
    GameCenterLeaderboard: "gameCenterLeaderboard",
    GameCenterLeaderboardImage: "gameCenterLeaderboardImage",
    Locale: "locale",
    Name: "name"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterLeaderboardSetsEnum = {
    GameCenterDetail: "gameCenterDetail",
    GameCenterGroup: "gameCenterGroup",
    GameCenterLeaderboards: "gameCenterLeaderboards",
    GroupLeaderboardSet: "groupLeaderboardSet",
    Localizations: "localizations",
    ReferenceName: "referenceName",
    Releases: "releases",
    VendorIdentifier: "vendorIdentifier"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterGroupsEnum = {
    GameCenterAchievements: "gameCenterAchievements",
    GameCenterDetails: "gameCenterDetails",
    GameCenterLeaderboardSets: "gameCenterLeaderboardSets",
    GameCenterLeaderboards: "gameCenterLeaderboards",
    ReferenceName: "referenceName"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterDetailsEnum = {
    AchievementReleases: "achievementReleases",
    App: "app",
    ArcadeEnabled: "arcadeEnabled",
    ChallengeEnabled: "challengeEnabled",
    DefaultGroupLeaderboard: "defaultGroupLeaderboard",
    DefaultLeaderboard: "defaultLeaderboard",
    GameCenterAchievements: "gameCenterAchievements",
    GameCenterAppVersions: "gameCenterAppVersions",
    GameCenterGroup: "gameCenterGroup",
    GameCenterLeaderboardSets: "gameCenterLeaderboardSets",
    GameCenterLeaderboards: "gameCenterLeaderboards",
    LeaderboardReleases: "leaderboardReleases",
    LeaderboardSetReleases: "leaderboardSetReleases"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterLeaderboardsEnum = {
    Archived: "archived",
    DefaultFormatter: "defaultFormatter",
    GameCenterDetail: "gameCenterDetail",
    GameCenterGroup: "gameCenterGroup",
    GameCenterLeaderboardSets: "gameCenterLeaderboardSets",
    GroupLeaderboard: "groupLeaderboard",
    Localizations: "localizations",
    RecurrenceDuration: "recurrenceDuration",
    RecurrenceRule: "recurrenceRule",
    RecurrenceStartDate: "recurrenceStartDate",
    ReferenceName: "referenceName",
    Releases: "releases",
    ScoreRangeEnd: "scoreRangeEnd",
    ScoreRangeStart: "scoreRangeStart",
    ScoreSortType: "scoreSortType",
    SubmissionType: "submissionType",
    VendorIdentifier: "vendorIdentifier"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedFieldsGameCenterLeaderboardReleasesEnum = {
    GameCenterDetail: "gameCenterDetail",
    GameCenterLeaderboard: "gameCenterLeaderboard",
    Live: "live"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsGroupLeaderboardGetToOneRelatedIncludeEnum = {
    GameCenterDetail: "gameCenterDetail",
    GameCenterGroup: "gameCenterGroup",
    GameCenterLeaderboardSets: "gameCenterLeaderboardSets",
    GroupLeaderboard: "groupLeaderboard",
    Localizations: "localizations",
    Releases: "releases"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardLocalizationsEnum = {
    FormatterOverride: "formatterOverride",
    FormatterSuffix: "formatterSuffix",
    FormatterSuffixSingular: "formatterSuffixSingular",
    GameCenterLeaderboard: "gameCenterLeaderboard",
    GameCenterLeaderboardImage: "gameCenterLeaderboardImage",
    Locale: "locale",
    Name: "name"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardImagesEnum = {
    AssetDeliveryState: "assetDeliveryState",
    FileName: "fileName",
    FileSize: "fileSize",
    GameCenterLeaderboardLocalization: "gameCenterLeaderboardLocalization",
    ImageAsset: "imageAsset",
    UploadOperations: "uploadOperations",
    Uploaded: "uploaded"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsLocalizationsGetToManyRelatedFieldsGameCenterLeaderboardsEnum = {
    Archived: "archived",
    DefaultFormatter: "defaultFormatter",
    GameCenterDetail: "gameCenterDetail",
    GameCenterGroup: "gameCenterGroup",
    GameCenterLeaderboardSets: "gameCenterLeaderboardSets",
    GroupLeaderboard: "groupLeaderboard",
    Localizations: "localizations",
    RecurrenceDuration: "recurrenceDuration",
    RecurrenceRule: "recurrenceRule",
    RecurrenceStartDate: "recurrenceStartDate",
    ReferenceName: "referenceName",
    Releases: "releases",
    ScoreRangeEnd: "scoreRangeEnd",
    ScoreRangeStart: "scoreRangeStart",
    ScoreSortType: "scoreSortType",
    SubmissionType: "submissionType",
    VendorIdentifier: "vendorIdentifier"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsLocalizationsGetToManyRelatedIncludeEnum = {
    GameCenterLeaderboard: "gameCenterLeaderboard",
    GameCenterLeaderboardImage: "gameCenterLeaderboardImage"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsReleasesGetToManyRelatedFieldsGameCenterDetailsEnum = {
    AchievementReleases: "achievementReleases",
    App: "app",
    ArcadeEnabled: "arcadeEnabled",
    ChallengeEnabled: "challengeEnabled",
    DefaultGroupLeaderboard: "defaultGroupLeaderboard",
    DefaultLeaderboard: "defaultLeaderboard",
    GameCenterAchievements: "gameCenterAchievements",
    GameCenterAppVersions: "gameCenterAppVersions",
    GameCenterGroup: "gameCenterGroup",
    GameCenterLeaderboardSets: "gameCenterLeaderboardSets",
    GameCenterLeaderboards: "gameCenterLeaderboards",
    LeaderboardReleases: "leaderboardReleases",
    LeaderboardSetReleases: "leaderboardSetReleases"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsReleasesGetToManyRelatedFieldsGameCenterLeaderboardsEnum = {
    Archived: "archived",
    DefaultFormatter: "defaultFormatter",
    GameCenterDetail: "gameCenterDetail",
    GameCenterGroup: "gameCenterGroup",
    GameCenterLeaderboardSets: "gameCenterLeaderboardSets",
    GroupLeaderboard: "groupLeaderboard",
    Localizations: "localizations",
    RecurrenceDuration: "recurrenceDuration",
    RecurrenceRule: "recurrenceRule",
    RecurrenceStartDate: "recurrenceStartDate",
    ReferenceName: "referenceName",
    Releases: "releases",
    ScoreRangeEnd: "scoreRangeEnd",
    ScoreRangeStart: "scoreRangeStart",
    ScoreSortType: "scoreSortType",
    SubmissionType: "submissionType",
    VendorIdentifier: "vendorIdentifier"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsReleasesGetToManyRelatedFieldsGameCenterLeaderboardReleasesEnum = {
    GameCenterDetail: "gameCenterDetail",
    GameCenterLeaderboard: "gameCenterLeaderboard",
    Live: "live"
};
/**
 * @export
 */
exports.GameCenterLeaderboardsReleasesGetToManyRelatedIncludeEnum = {
    GameCenterDetail: "gameCenterDetail",
    GameCenterLeaderboard: "gameCenterLeaderboard"
};
