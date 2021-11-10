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
exports.BTExportTessellatedEdgesEdge = void 0;
var BTExportTessellatedEdgesEdge = /** @class */ (function () {
    function BTExportTessellatedEdgesEdge() {
    }
    BTExportTessellatedEdgesEdge.getAttributeTypeMap = function () {
        return BTExportTessellatedEdgesEdge.attributeTypeMap;
    };
    BTExportTessellatedEdgesEdge.discriminator = undefined;
    BTExportTessellatedEdgesEdge.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "vertices",
            "baseName": "vertices",
            "type": "Array<BTVector3d>"
        },
        {
            "name": "typeId",
            "baseName": "typeId",
            "type": "number"
        },
        {
            "name": "exportTypeName",
            "baseName": "exportTypeName",
            "type": "string"
        },
        {
            "name": "connectionSource",
            "baseName": "connectionSource",
            "type": "BTConnection"
        },
        {
            "name": "unknownClass",
            "baseName": "unknownClass",
            "type": "boolean"
        }
    ];
    return BTExportTessellatedEdgesEdge;
}());
exports.BTExportTessellatedEdgesEdge = BTExportTessellatedEdgesEdge;
