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
exports.BTNextPartNumberParam = void 0;
var BTNextPartNumberParam = /** @class */ (function () {
    function BTNextPartNumberParam() {
    }
    BTNextPartNumberParam.getAttributeTypeMap = function () {
        return BTNextPartNumberParam.attributeTypeMap;
    };
    BTNextPartNumberParam.discriminator = undefined;
    BTNextPartNumberParam.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
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
            "type": "number"
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
        }
    ];
    return BTNextPartNumberParam;
}());
exports.BTNextPartNumberParam = BTNextPartNumberParam;
