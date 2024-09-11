import { FetchAPI, BaseAPI } from "./openapi/runtime";
import { Configuration } from "./openapi";
/**
 * Options for configuring the AppStoreConnectAPI instance.
 */
interface AppStoreConnectAPIOptions {
    /**
     * The issuer ID associated with the private key.
     */
    issuerId?: string;
    /**
     * The ID of the private key.
     */
    privateKeyId?: string;
    /**
     * The private key in PEM format.
     */
    privateKey?: string;
    /**
     * An optional FetchAPI instance to use for making HTTP requests.
     */
    fetchApi?: FetchAPI;
    /**
     * A bearer token can be provided directly, which will be used instead of generating a new token
     */
    bearerToken?: string;
    /**
     * The time (in seconds) until the token expires (default 10 minutes)
     */
    expirationTime?: number;
    /**
     * The base path for the API (without trailing slash, default https://api.appstoreconnect.apple.com).
     */
    basePath?: string;
}
/**
 * The App Store Connect SDK for Node.js is written in TypeScript and supports all APIs
 * based on OpenAPI Generator.
 *
 * https://github.com/isaced/appstore-connect-sdk
 */
export default class AppStoreConnectAPI {
    private bearerTokenGeneratedAt;
    private options;
    private configuration?;
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
    constructor(options: AppStoreConnectAPIOptions);
    /**
     * Generates a new bearer token.
     */
    genToken(): Promise<string>;
    /**
     * Create a Configuration object with the authentication token and any provided FetchAPI implementation.
     */
    genConfiguration(): Promise<void>;
    /**
     * Returns the current bearer token, generating a new one if necessary.
     */
    getConfiguration(): Promise<Configuration | undefined>;
    /**
     * Creates an instance of the specified API class.
     * @param apiClass - The API class to instantiate.
     * @returns An instance of the specified API class.
     */
    create<T extends BaseAPI>(apiClass: new (configuration?: Configuration) => T): Promise<T>;
}
export {};
