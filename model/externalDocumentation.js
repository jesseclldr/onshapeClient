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
exports.ExternalDocumentation = void 0;
var ExternalDocumentation = /** @class */ (function () {
    function ExternalDocumentation() {
    }
    ExternalDocumentation.getAttributeTypeMap = function () {
        return ExternalDocumentation.attributeTypeMap;
    };
    ExternalDocumentation.discriminator = undefined;
    ExternalDocumentation.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        }
    ];
    return ExternalDocumentation;
}());
exports.ExternalDocumentation = ExternalDocumentation;
