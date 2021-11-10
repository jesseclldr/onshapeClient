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
exports.BTDocumentSearchHitInfo = void 0;
var BTDocumentSearchHitInfo = /** @class */ (function () {
    function BTDocumentSearchHitInfo() {
    }
    BTDocumentSearchHitInfo.getAttributeTypeMap = function () {
        return BTDocumentSearchHitInfo.attributeTypeMap;
    };
    BTDocumentSearchHitInfo.discriminator = undefined;
    BTDocumentSearchHitInfo.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "sourceMap",
            "baseName": "sourceMap",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "highlightedFields",
            "baseName": "highlightedFields",
            "type": "{ [key: string]: Array<string>; }"
        },
        {
            "name": "hit",
            "baseName": "hit",
            "type": "BTESDocumentHit"
        },
        {
            "name": "versionOrWorkspaceName",
            "baseName": "versionOrWorkspaceName",
            "type": "string"
        },
        {
            "name": "elementName",
            "baseName": "elementName",
            "type": "string"
        }
    ];
    return BTDocumentSearchHitInfo;
}());
exports.BTDocumentSearchHitInfo = BTDocumentSearchHitInfo;
