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
exports.BTDocumentOptionsParams = void 0;
var BTDocumentOptionsParams = /** @class */ (function () {
    function BTDocumentOptionsParams() {
    }
    BTDocumentOptionsParams.getAttributeTypeMap = function () {
        return BTDocumentOptionsParams.attributeTypeMap;
    };
    BTDocumentOptionsParams.discriminator = undefined;
    BTDocumentOptionsParams.attributeTypeMap = [
        {
            "name": "cppServerMemory",
            "baseName": "cppServerMemory",
            "type": "number"
        },
        {
            "name": "enableCppServerMemoryDiagnostics",
            "baseName": "enableCppServerMemoryDiagnostics",
            "type": "boolean"
        },
        {
            "name": "skipRetrievalTest",
            "baseName": "skipRetrievalTest",
            "type": "boolean"
        },
        {
            "name": "extendedDisplayCheck",
            "baseName": "extendedDisplayCheck",
            "type": "boolean"
        },
        {
            "name": "documentMemory",
            "baseName": "documentMemory",
            "type": "number"
        },
        {
            "name": "cppServerLimit",
            "baseName": "cppServerLimit",
            "type": "number"
        },
        {
            "name": "thumbnailCppServerLimit",
            "baseName": "thumbnailCppServerLimit",
            "type": "number"
        },
        {
            "name": "linkedCppServerLimit",
            "baseName": "linkedCppServerLimit",
            "type": "number"
        },
        {
            "name": "drawingServerMemory",
            "baseName": "drawingServerMemory",
            "type": "number"
        },
        {
            "name": "cppServerDefaultElementLimit",
            "baseName": "cppServerDefaultElementLimit",
            "type": "number"
        }
    ];
    return BTDocumentOptionsParams;
}());
exports.BTDocumentOptionsParams = BTDocumentOptionsParams;
