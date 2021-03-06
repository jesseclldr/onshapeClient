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
exports.Link = void 0;
var Link = /** @class */ (function () {
    function Link() {
    }
    Link.getAttributeTypeMap = function () {
        return Link.attributeTypeMap;
    };
    Link.discriminator = undefined;
    Link.attributeTypeMap = [
        {
            "name": "operationRef",
            "baseName": "operationRef",
            "type": "string"
        },
        {
            "name": "operationId",
            "baseName": "operationId",
            "type": "string"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "requestBody",
            "baseName": "requestBody",
            "type": "any"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: Header; }"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "get$ref",
            "baseName": "get$ref",
            "type": "string"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "server",
            "baseName": "server",
            "type": "Server"
        }
    ];
    return Link;
}());
exports.Link = Link;
