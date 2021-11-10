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
exports.BTExportModelFace = void 0;
var BTExportModelFace = /** @class */ (function () {
    function BTExportModelFace() {
    }
    BTExportModelFace.getAttributeTypeMap = function () {
        return BTExportModelFace.attributeTypeMap;
    };
    BTExportModelFace.discriminator = undefined;
    BTExportModelFace.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "orientation",
            "baseName": "orientation",
            "type": "boolean"
        },
        {
            "name": "area",
            "baseName": "area",
            "type": "number"
        },
        {
            "name": "surface",
            "baseName": "surface",
            "type": "BTSurfaceDescription"
        },
        {
            "name": "loops",
            "baseName": "loops",
            "type": "Array<BTExportModelLoop>"
        },
        {
            "name": "box",
            "baseName": "box",
            "type": "BTBoundingBox"
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
    return BTExportModelFace;
}());
exports.BTExportModelFace = BTExportModelFace;
