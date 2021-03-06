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
exports.MediaType = void 0;
var MediaType = /** @class */ (function () {
    function MediaType() {
    }
    MediaType.getAttributeTypeMap = function () {
        return MediaType.attributeTypeMap;
    };
    MediaType.discriminator = undefined;
    MediaType.attributeTypeMap = [
        {
            "name": "schema",
            "baseName": "schema",
            "type": "Schema"
        },
        {
            "name": "examples",
            "baseName": "examples",
            "type": "{ [key: string]: Example; }"
        },
        {
            "name": "example",
            "baseName": "example",
            "type": "any"
        },
        {
            "name": "encoding",
            "baseName": "encoding",
            "type": "{ [key: string]: Encoding; }"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        }
    ];
    return MediaType;
}());
exports.MediaType = MediaType;
