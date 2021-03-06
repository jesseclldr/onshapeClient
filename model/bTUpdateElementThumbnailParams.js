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
exports.BTUpdateElementThumbnailParams = void 0;
var BTUpdateElementThumbnailParams = /** @class */ (function () {
    function BTUpdateElementThumbnailParams() {
    }
    BTUpdateElementThumbnailParams.getAttributeTypeMap = function () {
        return BTUpdateElementThumbnailParams.attributeTypeMap;
    };
    BTUpdateElementThumbnailParams.discriminator = undefined;
    BTUpdateElementThumbnailParams.attributeTypeMap = [
        {
            "name": "encodedConfigurationId",
            "baseName": "encodedConfigurationId",
            "type": "string"
        },
        {
            "name": "versionId",
            "baseName": "versionId",
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
    return BTUpdateElementThumbnailParams;
}());
exports.BTUpdateElementThumbnailParams = BTUpdateElementThumbnailParams;
