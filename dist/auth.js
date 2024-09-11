"use strict";
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
exports.generateAuthToken = generateAuthToken;
const jose = __importStar(require("jose"));
// Generates a JWT token for use with the App Store Connect API
function generateAuthToken(_a) {
    return __awaiter(this, arguments, void 0, function* ({ apiKeyId, issuerId, privateKey, expirationTime }) {
        const alg = "ES256";
        const key = yield jose.importPKCS8(privateKey, alg);
        const token = yield new jose.SignJWT({})
            .setProtectedHeader({
            // The algorithm used to sign the token (ECDSA with SHA-256)
            alg,
            // The ID of the private key used to sign the token
            kid: apiKeyId,
            // The type of the token (JWT)
            typ: "JWT",
        })
            .setIssuer(issuerId)
            .setAudience("appstoreconnect-v1")
            .setExpirationTime(expirationTime !== null && expirationTime !== void 0 ? expirationTime : new Date().getTime() / 1000)
            .sign(key);
        // Return the generated token
        return token;
    });
}
