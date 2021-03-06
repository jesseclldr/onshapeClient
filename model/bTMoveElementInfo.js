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
exports.BTMoveElementInfo = void 0;
var BTMoveElementInfo = /** @class */ (function () {
    function BTMoveElementInfo() {
    }
    BTMoveElementInfo.getAttributeTypeMap = function () {
        return BTMoveElementInfo.attributeTypeMap;
    };
    BTMoveElementInfo.discriminator = undefined;
    BTMoveElementInfo.attributeTypeMap = [
        {
            "name": "newDocumentVersionId",
            "baseName": "newDocumentVersionId",
            "type": "string"
        },
        {
            "name": "newDocumentName",
            "baseName": "newDocumentName",
            "type": "string"
        },
        {
            "name": "newWorkspaceId",
            "baseName": "newWorkspaceId",
            "type": "string"
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string"
        },
        {
            "name": "newDocumentId",
            "baseName": "newDocumentId",
            "type": "string"
        },
        {
            "name": "elementOriginalToNewMap",
            "baseName": "elementOriginalToNewMap",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "isNewDocument",
            "baseName": "isNewDocument",
            "type": "boolean"
        }
    ];
    return BTMoveElementInfo;
}());
exports.BTMoveElementInfo = BTMoveElementInfo;
