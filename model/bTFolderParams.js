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
exports.BTFolderParams = void 0;
var BTFolderParams = /** @class */ (function () {
    function BTFolderParams() {
    }
    BTFolderParams.getAttributeTypeMap = function () {
        return BTFolderParams.attributeTypeMap;
    };
    BTFolderParams.discriminator = undefined;
    BTFolderParams.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "ownerType",
            "baseName": "ownerType",
            "type": "number"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string"
        }
    ];
    return BTFolderParams;
}());
exports.BTFolderParams = BTFolderParams;
