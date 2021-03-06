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
exports.BTThumbnailInfo = void 0;
var BTThumbnailInfo = /** @class */ (function () {
    function BTThumbnailInfo() {
    }
    BTThumbnailInfo.getAttributeTypeMap = function () {
        return BTThumbnailInfo.attributeTypeMap;
    };
    BTThumbnailInfo.discriminator = undefined;
    BTThumbnailInfo.attributeTypeMap = [
        {
            "name": "sizes",
            "baseName": "sizes",
            "type": "Array<BTThumbnailSizeInfo>"
        },
        {
            "name": "secondarySizes",
            "baseName": "secondarySizes",
            "type": "Array<Array<BTThumbnailSizeInfo>>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        }
    ];
    return BTThumbnailInfo;
}());
exports.BTThumbnailInfo = BTThumbnailInfo;
