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
exports.BTElementThumbnailDataParams = void 0;
var BTElementThumbnailDataParams = /** @class */ (function () {
    function BTElementThumbnailDataParams() {
    }
    BTElementThumbnailDataParams.getAttributeTypeMap = function () {
        return BTElementThumbnailDataParams.attributeTypeMap;
    };
    BTElementThumbnailDataParams.discriminator = undefined;
    BTElementThumbnailDataParams.attributeTypeMap = [
        {
            "name": "encodedBTDBConfigurationId",
            "baseName": "encodedBTDBConfigurationId",
            "type": "string"
        }
    ];
    return BTElementThumbnailDataParams;
}());
exports.BTElementThumbnailDataParams = BTElementThumbnailDataParams;
