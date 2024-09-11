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
import type { ActorAttributes } from "./ActorAttributes";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface Actor
 */
export interface Actor {
    /**
     *
     * @type {string}
     * @memberof Actor
     */
    type: ActorTypeEnum;
    /**
     *
     * @type {string}
     * @memberof Actor
     */
    id: string;
    /**
     *
     * @type {ActorAttributes}
     * @memberof Actor
     */
    attributes?: ActorAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof Actor
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const ActorTypeEnum: {
    readonly Actors: "actors";
};
export type ActorTypeEnum = (typeof ActorTypeEnum)[keyof typeof ActorTypeEnum];
/**
 * Check if a given object implements the Actor interface.
 */
export declare function instanceOfActor(value: object): boolean;
export declare function ActorFromJSON(json: any): Actor;
export declare function ActorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Actor;
export declare function ActorToJSON(value?: Actor | null): any;
