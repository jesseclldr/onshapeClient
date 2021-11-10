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
exports.BTModelTessellationParams = void 0;
var BTModelTessellationParams = /** @class */ (function () {
    function BTModelTessellationParams() {
    }
    BTModelTessellationParams.getAttributeTypeMap = function () {
        return BTModelTessellationParams.attributeTypeMap;
    };
    BTModelTessellationParams.discriminator = undefined;
    BTModelTessellationParams.attributeTypeMap = [
        {
            "name": "partIds",
            "baseName": "partIds",
            "type": "Array<string>"
        },
        {
            "name": "partQuery",
            "baseName": "partQuery",
            "type": "string"
        },
        {
            "name": "angleTolerance",
            "baseName": "angleTolerance",
            "type": "number"
        },
        {
            "name": "chordTolerance",
            "baseName": "chordTolerance",
            "type": "number"
        },
        {
            "name": "maxFacetWidth",
            "baseName": "maxFacetWidth",
            "type": "number"
        },
        {
            "name": "outputVertexNormals",
            "baseName": "outputVertexNormals",
            "type": "boolean"
        },
        {
            "name": "outputFacetNormals",
            "baseName": "outputFacetNormals",
            "type": "boolean"
        },
        {
            "name": "outputTextureCoordinates",
            "baseName": "outputTextureCoordinates",
            "type": "boolean"
        },
        {
            "name": "outputIndexTable",
            "baseName": "outputIndexTable",
            "type": "boolean"
        },
        {
            "name": "entityIds",
            "baseName": "entityIds",
            "type": "Array<string>"
        },
        {
            "name": "outputErrorFaces",
            "baseName": "outputErrorFaces",
            "type": "boolean"
        },
        {
            "name": "partId",
            "baseName": "partId",
            "type": "string"
        },
        {
            "name": "elementMicroversionId",
            "baseName": "elementMicroversionId",
            "type": "string"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
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
        }
    ];
    return BTModelTessellationParams;
}());
exports.BTModelTessellationParams = BTModelTessellationParams;
