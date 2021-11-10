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
exports.BTTranslateFormatParams = void 0;
var BTTranslateFormatParams = /** @class */ (function () {
    function BTTranslateFormatParams() {
    }
    BTTranslateFormatParams.getAttributeTypeMap = function () {
        return BTTranslateFormatParams.attributeTypeMap;
    };
    BTTranslateFormatParams.discriminator = undefined;
    BTTranslateFormatParams.attributeTypeMap = [
        {
            "name": "linkDocumentId",
            "baseName": "linkDocumentId",
            "type": "string"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "string"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        },
        {
            "name": "linkDocumentWorkspaceId",
            "baseName": "linkDocumentWorkspaceId",
            "type": "string"
        },
        {
            "name": "grouping",
            "baseName": "grouping",
            "type": "boolean"
        },
        {
            "name": "importInBackground",
            "baseName": "importInBackground",
            "type": "boolean"
        },
        {
            "name": "notifyUser",
            "baseName": "notifyUser",
            "type": "boolean"
        },
        {
            "name": "partIds",
            "baseName": "partIds",
            "type": "string"
        },
        {
            "name": "triggerAutoDownload",
            "baseName": "triggerAutoDownload",
            "type": "boolean"
        },
        {
            "name": "connectionId",
            "baseName": "connectionId",
            "type": "string"
        },
        {
            "name": "storeInDocument",
            "baseName": "storeInDocument",
            "type": "boolean"
        },
        {
            "name": "cloudStorageAccountId",
            "baseName": "cloudStorageAccountId",
            "type": "string"
        },
        {
            "name": "formatName",
            "baseName": "formatName",
            "type": "string"
        },
        {
            "name": "cloudObjectId",
            "baseName": "cloudObjectId",
            "type": "string"
        },
        {
            "name": "versionString",
            "baseName": "versionString",
            "type": "string"
        },
        {
            "name": "sourceName",
            "baseName": "sourceName",
            "type": "string"
        },
        {
            "name": "destinationName",
            "baseName": "destinationName",
            "type": "string"
        },
        {
            "name": "flatten",
            "baseName": "flatten",
            "type": "boolean"
        },
        {
            "name": "includeExportIds",
            "baseName": "includeExportIds",
            "type": "boolean"
        },
        {
            "name": "textAsGeometry",
            "baseName": "textAsGeometry",
            "type": "boolean"
        },
        {
            "name": "showOverriddenDimensions",
            "baseName": "showOverriddenDimensions",
            "type": "boolean"
        },
        {
            "name": "currentSheetOnly",
            "baseName": "currentSheetOnly",
            "type": "boolean"
        },
        {
            "name": "imageWidth",
            "baseName": "imageWidth",
            "type": "number"
        },
        {
            "name": "imageHeight",
            "baseName": "imageHeight",
            "type": "number"
        },
        {
            "name": "colorMethod",
            "baseName": "colorMethod",
            "type": "string"
        },
        {
            "name": "splinesAsPolylines",
            "baseName": "splinesAsPolylines",
            "type": "boolean"
        },
        {
            "name": "selectablePdfText",
            "baseName": "selectablePdfText",
            "type": "boolean"
        },
        {
            "name": "foreignId",
            "baseName": "foreignId",
            "type": "string"
        },
        {
            "name": "uploadId",
            "baseName": "uploadId",
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
            "name": "updateExistingImportFeatures",
            "baseName": "updateExistingImportFeatures",
            "type": "boolean"
        },
        {
            "name": "blobMicroversionId",
            "baseName": "blobMicroversionId",
            "type": "string"
        },
        {
            "name": "originalForeignId",
            "baseName": "originalForeignId",
            "type": "string"
        },
        {
            "name": "blobElementId",
            "baseName": "blobElementId",
            "type": "string"
        },
        {
            "name": "specifyUnits",
            "baseName": "specifyUnits",
            "type": "boolean"
        },
        {
            "name": "splitAssembliesIntoMultipleDocuments",
            "baseName": "splitAssembliesIntoMultipleDocuments",
            "type": "boolean"
        },
        {
            "name": "flattenAssemblies",
            "baseName": "flattenAssemblies",
            "type": "boolean"
        },
        {
            "name": "getyAxisIsUp",
            "baseName": "getyAxisIsUp",
            "type": "boolean"
        },
        {
            "name": "allowFaultyParts",
            "baseName": "allowFaultyParts",
            "type": "boolean"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string"
        }
    ];
    return BTTranslateFormatParams;
}());
exports.BTTranslateFormatParams = BTTranslateFormatParams;