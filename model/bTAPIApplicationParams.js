"use strict";
/**
 * Onshape REST API
 * The Onshape REST API consumed by all clients.
 *
 * OpenAPI spec version: 1.93
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BTAPIApplicationParams = void 0;
var BTAPIApplicationParams = /** @class */ (function () {
    function BTAPIApplicationParams() {
    }
    BTAPIApplicationParams.getAttributeTypeMap = function () {
        return BTAPIApplicationParams.attributeTypeMap;
    };
    BTAPIApplicationParams.discriminator = undefined;
    BTAPIApplicationParams.attributeTypeMap = [
        {
            "name": "hiddenFromPlusMenu",
            "baseName": "hiddenFromPlusMenu_",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "baseHref",
            "baseName": "baseHref",
            "type": "string"
        },
        {
            "name": "supportsCollaboration",
            "baseName": "supportsCollaboration",
            "type": "boolean"
        },
        {
            "name": "developerId",
            "baseName": "developerId",
            "type": "string"
        },
        {
            "name": "redirectURLs",
            "baseName": "redirectURLs",
            "type": "Array<string>"
        },
        {
            "name": "primaryFormat",
            "baseName": "primaryFormat",
            "type": "string"
        },
        {
            "name": "uiSpec",
            "baseName": "uiSpec",
            "type": "string"
        },
        {
            "name": "supportsMerge",
            "baseName": "supportsMerge",
            "type": "boolean"
        },
        {
            "name": "adminTeamId",
            "baseName": "adminTeamId",
            "type": "string"
        },
        {
            "name": "hiddenFromPlusMenu",
            "baseName": "hiddenFromPlusMenu",
            "type": "boolean"
        },
        {
            "name": "developerEmail",
            "baseName": "developerEmail",
            "type": "string"
        },
        {
            "name": "internalGrantOnDemand",
            "baseName": "internalGrantOnDemand",
            "type": "boolean"
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string"
        },
        {
            "name": "scopeNames",
            "baseName": "scopeNames",
            "type": "Array<string>"
        },
        {
            "name": "storeEntryIsPublic",
            "baseName": "storeEntryIsPublic",
            "type": "boolean"
        }
    ];
    return BTAPIApplicationParams;
}());
exports.BTAPIApplicationParams = BTAPIApplicationParams;
