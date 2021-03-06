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
exports.BTCopyDocumentParams = void 0;
var BTCopyDocumentParams = /** @class */ (function () {
    function BTCopyDocumentParams() {
    }
    BTCopyDocumentParams.getAttributeTypeMap = function () {
        return BTCopyDocumentParams.attributeTypeMap;
    };
    BTCopyDocumentParams.discriminator = undefined;
    BTCopyDocumentParams.attributeTypeMap = [
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string"
        },
        {
            "name": "betaCapabilityIds",
            "baseName": "betaCapabilityIds",
            "type": "Array<string>"
        },
        {
            "name": "ownerTypeIndex",
            "baseName": "ownerTypeIndex",
            "type": "number"
        },
        {
            "name": "newName",
            "baseName": "newName",
            "type": "string"
        },
        {
            "name": "isPublic",
            "baseName": "isPublic",
            "type": "boolean"
        }
    ];
    return BTCopyDocumentParams;
}());
exports.BTCopyDocumentParams = BTCopyDocumentParams;
