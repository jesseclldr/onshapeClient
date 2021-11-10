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
exports.BTShareParams = void 0;
var BTShareParams = /** @class */ (function () {
    function BTShareParams() {
    }
    BTShareParams.getAttributeTypeMap = function () {
        return BTShareParams.attributeTypeMap;
    };
    BTShareParams.discriminator = undefined;
    BTShareParams.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "entries",
            "baseName": "entries",
            "type": "Array<BTShareEntryParams>"
        },
        {
            "name": "permission",
            "baseName": "permission",
            "type": "number"
        },
        {
            "name": "encodedConfiguration",
            "baseName": "encodedConfiguration",
            "type": "string"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        },
        {
            "name": "folderId",
            "baseName": "folderId",
            "type": "string"
        },
        {
            "name": "permissionSet",
            "baseName": "permissionSet",
            "type": "BTPermissionSet"
        },
        {
            "name": "update",
            "baseName": "update",
            "type": "boolean"
        }
    ];
    return BTShareParams;
}());
exports.BTShareParams = BTShareParams;