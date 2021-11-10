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
exports.BTMetadataPropertyParams = void 0;
var BTMetadataPropertyParams = /** @class */ (function () {
    function BTMetadataPropertyParams() {
    }
    BTMetadataPropertyParams.getAttributeTypeMap = function () {
        return BTMetadataPropertyParams.attributeTypeMap;
    };
    BTMetadataPropertyParams.discriminator = undefined;
    BTMetadataPropertyParams.attributeTypeMap = [
        {
            "name": "array",
            "baseName": "array",
            "type": "boolean"
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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "propertyConfigParamList",
            "baseName": "propertyConfigParamList",
            "type": "Array<BTMetadataPropertyConfigParams>"
        },
        {
            "name": "valueType",
            "baseName": "valueType",
            "type": "number"
        },
        {
            "name": "ownerTypeOrdinal",
            "baseName": "ownerTypeOrdinal",
            "type": "number"
        },
        {
            "name": "objectDefName",
            "baseName": "objectDefName",
            "type": "string"
        },
        {
            "name": "blobMimeType",
            "baseName": "blobMimeType",
            "type": "string"
        },
        {
            "name": "editableInVersion",
            "baseName": "editableInVersion",
            "type": "boolean"
        },
        {
            "name": "editableInMicroversion",
            "baseName": "editableInMicroversion",
            "type": "boolean"
        },
        {
            "name": "searchBoost",
            "baseName": "searchBoost",
            "type": "number"
        }
    ];
    return BTMetadataPropertyParams;
}());
exports.BTMetadataPropertyParams = BTMetadataPropertyParams;
