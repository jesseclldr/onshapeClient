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
exports.BTUniqueDocumentItemParams = void 0;
var BTUniqueDocumentItemParams = /** @class */ (function () {
    function BTUniqueDocumentItemParams() {
    }
    BTUniqueDocumentItemParams.getAttributeTypeMap = function () {
        return BTUniqueDocumentItemParams.attributeTypeMap;
    };
    BTUniqueDocumentItemParams.discriminator = undefined;
    BTUniqueDocumentItemParams.attributeTypeMap = [
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string"
        },
        {
            "name": "partId",
            "baseName": "partId",
            "type": "string"
        },
        {
            "name": "elementType",
            "baseName": "elementType",
            "type": "string"
        },
        {
            "name": "versionId",
            "baseName": "versionId",
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
            "name": "partNumber",
            "baseName": "partNumber",
            "type": "string"
        },
        {
            "name": "apiConfiguration",
            "baseName": "apiConfiguration",
            "type": "string"
        }
    ];
    return BTUniqueDocumentItemParams;
}());
exports.BTUniqueDocumentItemParams = BTUniqueDocumentItemParams;
