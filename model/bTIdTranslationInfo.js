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
exports.BTIdTranslationInfo = void 0;
var BTIdTranslationInfo = /** @class */ (function () {
    function BTIdTranslationInfo() {
    }
    BTIdTranslationInfo.getAttributeTypeMap = function () {
        return BTIdTranslationInfo.attributeTypeMap;
    };
    BTIdTranslationInfo.discriminator = undefined;
    BTIdTranslationInfo.attributeTypeMap = [
        {
            "name": "sourceDocumentMicroversion",
            "baseName": "sourceDocumentMicroversion",
            "type": "string"
        },
        {
            "name": "targetDocumentMicroversion",
            "baseName": "targetDocumentMicroversion",
            "type": "string"
        },
        {
            "name": "ids",
            "baseName": "ids",
            "type": "Array<BTIdTranslationResultInfo>"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        }
    ];
    return BTIdTranslationInfo;
}());
exports.BTIdTranslationInfo = BTIdTranslationInfo;
