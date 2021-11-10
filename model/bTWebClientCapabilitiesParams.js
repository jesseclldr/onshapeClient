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
exports.BTWebClientCapabilitiesParams = void 0;
var BTWebClientCapabilitiesParams = /** @class */ (function () {
    function BTWebClientCapabilitiesParams() {
    }
    BTWebClientCapabilitiesParams.getAttributeTypeMap = function () {
        return BTWebClientCapabilitiesParams.attributeTypeMap;
    };
    BTWebClientCapabilitiesParams.discriminator = undefined;
    BTWebClientCapabilitiesParams.attributeTypeMap = [
        {
            "name": "oesStandardDerivatives",
            "baseName": "oesStandardDerivatives_",
            "type": "boolean"
        },
        {
            "name": "vendor",
            "baseName": "vendor",
            "type": "string"
        },
        {
            "name": "depthTexture",
            "baseName": "depthTexture",
            "type": "boolean"
        },
        {
            "name": "renderer",
            "baseName": "renderer",
            "type": "string"
        },
        {
            "name": "angleInstancedArrays",
            "baseName": "angleInstancedArrays",
            "type": "boolean"
        },
        {
            "name": "extTextureFilterAnisotropic",
            "baseName": "extTextureFilterAnisotropic",
            "type": "boolean"
        },
        {
            "name": "oesElementIndexUint",
            "baseName": "oesElementIndexUint",
            "type": "boolean"
        },
        {
            "name": "oesTextureFloat",
            "baseName": "oesTextureFloat",
            "type": "boolean"
        },
        {
            "name": "oesTextureFloatLinear",
            "baseName": "oesTextureFloatLinear",
            "type": "boolean"
        },
        {
            "name": "oesTextureHalfFloat",
            "baseName": "oesTextureHalfFloat",
            "type": "boolean"
        },
        {
            "name": "oesTextureHalfFloatLinear",
            "baseName": "oesTextureHalfFloatLinear",
            "type": "boolean"
        },
        {
            "name": "oesVertexArrayObject",
            "baseName": "oesVertexArrayObject",
            "type": "boolean"
        },
        {
            "name": "compressedTextureS3tc",
            "baseName": "compressedTextureS3tc",
            "type": "boolean"
        },
        {
            "name": "drawBuffers",
            "baseName": "drawBuffers",
            "type": "boolean"
        },
        {
            "name": "has3dMouse",
            "baseName": "has3dMouse",
            "type": "boolean"
        },
        {
            "name": "screenWidth",
            "baseName": "screenWidth",
            "type": "number"
        },
        {
            "name": "screenHeight",
            "baseName": "screenHeight",
            "type": "number"
        },
        {
            "name": "devicePixelRatio",
            "baseName": "devicePixelRatio",
            "type": "number"
        }
    ];
    return BTWebClientCapabilitiesParams;
}());
exports.BTWebClientCapabilitiesParams = BTWebClientCapabilitiesParams;
