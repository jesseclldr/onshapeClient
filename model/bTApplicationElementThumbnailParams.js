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
exports.BTApplicationElementThumbnailParams = void 0;
var BTApplicationElementThumbnailParams = /** @class */ (function () {
    function BTApplicationElementThumbnailParams() {
    }
    BTApplicationElementThumbnailParams.getAttributeTypeMap = function () {
        return BTApplicationElementThumbnailParams.attributeTypeMap;
    };
    BTApplicationElementThumbnailParams.discriminator = undefined;
    BTApplicationElementThumbnailParams.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "isPrimary",
            "baseName": "isPrimary",
            "type": "boolean"
        },
        {
            "name": "base64EncodedImage",
            "baseName": "base64EncodedImage",
            "type": "string"
        },
        {
            "name": "uniqueId",
            "baseName": "uniqueId",
            "type": "string"
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
        }
    ];
    return BTApplicationElementThumbnailParams;
}());
exports.BTApplicationElementThumbnailParams = BTApplicationElementThumbnailParams;
