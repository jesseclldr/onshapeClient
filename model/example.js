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
exports.Example = void 0;
var Example = /** @class */ (function () {
    function Example() {
    }
    Example.getAttributeTypeMap = function () {
        return Example.attributeTypeMap;
    };
    Example.discriminator = undefined;
    Example.attributeTypeMap = [
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any"
        },
        {
            "name": "externalValue",
            "baseName": "externalValue",
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
        }
    ];
    return Example;
}());
exports.Example = Example;
