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
exports.Tag = void 0;
var Tag = /** @class */ (function () {
    function Tag() {
    }
    Tag.getAttributeTypeMap = function () {
        return Tag.attributeTypeMap;
    };
    Tag.discriminator = undefined;
    Tag.attributeTypeMap = [
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
            "name": "externalDocs",
            "baseName": "externalDocs",
            "type": "ExternalDocumentation"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        }
    ];
    return Tag;
}());
exports.Tag = Tag;