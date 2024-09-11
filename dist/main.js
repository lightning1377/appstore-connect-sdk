"use strict";
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
const openapi_1 = require("./openapi");
const auth_1 = require("./auth");
/**
 * The App Store Connect SDK for Node.js is written in TypeScript and supports all APIs
 * based on OpenAPI Generator.
 *
 * https://github.com/isaced/appstore-connect-sdk
 */
class AppStoreConnectAPI {
    /**
     * Creates an instance of the AppStoreConnectAPI.
     * @param options - The configuration options for the API.
     * @param options.issuerId - The issuer ID for generating JWT token.
     * @param options.privateKeyId - The ID of the private key used for generating JWT token.
     * @param options.privateKey - The content of the private key used for generating JWT token.
     * @param options.fetchApi - (Optional) The FetchAPI implementation to use for API requests.
     * @param options.bearerToken - (Optional) A pre-generated bearer token to use for authentication.
     * @param options.expirationTime - (Optional) The time (in seconds) until the token expires (default 10 minutes)
     * @param options.basePath - (Optional) The base path for the API (without trailing slash, default https://api.appstoreconnect.apple.com).
     * @throws {string} Will throw an error if no bearerToken or private key is provided
     */
    constructor(options) {
        this.bearerTokenGeneratedAt = 0;
        if (options.expirationTime)
            options.expirationTime = options.expirationTime;
        this.options = options;
    }
    /**
     * Generates a new bearer token.
     */
    genToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.options.bearerToken) {
                return this.options.bearerToken;
            }
            else if (this.options.privateKeyId && this.options.issuerId && this.options.privateKey) {
                return yield (0, auth_1.generateAuthToken)({
                    apiKeyId: this.options.privateKeyId,
                    issuerId: this.options.issuerId,
                    privateKey: this.options.privateKey,
                    expirationTime: this.options.expirationTime,
                });
            }
            else {
                throw "No bearerToken!!!";
            }
        });
    }
    /**
     * Create a Configuration object with the authentication token and any provided FetchAPI implementation.
     */
    genConfiguration() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            this.configuration = new openapi_1.Configuration({
                headers: {
                    Authorization: `Bearer ${yield this.genToken()}`,
                },
                fetchApi: this.options.fetchApi,
                basePath: (_a = this.options.basePath) === null || _a === void 0 ? void 0 : _a.replace(/\/$/, ""),
            });
            this.bearerTokenGeneratedAt = Date.now();
        });
    }
    /**
     * Returns the current bearer token, generating a new one if necessary.
     */
    getConfiguration() {
        return __awaiter(this, void 0, void 0, function* () {
            const hasExpired = this.bearerTokenGeneratedAt && Date.now() - this.bearerTokenGeneratedAt > 1000 * this.options.expirationTime;
            if (!this.configuration || hasExpired) {
                yield this.genConfiguration();
            }
            return this.configuration;
        });
    }
    /**
     * Creates an instance of the specified API class.
     * @param apiClass - The API class to instantiate.
     * @returns An instance of the specified API class.
     */
    create(apiClass) {
        return __awaiter(this, void 0, void 0, function* () {
            return new apiClass(yield this.getConfiguration());
        });
    }
}
exports.default = AppStoreConnectAPI;
