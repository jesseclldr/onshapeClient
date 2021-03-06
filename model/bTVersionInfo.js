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
exports.BTVersionInfo = void 0;
var BTVersionInfo = /** @class */ (function () {
    function BTVersionInfo() {
    }
    BTVersionInfo.getAttributeTypeMap = function () {
        return BTVersionInfo.attributeTypeMap;
    };
    BTVersionInfo.discriminator = undefined;
    BTVersionInfo.attributeTypeMap = [
        {
            "name": "parent",
            "baseName": "parent",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "microversion",
            "baseName": "microversion",
            "type": "string"
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "BTUserBasicSummaryInfo"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "Date"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "lastModifier",
            "baseName": "lastModifier",
            "type": "BTUserBasicSummaryInfo"
        },
        {
            "name": "thumbnail",
            "baseName": "thumbnail",
            "type": "BTThumbnailInfo"
        },
        {
            "name": "overrideDate",
            "baseName": "overrideDate",
            "type": "Date"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
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
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string"
        }
    ];
    return BTVersionInfo;
}());
exports.BTVersionInfo = BTVersionInfo;
