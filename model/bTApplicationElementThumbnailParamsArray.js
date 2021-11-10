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
exports.BTApplicationElementThumbnailParamsArray = void 0;
var BTApplicationElementThumbnailParamsArray = /** @class */ (function () {
    function BTApplicationElementThumbnailParamsArray() {
    }
    BTApplicationElementThumbnailParamsArray.getAttributeTypeMap = function () {
        return BTApplicationElementThumbnailParamsArray.attributeTypeMap;
    };
    BTApplicationElementThumbnailParamsArray.discriminator = undefined;
    BTApplicationElementThumbnailParamsArray.attributeTypeMap = [
        {
            "name": "thumbnails",
            "baseName": "thumbnails",
            "type": "Array<BTApplicationElementThumbnailParams>"
        }
    ];
    return BTApplicationElementThumbnailParamsArray;
}());
exports.BTApplicationElementThumbnailParamsArray = BTApplicationElementThumbnailParamsArray;
