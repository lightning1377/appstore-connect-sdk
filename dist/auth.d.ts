interface GenerateAuthTokenOptions {
    apiKeyId: string;
    issuerId: string;
    privateKey: string;
    expirationTime?: number;
}
export declare function generateAuthToken({ apiKeyId, issuerId, privateKey, expirationTime }: GenerateAuthTokenOptions): Promise<string>;
export {};
