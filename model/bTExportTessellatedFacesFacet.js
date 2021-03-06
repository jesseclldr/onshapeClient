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
exports.BTExportTessellatedFacesFacet = void 0;
var BTExportTessellatedFacesFacet = /** @class */ (function () {
    function BTExportTessellatedFacesFacet() {
    }
    BTExportTessellatedFacesFacet.getAttributeTypeMap = function () {
        return BTExportTessellatedFacesFacet.attributeTypeMap;
    };
    BTExportTessellatedFacesFacet.discriminator = undefined;
    BTExportTessellatedFacesFacet.attributeTypeMap = [
        {
            "name": "normal",
            "baseName": "normal",
            "type": "BTVector3d"
        },
        {
            "name": "indices",
            "baseName": "indices",
            "type": "Array<number>"
        },
        {
            "name": "vertices",
            "baseName": "vertices",
            "type": "Array<BTVector3d>"
        },
        {
            "name": "normals",
            "baseName": "normals",
            "type": "Array<BTVector3d>"
        },
        {
            "name": "textureCoordinates",
            "baseName": "textureCoordinates",
            "type": "Array<BTVector2d>"
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
    return BTExportTessellatedFacesFacet;
}());
exports.BTExportTessellatedFacesFacet = BTExportTessellatedFacesFacet;
